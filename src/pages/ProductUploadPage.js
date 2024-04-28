import DisplayProjects from "../components/DisplayProjects";

import React, { useState } from "react";
import { auth, db } from "../index"; // Adjust path as necessary
import { collection, addDoc } from "firebase/firestore";

import { storage } from "../index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "../styles/ProductUploadPage.css";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";

const ProductUploadPage = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged((auth) => {
    if (auth.user) setUser(user);
  });

  const emptyInfo = {
    id: "",
    author: "",
    title: "",
    price: 0,
    coverImage: null,
    detailedDescription: "",
    shortDescription: "",
    descriptionFile: null,
    tags: [],
    ordered: 0,
    saved: 0,
    stars: 0,
  };
  const [productInfo, setProductInfo] = useState(emptyInfo);

  const [products, setProducts] = useState([]);

  const uploadImage = async (file, folderName = "uploads") => {
    // Assuming 'userId' is available and relevant for your use-case
    const userId = "unique_user_id"; // Replace with actual user ID logic as needed
    const fileRef = ref(storage, `${folderName}/${userId}_${file.name}`);

    const uploadTask = uploadBytesResumable(fileRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Upload failed", error);
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProductInfo({ ...productInfo, [name]: files[0] });
    } else {
      setProductInfo({ ...productInfo, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ensure user has logged in
    if (!auth.user) {
      alert("not logged in yet");
      return;
    }

    // Prepare the product data, perhaps already done in your existing code
    const newProductData = {
      author: user.user.username,
      title: productInfo.title,
      price: productInfo.price,
      coverImage: productInfo.coverImage,
      detailedDescription: productInfo.detailedDescription,
      shortDescription: productInfo.shortDescription,
      descriptionFile: productInfo.descriptionFile,
      tags: productInfo.hashTag.split(",").map((i) => i.trim()),
      ordered: 0,
      saved: 0,
      stars: 0,
    };

    // Upload the cover image first and update the URL
    if (
      newProductData.coverImage &&
      newProductData.coverImage instanceof File
    ) {
      newProductData.coverImage = await uploadImage(
        newProductData.coverImage,
        "profile_pictures"
      );
    }

    // Upload the description file and update the URL
    if (
      newProductData.descriptionFile &&
      newProductData.descriptionFile instanceof File
    ) {
      newProductData.descriptionFile = await uploadImage(
        newProductData.descriptionFile,
        "product_descriptions"
      );
    }

    try {
      // Add the new project to Firestore
      const newDocId = await addNewProject(newProductData);
      console.log("Project successfully added with ID:", newDocId);

      // Update UI or state as needed after successful addition
    } catch (error) {
      console.error("Failed to add new project:", error);
    }

    setProductInfo(emptyInfo);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <p className="input-title"> Product Title </p>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          onChange={handleChange}
        />
        <p className="input-title"> Price </p>
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <p className="input-title"> Cover Image </p>
        <input type="file" name="coverImage" onChange={handleChange} />
        <p className="input-title"> Detailed Description </p>
        <textarea
          name="detailedDescription"
          placeholder="Detailed Description"
          onChange={handleChange}></textarea>
        <p className="input-title"> Short Description </p>
        <textarea
          name="shortDescription"
          placeholder="Short Description"
          onChange={handleChange}></textarea>
        <p className="input-title"> Description File </p>
        <input type="file" name="descriptionFile" onChange={handleChange} />
        <p className="input-title"> Hash Tag </p>
        <input
          type="text"
          name="hashTag"
          placeholder="e.g. tag1, tag2, tag3"
          onChange={handleChange}
        />
        <button type="submit" className="upload">
          Upload Product
        </button>
      </form>
      <DisplayProjects />
    </div>
  );
};

export async function addNewProject(projectData) {
  try {
    // Reference to the 'projects' collection
    const collectionRef = collection(db, "Products");
    // Add a new document to the 'projects' collection
    const docRef = await addDoc(collectionRef, projectData);
    console.log("New project added with ID:", docRef.id);
    return docRef.id; // Returning the new document's ID if needed
  } catch (error) {
    console.error("Error adding new project to Firestore:", error);
    throw new Error(error); // Optional: re-throw to handle it further up the call chain
  }
}

export default ProductUploadPage;
