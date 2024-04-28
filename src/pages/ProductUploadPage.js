import DisplayProjects from "../components/DisplayProjects";

import React, { useEffect, useState } from "react";
import { auth, db } from "../index"; // Adjust path as necessary
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

import { storage } from "../index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "../styles/ProductUploadPage.css";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";

const ProductUploadPage = () => {
  // save info of current user
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (cred) => {
      setUser(cred);
    });
  }, []);

  // empty structure for product info
  const emptyInfo = {
    id: "",
    public_ID: "",
    author: "",
    author_id: "",
    title: "",
    price: 0,
    coverImage: "",
    detailedDescription: "",
    shortDescription: "",
    projectFile: "",
    tags: [],
    ordered: 0,
    saved: 0,
    stars: 0,
  };
  // save product info
  const [productInfo, setProductInfo] = useState(emptyInfo);

  // Check if all required fields are filled
  const isFormValid =
    productInfo.title !== "" &&
    productInfo.price >= 0 &&
    productInfo.detailedDescription !== "" &&
    productInfo.shortDescription !== "";

  // handle image upload
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

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProductInfo({ ...productInfo, [name]: files[0] });
    } else {
      setProductInfo({ ...productInfo, [name]: value });
    }
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ensure all required field are filled
    if (!isFormValid) {
      alert("Please fill in the required field!");
      return;
    }

    // todo 
    // migrate this whole component to user profile
    // this check is just temporary--------------------------
    // ensure user has logged in
    if (!user) {
      alert("not logged in yet");
      return;
    }
    // -----------------------------------------------------

    // get current user username
    var snapshot = await getDoc(doc(db, "User", user.uid));
    const username = snapshot.data().username;
    // calculate the public id 
    snapshot = await getDoc(doc(db, "Utils", "PUBLIC_ID"));
    const newID = snapshot.data().id + 1;
    const newHEX = newID.toString(16).padStart(6, '0');

    // Prepare the product data, perhaps already done in your existing code
    const newProductData = {
      public_ID: newHEX,
      author: username,
      author_id: user.uid,
      title: productInfo.title,
      price: productInfo.price,
      coverImage: productInfo.coverImage,
      detailedDescription: productInfo.detailedDescription.replace(/\n/g, '<br/>'),
      shortDescription: productInfo.shortDescription,
      projectFile: productInfo.projectFile,
      tags: productInfo.tags.split(",").map((i) => i.trim()),
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
      newProductData.projectFile &&
      newProductData.projectFile instanceof File
    ) {
      newProductData.projectFile = await uploadImage(
        newProductData.projectFile,
        "product_descriptions"
      );
    }

    try {
      // Add the new project to Firestore
      const newDocId = await addNewProject(newProductData);
      // save new public id to database
      await updateDoc(doc(db, "Utils", "PUBLIC_ID"), {id: newID, HEX: newHEX});

      console.log("Project successfully added with ID:", newDocId);
      alert("Project successfully added!");

      // Update UI or state as needed after successful addition
    } catch (error) {
      console.error("Failed to add new project:", error);
    }

    setProductInfo(emptyInfo);
  };

  // const handleDeleteProduct = (productId) => {
  //   const updatedProducts = products.filter(
  //     (product) => product.id !== productId
  //   );
  //   setProducts(updatedProducts);
  // };

  return (
    <div>
      <Header />
      <form className="product-upload-form" onSubmit={handleSubmit}>
        <p className="input-title">
          Product Title <span className="red-star">*</span>
        </p>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={productInfo.title}
          onChange={handleChange}
        />
        <p className="input-title">
          Price <span className="red-star">*</span>
        </p>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productInfo.price}
          onChange={handleChange}
        />
        <p className="input-title"> Cover Image (.img .png) </p>
        <input
          type="file"
          name="coverImage"
          value={productInfo.coverImages && productInfo.coverImages[0].name}
          onChange={handleChange}
        />
        <p className="input-title">
          Detailed Description <span className="red-star">*</span>
        </p>
        <textarea
          name="detailedDescription"
          placeholder="Detailed Description"
          value={productInfo.detailedDescription}
          onChange={handleChange}></textarea>
        <p className="input-title">
          Short Description <span className="red-star">*</span>
        </p>
        <textarea
          name="shortDescription"
          placeholder="Short Description"
          value={productInfo.shortDescription}
          onChange={handleChange}></textarea>
        <p className="input-title"> Project File (.zip) </p>
        <input
          type="file"
          name="projectFile"
          value={productInfo.projectFile && productInfo.projectFile[0].name}
          onChange={handleChange}
        />
        <p className="input-title"> Hash Tag </p>
        <input
          type="text"
          name="tags"
          placeholder="e.g. tag1, tag2, tag3"
          value={productInfo.tags}
          onChange={handleChange}
        />
        <button type="submit" className="upload">
          Upload Product
        </button>
      </form>
      {/* debug */}
      {/* <DisplayProjects /> */}
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
