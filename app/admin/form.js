"use client";

import { useState, useEffect } from "react";
import { db ,storage } from "../firebaseConfig"; 
import { doc, setDoc, addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Select from "react-select";
import AnchorWordsForm from "./AnchorWordsForm";
import TagsForm from './TagsForm';
import FAQsForm from './FAQsForm';
import MetaKeywordsForm from './MetaKeywordsForm';
import CTASection from './CTASection';
import ContentForm from './ContentForm';
import TitleAndDescription from './TitleAndDescription';
import Categories from './Categories';
import ImageUpload from './ImageUpload';
import styles from './Form.module.css';

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
    if (sectionIndex !== 1) {  
      alert("You can only delete Section 2.");
      return;
    }
  
    if (sections.length > 1) { // Ensure at least one section remains
      const updatedSections = sections.filter((_, index) => index !== sectionIndex);
      setSections(updatedSections);
    } else {
      alert("At least one section is required.");
    }
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
  
    // Generate slug dynamically
    const generatedSlug = generateSlug(title);
  
    if (!generatedSlug) {
      alert("Slug generation failed. Check the title input.");
      return;
    }
    let imageUrl = ""; // ✅ Ensure imageUrl is always defined

    if (image) {
      try {
          setUploading(true);

          const imageRef = ref(storage, `blogs_images/${Date.now()}_${image.name}`);
          await uploadBytes(imageRef, image); // ✅ Upload image

          // ✅ Retrieve image URL
          imageUrl = await getDownloadURL(imageRef);
          console.log("Image URL:", imageUrl);

      } catch (error) {
          console.error("Error uploading image:", error);
          alert("Error uploading image. Please try again.");
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

    const docRef = doc(db, "blogPosts", generatedSlug);
    if (!title.trim()) {
      alert("Title is required.");
      return;
    }
  
    const createdAt = Timestamp.fromDate(new Date()); 
   
    const currentDate = new Date().toISOString().split("T")[0]; 
    await setDoc(docRef, {
      title,
      description,
      metaKeywords: metaKeywords, 
      slug: generatedSlug, 
      imageUrl: imageUrl,
      createdAt,
      date: currentDate, 
      industry: selectedIndustry, // ✅ Store industry
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
      
      ctaSection ,
      tagsSection: tags, 
      anchorWordsSection: anchorWords,
    }, );
    
    alert("Data successfully added to Firebase!");
    setTitle("");
    setDescription("");
    setSlug("");
    setSections([{ sectionName: "section1", data: [{ TopHeading: "", TopIntro: "" }] }]);
    setFaqs([{ question: "", answer: "" }]); 
    setContent([{ title: "", description: "" }]); 
    setCtaSection({
      ctaTitle: "",
      description: "",
    });
    setTags([]); 
    setMetaKeywords([]);
    setAnchorWords([]); 
    setImage(null);

    
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
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.section}>
            <h3>{section.sectionName}</h3>
            <input  className={styles.input}
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

            <button className={styles.addButton}  type="button" onClick={() => addPoint(sectionIndex)}>
              + Add Point
            </button>
            <button className={styles.addButton}  type="button" onClick={addSection} style={{ marginTop: '10px' }}>
          + Add Section
        </button>
        <button className={styles.crossbutton} type="button" onClick={() => removeSection(sectionIndex)}>
                  ❌
                </button>
          </div>
          
        ))}

      
        <ContentForm content={content} setContent={setContent} />

                <FAQsForm faqs={faqs} setFaqs={setFaqs} />
                  <CTASection ctaSection={ctaSection} setCtaSection={setCtaSection} />
                <div>
         <ImageUpload />
           </div>
        <button  className={styles.addButton} type="submit" style={{ marginTop: "10px" }}>
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