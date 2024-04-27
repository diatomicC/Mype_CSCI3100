import DisplayProjects from "../components/DisplayProjects";

import React, { useState } from 'react';
import { db } from '../index'; // Adjust path as necessary
import { collection, addDoc } from 'firebase/firestore';

import { storage } from '../index';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import '../styles/ProductUploadPage.css';
import Header from '../components/Header';

const ProductUploadPage = () => {

  const [productInfo, setProductInfo] = useState({
    id: '',
    title: '',
    price: '',
    coverImage: null,
    detailedDescription: '',
    shortDescription: '',
    descriptionFile: null,
    hashTag: ''
  });

  const [products, setProducts] = useState([]);

  const uploadImage = async (file, folderName = 'uploads') => {
    
    // Assuming 'userId' is available and relevant for your use-case
    const userId = 'unique_user_id'; // Replace with actual user ID logic as needed
    const fileRef = ref(storage, `${folderName}/${userId}_${file.name}`);

    const uploadTask = uploadBytesResumable(fileRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Upload failed', error);
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
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
  
    // Prepare the product data, perhaps already done in your existing code
    const newProductData = {
      title: productInfo.title,
      price: productInfo.price,
      coverImage: productInfo.coverImage,
      detailedDescription: productInfo.detailedDescription,
      shortDescription: productInfo.shortDescription,
      descriptionFile: productInfo.descriptionFile,
      hashTag: productInfo.hashTag
    };

        // Upload the cover image first and update the URL
    if (newProductData.coverImage && newProductData.coverImage instanceof File) {
      newProductData.coverImage = await uploadImage(newProductData.coverImage, 'profile_pictures');
    }

    // Upload the description file and update the URL
    if (newProductData.descriptionFile && newProductData.descriptionFile instanceof File) {
      newProductData.descriptionFile = await uploadImage(newProductData.descriptionFile, 'product_descriptions');
    }

    try {
      // Add the new project to Firestore
      const newDocId = await addNewProject(newProductData);
      console.log('Project successfully added with ID:', newDocId);
  
      // Update UI or state as needed after successful addition
    } catch (error) {
      console.error('Failed to add new project:', error);
    }
    
  
    setProductInfo({
      id: '',
      title: '',
      price: '',
      coverImage: null,
      detailedDescription: '',
      shortDescription: '',
      descriptionFile: null,
      hashTag: ''
    });
  };
  

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Product Title" onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" onChange={handleChange} />
        <input type="file" name="coverImage" onChange={handleChange} />
        <textarea name="detailedDescription" placeholder="Detailed Description" onChange={handleChange}></textarea>
        <textarea name="shortDescription" placeholder="Short Description" onChange={handleChange}></textarea>
        <input type="file" name="descriptionFile" onChange={handleChange} />
        <input type="text" name="hashTag" placeholder="Hash Tag" onChange={handleChange} />
        <button type="submit" className='upload'>Upload Product</button>
      </form>
      <DisplayProjects />
    </div>
  );
};

export async function addNewProject(projectData) {
  try {
    // Reference to the 'projects' collection
    const collectionRef = collection(db, 'projects');
    // Add a new document to the 'projects' collection
    const docRef = await addDoc(collectionRef, projectData);
    console.log("New project added with ID:", docRef.id);
    return docRef.id;  // Returning the new document's ID if needed
  } catch (error) {
    console.error("Error adding new project to Firestore:", error);
    throw new Error(error);  // Optional: re-throw to handle it further up the call chain
  }
}


export default ProductUploadPage;

