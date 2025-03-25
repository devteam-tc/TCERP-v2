"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";

import TitleAndDescription from "../../admin/createBlog/TitleAndDescription";
import ContentForm from "../../admin/createBlog/ContentForm";
import TagsForm from "../../admin/createBlog/TagsForm";
import AnchorWordsForm from "../../admin/createBlog/AnchorWordsForm";
import FAQsForm from "../../admin/createBlog/FAQsForm";
import CTASection from "../../admin/createBlog/CTASection";
import MetaKeywordsForm from "../../admin/createBlog/MetaKeywordsForm";
import ImageUpload from "../../admin/createBlog/ImageUpload";
import styles from "../../admin/createBlog/Form.module.css";

const EditBlogForm = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    contentSection: [],
    tags: [],
    anchorWordsSection: [],
    faqs: [],
    ctaSection: { ctaTitle: "", descriptions: [] },
    metaKeywords: [],
    imageUrl: "",
    pointsWiseText: [], // Make sure this is initialized
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      if (id) {
        try {
          const docRef = doc(db, "blogs", id);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("Fetched Blog Data:", data);
  
            setBlogData({
              ...data,
              pointsWiseText: Array.isArray(data.pointsWiseText)
                ? data.pointsWiseText
                : Object.entries(data.pointsWiseText || {}).map(([key, value]) => ({
                    sectionName: key,
                    data: value,
                  })),
            });
          } else {
            console.error("❌ Blog not found!");
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      }
      setLoading(false);
    };
  
    fetchBlogData();
  }, [id]);
  
  // **Handle Section Changes**
  const handleSectionChange = (sectionIndex, pointIndex, field, value) => {
    const updatedSections = [...blogData.pointsWiseText];
    updatedSections[sectionIndex].data[pointIndex][field] = value;
    setBlogData({ ...blogData, pointsWiseText: updatedSections });
  };

  // **Add a New Section**
  const addSection = () => {
    const newSection = {
      sectionName: `section${blogData.pointsWiseText.length + 1}`,
      data: [{ TopHeading: "", TopIntro: "" }],
    };
    setBlogData({ ...blogData, pointsWiseText: [...blogData.pointsWiseText, newSection] });
  };

  // **Remove Section**
  const removeSection = (sectionIndex) => {
    if (sectionIndex === 0) {
      alert("You cannot delete the first section.");
      return;
    }
    const updatedSections = blogData.pointsWiseText.filter((_, index) => index !== sectionIndex);
    setBlogData({ ...blogData, pointsWiseText: updatedSections });
  };

  // **Add a New Point to a Section**
  const addPoint = (sectionIndex) => {
    const updatedSections = [...blogData.pointsWiseText];
    updatedSections[sectionIndex].data.push({ title: "", description: "" });
    setBlogData({ ...blogData, pointsWiseText: updatedSections });
  };

  // **Remove a Point from a Section**
  const removePoint = (sectionIndex, pointIndex) => {
    const updatedSections = [...blogData.pointsWiseText];

    if (updatedSections[sectionIndex].data.length > 1) {
      updatedSections[sectionIndex].data.splice(pointIndex, 1);
      setBlogData({ ...blogData, pointsWiseText: updatedSections });
    }
  };

  // **Submit Updated Data**
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "blogs", id);
      const updatedData = {
        ...blogData,
        pointsWiseText: blogData.pointsWiseText.reduce((acc, section) => {
          acc[section.sectionName] = section.data;
          return acc;
        }, {}),
      };

      await updateDoc(docRef, updatedData);
      alert("Blog updated successfully!");
      // router.push("/admin/blogs");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Error updating blog.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
<h2 style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>
  Edit Blog
</h2>
<form onSubmit={handleSubmit}  style={{ maxWidth: "800px", margin: "auto" }}>
<TitleAndDescription
        title={blogData.title}
        setTitle={(value) =>
          setBlogData((prev) => ({ ...prev, title: value }))
        }
        description={blogData.description}
        setDescription={(value) =>
          setBlogData((prev) => ({ ...prev, description: value }))
        }
      />

     <ContentForm
        content={blogData.contentSection || []}
        setContent={(updateFn) => {
          setBlogData((prevData) => ({
            ...prevData,
            contentSection: typeof updateFn === "function" ? updateFn(prevData.contentSection) : updateFn,
          }));
        }}
      />

      <TagsForm
        tags={blogData.tags || []}
        setTags={(value) => setBlogData((prev) => ({ ...prev, tags: value }))}
      />

        
        {blogData.pointsWiseText.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.section}>
            <h3>{section.sectionName}</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Section Top Heading"
              value={section.data[0].TopHeading}
              onChange={(e) => handleSectionChange(sectionIndex, 0, "TopHeading", e.target.value)}
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Section Top Intro"
              value={section.data[0].TopIntro}
              onChange={(e) => handleSectionChange(sectionIndex, 0, "TopIntro", e.target.value)}
              required
            />
            {section.data.slice(1).map((point, pointIndex) => (
              <div key={pointIndex}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Point Title"
                  value={point.title}
                  onChange={(e) => handleSectionChange(sectionIndex, pointIndex + 1, "title", e.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder="Point Description"
                  value={point.description}
                  onChange={(e) => handleSectionChange(sectionIndex, pointIndex + 1, "description", e.target.value)}
                />
                <button type="button"  className={styles.crossbutton} style={{ marginBottom: '10px' }}  onClick={() => removePoint(sectionIndex, pointIndex + 1)}>❌</button>
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
       <AnchorWordsForm
        anchorWords={blogData.anchorWordsSection || []}
        setAnchorWords={(updateFn) => {
          setBlogData((prevData) => ({
            ...prevData,
            anchorWordsSection: typeof updateFn === "function" ? updateFn(prevData.anchorWordsSection) : updateFn,
          }));
        }}
      />

      <FAQsForm
        faqs={blogData.faqs || []}
        setFaqs={(updateFn) => {
          setBlogData((prevData) => ({
            ...prevData,
            faqs: typeof updateFn === "function" ? updateFn(prevData.faqs) : updateFn,
          }));
        }}
      />

      <CTASection
        ctaSection={blogData.ctaSection || { ctaTitle: "", descriptions: [] }}
        setCtaSection={(update) => {
          setBlogData((prev) => ({
            ...prev,
            ctaSection: {
              ...prev.ctaSection,
              descriptions: update.descriptions || [...prev.ctaSection.descriptions, ""],
            },
          }));
        }}
      />
       <MetaKeywordsForm
        metaKeywords={blogData.metaKeywords || []}
        setMetaKeywords={(value) =>
          setBlogData((prev) => ({ ...prev, metaKeywords: value }))
        }
      />

       <ImageUpload
        image={blogData.imageUrl}
        setImage={(newImage) =>
          setBlogData((prev) => ({ ...prev, imageUrl: newImage }))
        }
      />
 <div style={{ textAlign: "center" }}>
        <Button className={styles.submitbutton} type="submit">
          Update Blog
        </Button>
      </div>
        {/* <Button type="submit">Update Blog</Button> */}
      </form>
    </div>
  );
};

export default EditBlogForm;
