import React, { useState, useEffect } from 'react';
import { db } from '../index'; // Ensure this is the correct path
import { collection, getDocs } from 'firebase/firestore';
import "../styles/projects-display.css"; // Ensure CSS file is correctly referenced

const DisplayProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects from Firestore:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <h1>Projects List</h1>
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          {project.coverImage ?
            <img src={project.coverImage} alt={project.title} style={{ maxWidth: '200px', maxHeight: '200px' }} />
            : <p>Image not uploaded</p>
          }
          <p>Price: {project.price}</p>
          <p>Description: {project.detailedDescription}</p>
          <p>Short Description: {project.shortDescription}</p>
          {project.descriptionFile ?
            <img src={project.descriptionFile} alt="Description File" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            : <p>Description file not uploaded</p>
          }
          <p>Tags: {project.hashTag}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayProjects;
