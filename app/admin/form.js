"use client";

import { useState } from "react";
import { db } from "../firebaseConfig"; 
import { doc, setDoc  } from "firebase/firestore";

const AddSectionsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([
    {
      sectionName: "section1",
      data: [{ TopHeading: "", TopIntro: "" }]
    }
  ]);

  const [faqs, setFaqs] = useState([
    { question: "", answer: "" }
  ]);
  const [content, setContent] = useState([{ title: "", description: "" }]); // ✅ Content section state
  const [tags, setTags] = useState([]); // ✅ Tags state
const [anchorWords, setAnchorWords] = useState([]); // ✅ Should be an array
  const [tagInput, setTagInput] = useState("");
  // State for CTA Section
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
 // Function to add tags dynamically
  // ✅ Add tags dynamically
  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput(""); 
    }
  };

  // ✅ Remove a tag
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // Add anchor words dynamically
 
  const addAnchorWord = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      setAnchorWords([...anchorWords, e.target.value.trim()]); // Push to array
      e.target.value = "";
    }
  };
  
  const removeAnchorWord = (index) => {
    setAnchorWords(anchorWords.filter((_, i) => i !== index)); // Remove by index
  };

  // Add a new point inside a section
  const addPoint = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data.push({ title: "", description: "" });
    setSections(updatedSections);
  };

  // Add a new FAQ dynamically
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const addContentItem = () => {
    setContent([...content, { title: "", description: "" }]); // ✅ Add new content item
  };
  const addTagItem = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput(""); // Clear input
    }
  };
  
  
  // Handle input changes for sections
  const handleChange = (sectionIndex, pointIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data[pointIndex][field] = value;
    setSections(updatedSections);
  };

  // Handle input changes for FAQs
  const handleFaqChange = (faqIndex, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[faqIndex][field] = value;
    setFaqs(updatedFaqs);
  };
 // Handle input changes for CTA Section
 const handleCtaChange = (field, value) => {
  setCtaSection({ ...ctaSection, [field]: value });
};
// content section
const handleContentChange = (contentIndex, field, value) => {
  const updatedContent = [...content];
  updatedContent[contentIndex][field] = value;
  setContent(updatedContent);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const docRef = doc(db, "blogPosts", "finding-right-erp-shopify-store");

    await setDoc(docRef, {
      title, // ✅ Added title
      description, // ✅ Added description
      pointsWiseText: sections.reduce((acc, section) => {
        acc[section.sectionName] = section.data;
        return acc;
      }, {}),
      faqSection: { 
        faqTitle: "Frequently Asked Questions",
        faqs: faqs.filter(faq => faq.question.trim() && faq.answer.trim()) // Avoid empty entries
      },
      contentSection: content.filter(item => item.title.trim() && item.description.trim()), // ✅ Storing content section
      ctaSection ,// ✅ Storing CTA section separately
      tagsSection: tags, // ✅ Fix: Directly using tags array
      anchorWordsSection: anchorWords,
    }, );
    
    alert("Data successfully added to Firebase!");
    setTitle("");
    setDescription("");
    setSections([{ sectionName: "section1", data: [{ TopHeading: "", TopIntro: "" }] }]);
    setFaqs([{ question: "", answer: "" }]); // Reset FAQ form after submission
    setContent([{ title: "", description: "" }]); // ✅ Reset content section after submission
    setCtaSection({
      ctaTitle: "",
      description: "",
    });
    setTags([]); // ✅ Reset as empty array, not string
    setAnchorWords([]); // ✅ Reset as empty array, not string
    
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error adding data.");
  }
};


  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Add Sections Data</h2>
      <form onSubmit={handleSubmit}>

   {/* ✅ Title Field */}
   <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* ✅ Description Field */}
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{section.sectionName}</h3>
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

            <button type="button" onClick={() => addPoint(sectionIndex)}>
              + Add Point
            </button>
          </div>
        ))}

        <button type="button" onClick={addSection} style={{ marginBottom: "10px" }}>
          + Add Section
        </button>

      {/* Content Section */}
      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>Content Section</h3>
          {content.map((item, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Content Title"
                value={item.title}
                onChange={(e) => handleContentChange(index, "title", e.target.value)}
                required
                style={{ width: "100%", marginBottom: "5px" }}
              />
              <textarea
                placeholder="Content Description"
                value={item.description}
                onChange={(e) => handleContentChange(index, "description", e.target.value)}
                required
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
          ))}
          <button type="button" onClick={addContentItem}>+ Add Content</button>
        </div>

                {/* Tags Section UI */}
                <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                <h3>Tags</h3>
                
                <input
                  type="text"
                  placeholder="tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={addTag} // Enter Key to Add
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                
                {/* Add Button */}
                <button type="button" onClick={addTagItem}>+ Add tag</button>
                
                {/* Tags List */}
                <div style={{ marginTop: "10px" }}>
                  {tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
                      {tag} 
                      <button onClick={() => removeTag(index)}>x</button>
                    </span>
                  ))}
                </div>
              </div>


        {/* Anchor Words Section */}
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>Anchor Words</h3>
          <input
            type="text"
            placeholder="Enter anchor word and press Enter"
            onKeyDown={addAnchorWord}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <div>
            {Object.entries(anchorWords).map(([key, value]) => (
              <span key={key} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
                {value} <button onClick={() => removeAnchorWord(key)}>x</button>
              </span>
            ))}
          </div>
        </div>


        {/* FAQ Section */}
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>FAQ Section</h3>
          {faqs.map((faq, faqIndex) => (
            <div key={faqIndex}>
              <input
                type="text"
                placeholder="FAQ Question"
                value={faq.question}
                onChange={(e) => handleFaqChange(faqIndex, "question", e.target.value)}
                required
                style={{ width: "100%", marginBottom: "5px" }}
              />
              <textarea
                placeholder="FAQ Answer"
                value={faq.answer}
                onChange={(e) => handleFaqChange(faqIndex, "answer", e.target.value)}
                required
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
          ))}
          <button type="button" onClick={addFaq}>
            + Add FAQ
          </button>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>CTA Section</h3>
          <input
            type="text"
            placeholder="CTA Title"
            value={ctaSection.ctaTitle}
            onChange={(e) => handleCtaChange("ctaTitle", e.target.value)}
            required
            style={{ width: "100%", marginBottom: "5px" }}
          />
          <textarea
            placeholder="Description"
            value={ctaSection.description}
            onChange={(e) => handleCtaChange("description", e.target.value)}
            required
            style={{ width: "100%", marginBottom: "5px" }}
          />
        
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSectionsForm;
