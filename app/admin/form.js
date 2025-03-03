"use client";

import { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Ensure correct import
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

const EditSectionsForm = ({ postId }) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data from Firestore
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!postId) return;
//       setLoading(true);

//       try {
//         const docRef = doc(db, "blogPosts", postId);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           if (data.pointsWiseText) {
//             const formattedSections = Object.keys(data.pointsWiseText).map((sectionName) => ({
//               sectionName,
//               data: data.pointsWiseText[sectionName],
//             }));
//             setSections(formattedSections);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       }

//       setLoading(false);
//     };

//     fetchData();
//   }, [postId]);
// Fetch Data from Firestore
useEffect(() => {
    const fetchData = async () => {
      if (!postId) return;
      setLoading(true);
  
      try {
        const docRef = doc(db, "blogPosts", postId);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.pointsWiseText) {
            const formattedSections = Object.keys(data.pointsWiseText).map((sectionName) => ({
              sectionName,
              data: Array.isArray(data.pointsWiseText[sectionName]) ? data.pointsWiseText[sectionName] : [],
            }));
            setSections(formattedSections);
          }
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
  
      setLoading(false);
    };
  
    fetchData();
  }, [postId]);
  

  // Add a new section dynamically
  const addSection = () => {
    setSections([
      ...sections,
      { sectionName: `section${sections.length + 1}`, data: [{ TopHeading: "", TopIntro: "" }] },
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

  // Update Data in Firebase
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!postId) {
      alert("No document selected for update.");
      return;
    }

    try {
      const docRef = doc(db, "blogPosts", postId);
      await updateDoc(docRef, {
        pointsWiseText: sections.reduce((acc, section) => {
          acc[section.sectionName] = section.data;
          return acc;
        }, {}),
      });

      alert("Data successfully updated in Firebase!");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Error updating data.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Edit Sections Data</h2>
      <form onSubmit={handleUpdate}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{section.sectionName}</h3>
            {/* TopHeading & TopIntro */}
            <input
              type="text"
              placeholder="Section Top Heading"
              value={section.data[0]?.TopHeading || ""}
              onChange={(e) => handleChange(sectionIndex, 0, "TopHeading", e.target.value)}
              required
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              type="text"
              placeholder="Section Top Intro"
              value={section.data[0]?.TopIntro || ""}
              onChange={(e) => handleChange(sectionIndex, 0, "TopIntro", e.target.value)}
              required
              style={{ width: "100%", marginBottom: "10px" }}
            />

            {/* Points Inside Each Section */}
            {/* {section.data.slice(1).map((point, pointIndex) => (
              <div key={pointIndex}>
                <input
                  type="text"
                  placeholder="Point Title"
                  value={point.title || ""}
                  onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "title", e.target.value)}
                  required
                  style={{ width: "100%", marginBottom: "5px" }}
                />
                <textarea
                  placeholder="Point Description"
                  value={point.description || ""}
                  onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "description", e.target.value)}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
            ))} */}

{Array.isArray(section.data) && section.data.slice(1).map((point, pointIndex) => (
  <div key={pointIndex}>
    <input
      type="text"
      placeholder="Point Title"
      value={point.title || ""}
      onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "title", e.target.value)}
      required
      style={{ width: "100%", marginBottom: "5px" }}
    />
    <textarea
      placeholder="Point Description"
      value={point.description || ""}
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

        {/* Update Button */}
        <button type="submit" style={{ marginTop: "10px" }}>
          Update Data
        </button>
      </form>
    </div>
  );
};

export default EditSectionsForm;
