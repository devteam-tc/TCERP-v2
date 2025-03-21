// import { useState } from "react";
// import styles from './Form.module.css';


// const TagsForm = ({ tags, setTags }) => {
//       const [tagInput, setTagInput] = useState("");
    
//    // ✅ Add tags dynamically
//    const addTag = (e) => {
//     if (e.key === "Enter" && tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
//       e.preventDefault();
//       setTags([...tags, tagInput.trim()]);
//       setTagInput(""); 
//     }
//   };
//   const addTagItem = () => {
//     if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
//       setTags([...tags, tagInput.trim()]);
//       setTagInput(""); // Clear input
//     }
//   };
     
//   // ✅ Remove a tag
//   const removeTag = (index) => {
//     setTags(tags.filter((_, i) => i !== index));
//   };
//     return (
//         <div className={styles.section}>
//         <h3>Tags</h3>
        
//         <input className={styles.input}
//           type="text"
//           placeholder="tags"
//           value={tagInput}
//           onChange={(e) => setTagInput(e.target.value)}
//           onKeyDown={addTag} // Enter Key to Add
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
        
//         {/* Add Button */}
//         <button type="button" className={styles.addButton}  onClick={addTagItem}>+ Add tag</button>
        
//         {/* Tags List */}
//         <div style={{ marginTop: "10px" }}>
//           {tags.map((tag, index) => (
//             <span key={index} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
//               {tag} 
//               <button className={styles.crossbutton} onClick={() => removeTag(index)}>x</button>
//             </span>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default TagsForm;
  

import { useState } from "react";
import styles from './Form.module.css';

const TagsForm = ({ tags = [], setTags }) => {
  const [tagInput, setTagInput] = useState("");

  console.log("Rendered with tags:", tags); // Log current tags state

  // ✅ Add tags dynamically
  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      e.preventDefault();
      setTags((prevTags) => {
        const updatedTags = [...prevTags, tagInput.trim()];
        console.log("Updated tags after adding:", updatedTags);
        return updatedTags;
      });
      setTagInput(""); 
    }
  };

  // ✅ Add a tag using the button
  const addTagItem = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags((prevTags) => {
        const updatedTags = [...prevTags, tagInput.trim()];
        console.log("Updated tags after clicking + Add tag:", updatedTags);
        return updatedTags;
      });
      setTagInput(""); // Clear input
    }
  };

  // ✅ Remove a tag
  const removeTag = (index) => {
    setTags((prevTags) => {
      const updatedTags = prevTags.filter((_, i) => i !== index);
      console.log("Updated tags after removing:", updatedTags);
      return updatedTags;
    });
  };

  return (
    <div className={styles.section}>
      <h3>Tags</h3>

      <input className={styles.input}
        type="text"
        placeholder="tags"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={addTag} // Enter Key to Add
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Add Button */}
      <button type="button" className={styles.addButton} onClick={addTagItem}>+ Add tag</button>

      {/* Tags List */}
      <div style={{ marginTop: "10px" }}>
        {Array.isArray(tags) && tags.length > 0 ? (
          tags.map((tag, index) => (
            <span key={index} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
              {tag} 
              <button className={styles.crossbutton} onClick={() => removeTag(index)}>x</button>
            </span>
          ))
        ) : (
          <p>No tags added.</p> // Fallback in case tags array is empty
        )}
      </div>
    </div>
  );
};

export default TagsForm;
