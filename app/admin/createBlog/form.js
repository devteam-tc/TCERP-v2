// "use client";

// import { useState, useEffect } from "react";
// import { db ,storage } from "../firebaseConfig"; 
// import { doc, setDoc, addDoc, collection, Timestamp } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import IndustryForm from './Categories';

// const AddSectionsForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [slug, setSlug] = useState(""); // ✅ New slug state
 
//   const [content, setContent] = useState([
//     { title: "", description: [""] } // Default structure
//   ]);
//   const [sections, setSections] = useState([
//     {
//       sectionName: "section1",
//       data: [{ TopHeading: "", TopIntro: "" }]
//     }
//   ]);

//   const [faqs, setFaqs] = useState([
//     { question: "", answer: "" }
//   ]);
//   const [tags, setTags] = useState([]); // ✅ Tags state
//   const [anchorWords, setAnchorWords] = useState([{ word: "", href: "" }]);
//   const [tagInput, setTagInput] = useState("");
//   const [metaKeywordInput, setMetaKeywordInput] = useState("");
//   const [metaKeywords, setMetaKeywords] = useState([]);
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [customOption, setCustomOption] = useState("");
 
       
//   const handleImageUpload = async () => {
//     if (!image) {
//       alert("Please select an image first!");
//       return;
//     }

//     if (!slug || typeof slug !== "string") {
//       console.error("Invalid slug:", slug);
//       alert("Error: Invalid blog post slug!");
//       return;
//     }

//     setUploading(true);

//     try {
//       // Store the image in Firebase Storage inside 'blogs_images/'
//       const imageRef = ref(storage, `blogs_images/${Date.now()}_${image.name}`);

//       // Upload image to Firebase Storage
//       const snapshot = await uploadBytes(imageRef, image);
//       const url = await getDownloadURL(snapshot.ref);

//       // Reference to the Firestore document (blog post)
//       const docRef = doc(db, "blogPosts", slug);

//       // Update Firestore document with the image URL
//       await setDoc(docRef, { imageUrl: url }, { merge: true });

//       alert("Image uploaded and URL stored successfully!");
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Upload failed. See console for details.");
//     }

//     setUploading(false);
//   };

//   // State for CTA Section
//   const [ctaSection, setCtaSection] = useState({
//     ctaTitle: "",
//     description: "",
//   });
//   // Add a new section dynamically
//   const addSection = () => {
//     setSections([
//       ...sections,
//       { sectionName: `section${sections.length + 1}`, data: [{ TopHeading: "", TopIntro: "" }] }
//     ]);
//   };
//   const generateSlug = (text) => {
//     return text
//       .toLowerCase()
//       .replace(/\s+/g, "-") // Replace spaces with hyphens
//       .replace(/[^a-z0-9-]/g, ""); // Remove special characters
//   };
 
//   useEffect(() => {
//     if (title) {
//       setSlug(
//         title
//           .toLowerCase()
//           .replace(/\s+/g, "-") // Replace spaces with hyphens
//           .replace(/[^a-z0-9-]/g, "") // Remove special characters
//       );
//     } else {
//       setSlug("");
//     }
//   }, [title]);

//   // ✅ Add tags dynamically
//   const addTag = (e) => {
//     if (e.key === "Enter" && tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
//       e.preventDefault();
//       setTags([...tags, tagInput.trim()]);
//       setTagInput(""); 
//     }
//   };
//   const addAnchorWord = () => {
//     setAnchorWords([...anchorWords, { word: "", href: "" }]);
//   };
  
//   // Function to remove an anchor word entry
//   const removeAnchorWord = (index) => {
//     setAnchorWords(anchorWords.filter((_, i) => i !== index));
//   };
 
//   // Function to update anchor word and href
//   const handleAnchorWordChange = (index, field, value) => {
//     const updatedAnchorWords = [...anchorWords];
//     updatedAnchorWords[index][field] = value;
//     setAnchorWords(updatedAnchorWords);
//   };
  
//   // ✅ Remove a tag
//   const removeTag = (index) => {
//     setTags(tags.filter((_, i) => i !== index));
//   };

//   const addMetaKeyword = (e) => {
//     if (e.key === "Enter" && metaKeywordInput.trim() !== "") {
//       setMetaKeywords([...metaKeywords, metaKeywordInput.trim()]);
//       setMetaKeywordInput("");
//     }
//   };
  
//   const addMetaKeywordItem = () => {
//     if (metaKeywordInput.trim() !== "") {
//       setMetaKeywords([...metaKeywords, metaKeywordInput.trim()]);
//       setMetaKeywordInput("");
//     }
//   };
  
//   const removeMetaKeyword = (index) => {
//     setMetaKeywords(metaKeywords.filter((_, i) => i !== index));
//   };
//   // Add a new point inside a section
//   const addPoint = (sectionIndex) => {
//     const updatedSections = [...sections];
//     updatedSections[sectionIndex].data.push({ title: "", description: "" });
//     setSections(updatedSections);
//   };

//   // Add a new FAQ dynamically
//   const addFaq = () => {
//     setFaqs([...faqs, { question: "", answer: "" }]);
//   };

//   const addTagItem = () => {
//     if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
//       setTags([...tags, tagInput.trim()]);
//       setTagInput(""); // Clear input
//     }
//   };
                                                                                           
  
//   // Handle input changes for sections
//   const handleChange = (sectionIndex, pointIndex, field, value) => {
//     const updatedSections = [...sections];
//     updatedSections[sectionIndex].data[pointIndex][field] = value;
//     setSections(updatedSections);
//   };

//   // Handle input changes for FAQs
//   const handleFaqChange = (faqIndex, field, value) => {
//     const updatedFaqs = [...faqs];
//     updatedFaqs[faqIndex][field] = value;
//     setFaqs(updatedFaqs);
//   };
//  // Handle input changes for CTA Section
//  const handleCtaChange = (field, value) => {
//   setCtaSection({ ...ctaSection, [field]: value });
// };


// // Handle title change
// const handleContentChange = (index, field, value) => {
//   const updatedContent = [...content];
//   updatedContent[index][field] = value;
//   setContent(updatedContent);
// };

// // Handle description change for a specific point
// const handleDescriptionChange = (contentIndex, descIndex, value) => {
//   const updatedContent = [...content];
//   updatedContent[contentIndex].description[descIndex] = value;
//   setContent(updatedContent);
// };

// // Add a new description point inside a content section
// const addDescriptionPoint = (contentIndex) => {
//   const updatedContent = [...content];
//   updatedContent[contentIndex].description.push("");
//   setContent(updatedContent);
// };

// // Remove a description point
// const removeDescriptionPoint = (contentIndex, descIndex) => {
//   const updatedContent = [...content];
//   updatedContent[contentIndex].description.splice(descIndex, 1);
//   setContent(updatedContent);
// };

// // Add a new content section
// const addContentItem = () => {
//   setContent([...content, { title: "", description: [""] }]);
// };


// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//     // Generate slug dynamically
//     const generatedSlug = generateSlug(title);
  
//     if (!generatedSlug) {
//       alert("Slug generation failed. Check the title input.");
//       return;
//     }
  

//   try {
//     const docRef = doc(db, "blogPosts", generatedSlug);
//     if (!title.trim()) {
//       alert("Title is required.");
//       return;
//     }
  
//     const createdAt = Timestamp.fromDate(new Date()); 
   
//     const currentDate = new Date().toISOString().split("T")[0]; 
//     await setDoc(docRef, {
//       title,
//       description,
//       metaKeywords: metaKeywords, 
//       slug: generatedSlug, 
//       createdAt,
//       date: currentDate, 
//       pointsWiseText: sections.reduce((acc, section) => {
//         acc[section.sectionName] = section.data;
//         return acc;
//       }, {}),
//       faqSection: { 
//         faqTitle: "FAQ'S",
//         faqs: faqs.filter(faq => faq.question.trim() && faq.answer.trim()) 
//       },
//       contentSection: content.filter(
//         item => item.title.trim() && item.description.some(desc => desc.trim())
//       ),
      
//       ctaSection ,
//       tagsSection: tags, 
//       anchorWordsSection: anchorWords,
//     }, );
    
//     alert("Data successfully added to Firebase!");
//     setTitle("");
//     setDescription("");
//     setSlug("");
//     setSections([{ sectionName: "section1", data: [{ TopHeading: "", TopIntro: "" }] }]);
//     setFaqs([{ question: "", answer: "" }]); 
//     setContent([{ title: "", description: "" }]); 
//     setCtaSection({
//       ctaTitle: "",
//       description: "",
//     });
//     setTags([]); 
//     setMetaKeywords([]);
//     setAnchorWords([]); 
    
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     alert("Error adding data.");
//   }
// };


//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>Add Sections Data</h2>
//       <form onSubmit={handleSubmit}>

//    {/* ✅ Title Field */}
//    <input
//           type="text"
//           placeholder="Enter Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px" }}
//         />

//         {/* ✅ Description Field */}
//         <textarea
//           placeholder="Enter Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <div>
//           <label>Slug (Auto-generated):</label>
//           <input type="text" value={slug} readOnly />

//           </div>

//         {sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//             <h3>{section.sectionName}</h3>
//             <input
//               type="text"
//               placeholder="Section Top Heading"
//               value={section.data[0].TopHeading}
//               onChange={(e) => handleChange(sectionIndex, 0, "TopHeading", e.target.value)}
//               required
//               style={{ width: "100%", marginBottom: "5px" }}
//             />
//             <input
//               type="text"
//               placeholder="Section Top Intro"
//               value={section.data[0].TopIntro}
//               onChange={(e) => handleChange(sectionIndex, 0, "TopIntro", e.target.value)}
//               required
//               style={{ width: "100%", marginBottom: "10px" }}
//             />
                 

//             {section.data.slice(1).map((point, pointIndex) => (
//               <div key={pointIndex}>
//                 <input
//                   type="text"
//                   placeholder="Point Title"
//                   value={point.title}
//                   onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "title", e.target.value)}
//                   required
//                   style={{ width: "100%", marginBottom: "5px" }}
//                 />
//                 <textarea
//                   placeholder="Point Description"
//                   value={point.description}
//                   onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "description", e.target.value)}
//                   required
//                   style={{ width: "100%", marginBottom: "10px" }}
//                 />
//               </div>
//             ))}

//             <button type="button" onClick={() => addPoint(sectionIndex)}>
//               + Add Point
//             </button>
//           </div>
//         ))}

//         <button type="button" onClick={addSection} style={{ marginBottom: "10px" }}>
//           + Add Section
//         </button>
           


//             <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//               <h3>Content Section</h3>
//               {content.map((item, contentIndex) => (
//                 <div key={contentIndex}>
//                   <input
//                     type="text"
//                     placeholder="Content Title"
//                     value={item.title}
//                     onChange={(e) => handleContentChange(contentIndex, "title", e.target.value)}
//                     required
//                     style={{ width: "100%", marginBottom: "5px" }}
//                   />

//                   {/* Loop through descriptions array */}
//                   {item.description.map((desc, descIndex) => (
//                     <div key={descIndex} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                       <textarea
//                         placeholder={`Description Point ${descIndex + 1}`}
//                         value={desc}
//                         onChange={(e) =>
//                           handleDescriptionChange(contentIndex, descIndex, e.target.value)
//                         }
//                         required
//                         style={{ width: "90%", marginBottom: "5px" }}
//                       />
//                       <button type="button" onClick={() => removeDescriptionPoint(contentIndex, descIndex)}>
//                         ❌
//                       </button>
//                     </div>
//                   ))}

//                   <button type="button" onClick={() => addDescriptionPoint(contentIndex)}>+ Add Description Point</button>
//                 </div>
//               ))}

//               <button type="button" onClick={addContentItem}>+ Add Content</button>
//             </div>
//           {/* Tags Section UI */}
//                   <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//                 <h3>Tags</h3>
                
//                 <input
//                   type="text"
//                   placeholder="tags"
//                   value={tagInput}
//                   onChange={(e) => setTagInput(e.target.value)}
//                   onKeyDown={addTag} // Enter Key to Add
//                   style={{ width: "100%", marginBottom: "10px" }}
//                 />
                
//                 {/* Add Button */}
//                 <button type="button" onClick={addTagItem}>+ Add tag</button>
                
//                 {/* Tags List */}
//                 <div style={{ marginTop: "10px" }}>
//                   {tags.map((tag, index) => (
//                     <span key={index} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
//                       {tag} 
//                       <button onClick={() => removeTag(index)}>x</button>
//                     </span>
//                   ))}
//                 </div>
//               </div>


//         <IndustryForm />



//         {/* Anchor Words Section */}
//                     <div>
//               <h3>Anchor Words</h3>
//               {anchorWords.map((item, index) => (
//                 <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
//                   {/* Input for Anchor Word */}
//                   <input
//                     type="text"
//                     placeholder="Anchor Word"
//                     value={item.word}
//                     onChange={(e) => handleAnchorWordChange(index, "word", e.target.value)}
//                   />

//                   {/* Input for Href (URL) */}
//                   <input
//                     type="text"
//                     placeholder="Href (URL)"
//                     value={item.href}
//                     onChange={(e) => handleAnchorWordChange(index, "href", e.target.value)}
//                   />

//                   {/* Remove Button */}
//                   <button onClick={() => removeAnchorWord(index)}>Remove</button>
//                 </div>
//               ))}

//               {/* Button to Add New Anchor Word */}
//               <button onClick={addAnchorWord}>Add Anchor Word</button>
//             </div>

//                   <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//                     <h3>Meta Keywords</h3>

//                     <input
//                       type="text"
//                       placeholder="meta keywords"
//                       value={metaKeywordInput}
//                       onChange={(e) => setMetaKeywordInput(e.target.value)}
//                       onKeyDown={addMetaKeyword} // Enter Key to Add
//                       style={{ width: "100%", marginBottom: "10px" }}
//                     />

//                     {/* Add Button */}
//                     <button type="button" onClick={addMetaKeywordItem}>+ Add Meta Keyword</button>

//                     {/* Meta Keywords List */}
//                     <div style={{ marginTop: "10px" }}>
//                       {metaKeywords.map((keyword, index) => (
//                         <span key={index} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
//                           {keyword} 
//                           <button onClick={() => removeMetaKeyword(index)}>x</button>
//                         </span>
//                       ))}
//                     </div>
//                   </div>


//                 {/* FAQ Section */}
//                 <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//                   <h3>FAQ Section</h3>
//                   {faqs.map((faq, faqIndex) => (
//                     <div key={faqIndex}>
//                       <input
//                         type="text"
//                         placeholder="FAQ Question"
//                         value={faq.question}
//                         onChange={(e) => handleFaqChange(faqIndex, "question", e.target.value)}
//                         required
//                         style={{ width: "100%", marginBottom: "5px" }}
//                       />
//                       <textarea
//                         placeholder="FAQ Answer"
//                         value={faq.answer}
//                         onChange={(e) => handleFaqChange(faqIndex, "answer", e.target.value)}
//                         required
//                         style={{ width: "100%", marginBottom: "10px" }}
//                       />
//                     </div>
//                   ))}
//                   <button type="button" onClick={addFaq}>
//                     + Add FAQ
//                   </button>
//                 </div>
//                 <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//                   <h3>CTA Section</h3>
//                   <input
//                     type="text"
//                     placeholder="CTA Title"
//                     value={ctaSection.ctaTitle}
//                     onChange={(e) => handleCtaChange("ctaTitle", e.target.value)}
//                     required
//                     style={{ width: "100%", marginBottom: "5px" }}
//                   />
//                   <textarea
//                     placeholder="Description"
//                     value={ctaSection.description}
//                     onChange={(e) => handleCtaChange("description", e.target.value)}
//                     required
//                     style={{ width: "100%", marginBottom: "5px" }}
//                   />
                
//                 </div>
//                 <div>
//       <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       <button onClick={handleImageUpload} disabled={uploading}>
//         {uploading ? "Uploading..." : "Upload"}
//       </button>
//     </div>
//         <button type="submit" style={{ marginTop: "10px" }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddSectionsForm;


// import { useState } from "react";
// //import TitleExcerptForm from "./TitleExcerptForm";
// import TitleAndDescription from "./TitleAndDescription";
// // import MetaKeywordsForm from "./MetaKeywordsForm";
// // import MetaForm from "./MetaForm";
// import ContentForm from "./ContentForm";
// import TagsForm from "./TagsForm";
// import AnchorWordsForm from "./AnchorWordsForm";
// import FAQsForm from "./FAQsForm";
// import CTASection from "./CTASection";
// import MetaKeywordsForm from "./MetaKeywordsForm";
// import ImageUpload from "./ImageUpload";
// import { db } from "../../firebaseConfig"; // Firebase Firestore instance
// import { doc, setDoc } from "firebase/firestore";

// const Form = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [meta, setMeta] = useState({ title: "", description: "" });
//   const [content, setContent] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [anchorWords, setAnchorWords] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [ctaSection, setCtaSection] = useState({ ctaTitle: "", description: "" });
//   const [metaKeywords, setMetaKeywords] = useState([]);
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const blogData = {
//       title,
//       description,
//       meta,
//       content,
//       tags,
//       anchorWords,
//       faqs,
//       ctaSection,
//       metaKeywords,
//       image,
//       date: new Date(),
//     };

//     try {
//       await setDoc(doc(db, "blogs", title.toLowerCase().replace(/\s+/g, "-")), blogData);
//       alert("Blog saved successfully!");
//     } catch (error) {
//       console.error("Error saving blog:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TitleAndDescription title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
//       {/* <MetaForm meta={meta} setMeta={setMeta} /> */}
//       <ContentForm content={content} setContent={setContent} />
//       <TagsForm tags={tags} setTags={setTags} />
//       <AnchorWordsForm anchorWords={anchorWords} setAnchorWords={setAnchorWords} />
//       <FAQsForm faqs={faqs} setFaqs={setFaqs} />
//       <CTASection ctaSection={ctaSection} setCtaSection={setCtaSection} />
//       <MetaKeywordsForm metaKeywords={metaKeywords} setMetaKeywords={setMetaKeywords} />
//       <ImageUpload image={image} setImage={setImage} />
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;



"use client";

import { useState, useEffect } from "react";
import { db, storage } from "../../firebaseConfig";
import { doc, setDoc, addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AnchorWordsForm from "./AnchorWordsForm";
import TagsForm from './TagsForm';
import FAQsForm from './FAQsForm';
import MetaKeywordsForm from './MetaKeywordsForm';
import CTASection from './CTASection';
import ContentForm from './ContentForm';
import TitleAndDescription from './TitleAndDescription';
import Categories from '../Categories';
import styles from '../Form.module.css';

const AddSectionsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState(""); // ✅ New slug state

  const [content, setContent] = useState([
    { title: "", description: [""] } // Default structure
  ]);
  const [sections, setSections] = useState([
    {
      sectionName: "section1",
      data: [{ TopHeading: "", TopIntro: "" }]
    }
  ]);

  const [faqs, setFaqs] = useState([
    { question: "", answer: "" }
  ]);
  const [tags, setTags] = useState([]); // ✅ Tags state
  const [anchorWords, setAnchorWords] = useState([{ word: "", href: "" }]);
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [image, setImage] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(""); // Store selected industry
  const [uploading, setUploading] = useState(false); // ✅ Define uploading state
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // State for Conclusion
  const [ctaSection, setCtaSection] = useState({
    ctaTitle: "",
    description: "",
  });
  // Add a new section dynamically
  const addSection = () => {
    setSections([
      ...sections,
      { sectionName: `section${sections.length + 1}`, data: [{ TopHeading: "", TopIntro: "" }] }
    ]);
  };
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove special characters
  };
  const removePoint = (sectionIndex, pointIndex) => {
    const updatedSections = [...sections];

    if (updatedSections[sectionIndex].data.length > 1) {
      updatedSections[sectionIndex].data.splice(pointIndex, 1);
      setSections(updatedSections);
    }
  };
  const removeSection = (sectionIndex) => {
    if (sectionIndex === 0) {
      alert("You cannot delete the first section.");
      return;
    }

    setSections(prevSections => prevSections.filter((_, index) => index !== sectionIndex));
  };


  // Add a new point inside a section
  const addPoint = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data.push({ title: "", description: "" });
    setSections(updatedSections);
  };

  // Handle input changes for sections
  const handleChange = (sectionIndex, pointIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data[pointIndex][field] = value;
    setSections(updatedSections);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const generatedSlug = generateSlug(title);

    if (!generatedSlug) {
      alert("Slug generation failed. Check the title input.");
      return;
    }

    let imageUrl = ""; // Initialize image URL

    if (image) {
      try {
        setUploading(true);

        const imageRef = ref(storage, `blogs_images/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);

        imageUrl = await getDownloadURL(imageRef); // ✅ Ensure URL is fetched correctly
        console.log("Image successfully uploaded. URL:", imageUrl);

      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Image upload failed. Please try again.");
        setUploading(false);
        return;
      } finally {
        setUploading(false);
      }
    }

    if (image && !imageUrl) {
      console.error("Image URL is null. Upload failed!");
      alert("Image upload failed. Please try again.");
      return;
    }

    try {
      setUploading(true);

      const docRef = doc(db, "blogs", generatedSlug);

      if (!title.trim()) {
        alert("Title is required.");
        setUploading(false);
        return;
      }

      const createdAt = Timestamp.fromDate(new Date());
      const currentDate = new Date().toISOString().split("T")[0];

      // ✅ Ensure imageUrl is set before calling setDoc
      await setDoc(docRef, {
        title,
        description,
        metaKeywords,
        slug: generatedSlug,
        imageUrl: imageUrl || "", // ✅ Corrected this line
        createdAt,
        date: currentDate,
        category: selectedIndustry,
        pointsWiseText: sections.reduce((acc, section) => {
          acc[section.sectionName] = section.data;
          return acc;
        }, {}),
        faqSection: {
          faqTitle: "FAQ'S",
          faqs: faqs.filter(faq => faq.question.trim() && faq.answer.trim())
        },
        contentSection: content.filter(
          item => item.title.trim() && item.description.some(desc => desc.trim())
        ),
        ctaSection,
        tagsSection: tags,
        anchorWordsSection: anchorWords,
      });

      alert("Data successfully added to Firebase!");

      // ✅ Reset form fields
      setTitle("");
      setDescription("");
      setSlug("");
      setSections([{ sectionName: "section1", data: [{ TopHeading: "", TopIntro: "" }] }]);
      setFaqs([{ question: "", answer: "" }]);
      setContent([{ title: "", description: "" }]);
      setCtaSection({ ctaTitle: "", description: "" });
      setTags([]);
      setMetaKeywords([]);
      setAnchorWords([]);
      setImage(null);
      setImageUrl(""); // ✅ Clear image URL after submission

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding data.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Add Sections Data</h2>
          <form onSubmit={handleSubmit}>
            <TitleAndDescription title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
            <ContentForm content={content} setContent={setContent} />
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.section}>
                <h3>{section.sectionName}</h3>
                <input className={styles.input}
                  type="text"
                  placeholder="Section Top Heading"
                  value={section.data[0].TopHeading}
                  onChange={(e) => handleChange(sectionIndex, 0, "TopHeading", e.target.value)}
                  required
                  style={{ width: "100%", marginBottom: "5px" }}
                />
                <input className={styles.input}
                  type="text"
                  placeholder="Section Top Intro"
                  value={section.data[0].TopIntro}
                  onChange={(e) => handleChange(sectionIndex, 0, "TopIntro", e.target.value)}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                {section.data.slice(1).map((point, pointIndex) => (
                  <div key={pointIndex}>
                    <input className={styles.input}
                      type="text"
                      placeholder="Point Title"
                      value={point.title}
                      onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "title", e.target.value)}
                      required
                      style={{ width: "100%", marginBottom: "5px" }}
                    />
                    <input className={styles.input}
                      placeholder="Point Description"
                      value={point.description}
                      onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "description", e.target.value)}
                      required
                      style={{ width: "100%", marginBottom: "10px" }}
                    />
                    <button className={styles.crossbutton} type="button" onClick={() => removePoint(sectionIndex)}>
                      ❌
                    </button>
                  </div>
                ))}
                <button className={styles.addButton} type="button" onClick={() => addPoint(sectionIndex)}>
                  + Add Point
                </button>
                <button className={styles.addButton} type="button" onClick={addSection} style={{ marginTop: '10px' }}>
                  + Add Section
                </button>
                <button className={styles.crossbutton} type="button" onClick={() => removeSection(sectionIndex)}>
                  ❌
                </button>
              </div>
            ))}
            <FAQsForm faqs={faqs} setFaqs={setFaqs} />
            <CTASection ctaSection={ctaSection} setCtaSection={setCtaSection} />
            <div className={styles.section}>
              <div>
                <input type="file" onChange={handleFileChange} />
                {imageUrl && (
                  <div>
                    <p>Uploaded Image:</p>
                    <img src={imageUrl} alt="Uploaded" width="200px" />
                  </div>
                )}
              </div>
            </div>
            <button className={styles.submitbutton} type="submit" style={{ marginTop: "10px" }}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <Categories setSelectedIndustry={setSelectedIndustry} />
          <TagsForm tags={tags} setTags={setTags} />
          <MetaKeywordsForm metaKeywords={metaKeywords} setMetaKeywords={setMetaKeywords} />
          <AnchorWordsForm anchorWords={anchorWords} setAnchorWords={setAnchorWords} />
        </div>
      </div>

    </div>
  );
};

export default AddSectionsForm;