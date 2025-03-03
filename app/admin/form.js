"use client";

import { useState } from "react";
import { db } from "../firebaseConfig"; 
import { addDoc, collection } from "firebase/firestore"; // Correct import
import { doc, setDoc } from "firebase/firestore";

const AddSectionsForm = () => {
  const [sections, setSections] = useState([
    {
      sectionName: "section1",
      data: [{ TopHeading: "", TopIntro: "" }]
    }
  ]);

  // Add a new section dynamically
  const addSection = () => {
    setSections([
      ...sections,
      { sectionName: `section${sections.length + 1}`, data: [{ TopHeading: "", TopIntro: "" }] }
    ]);
  };

  // Add a new point inside a section
  const addPoint = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data.push({ title: "", description: "" });
    setSections(updatedSections);
  };

  // Handle input changes
  const handleChange = (sectionIndex, pointIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data[pointIndex][field] = value;
    setSections(updatedSections);
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = doc(db, "blogPosts");
  
      await setDoc(docRef, {
        pointsWiseText: sections.reduce((acc, section) => {
          acc[section.sectionName] = section.data;
          return acc;
        }, {})
      }); // ✅ Use merge to prevent overwriting entire document
  
      alert("Data successfully added to Firebase!");
      setSections([{ sectionName: "section1", data: [{ TopHeading: "", TopIntro: "" }] }]);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding data.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Add Sections Data</h2>
      <form onSubmit={handleSubmit}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{section.sectionName}</h3>
            {/* Top Heading & TopIntro */}
            <input
              type="text"
              placeholder="Section Top Heading"
              value={section.data[0].TopHeading}
              onChange={(e) => handleChange(sectionIndex, 0, "TopHeading", e.target.value)}
              required
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              type="text"
              placeholder="Section Top Intro"
              value={section.data[0].TopIntro}
              onChange={(e) => handleChange(sectionIndex, 0, "TopIntro", e.target.value)}
              required
              style={{ width: "100%", marginBottom: "10px" }}
            />

            {/* Points Inside Each Section */}
            {section.data.slice(1).map((point, pointIndex) => (
              <div key={pointIndex}>
                <input
                  type="text"
                  placeholder="Point Title"
                  value={point.title}
                  onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "title", e.target.value)}
                  required
                  style={{ width: "100%", marginBottom: "5px" }}
                />
                <textarea
                  placeholder="Point Description"
                  value={point.description}
                  onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "description", e.target.value)}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
            ))}

            {/* Button to Add a New Point */}
            <button type="button" onClick={() => addPoint(sectionIndex)}>
              + Add Point
            </button>
          </div>
        ))}

        {/* Button to Add a New Section */}
        <button type="button" onClick={addSection}>
          + Add Section
        </button>

        {/* Submit Button */}
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSectionsForm;
