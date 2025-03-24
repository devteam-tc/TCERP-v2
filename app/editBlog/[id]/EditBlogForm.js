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
    tagsSection: [],
    anchorWordsSection: [],
    faqs: [],
    ctaSection: { ctaTitle: "", descriptions: [] },
    metaKeywords: [],
    imageUrl: "",
  });

  // ✅ Fetch blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      if (id) {
        try {
          const docRef = doc(db, "blogs", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setBlogData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      }
      setLoading(false);
    };

    fetchBlogData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "blogs", id);
      await updateDoc(docRef, { ...blogData, createdAt: new Date() });
      alert("✅ Blog updated successfully!");
      router.push("/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("❌ Failed to update blog!");
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <form onSubmit={handleUpdate} style={{ maxWidth: "800px", margin: "auto" }}>
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
          setBlogData((prevData) => {
            const updatedContent =
              typeof updateFn === "function" ? updateFn(prevData.contentSection) : updateFn;
            return {
              ...prevData,
              contentSection: Array.isArray(updatedContent) ? updatedContent : prevData.contentSection,
            };
          });
        }}
      />

      <TagsForm 
        tags={blogData.tags} 
        setTags={(value) => setBlogData((prev) => ({ ...prev, tags: value }))} 
      />

      <AnchorWordsForm
        anchorWords={blogData.anchorWordsSection || []}
        setAnchorWords={(updateFn) => {
          setBlogData((prevData) => {
            const updatedWords =
              typeof updateFn === "function" ? updateFn(prevData.anchorWordsSection) : updateFn;
            return {
              ...prevData,
              anchorWordsSection: Array.isArray(updatedWords) ? updatedWords : prevData.anchorWordsSection,
            };
          });
        }}
      />

      <FAQsForm
        faqs={blogData.faqs || []}
        setFaqs={(updateFn) => {
          setBlogData((prevData) => {
            const updatedFaqs =
              typeof updateFn === "function" ? updateFn(prevData.faqs) : updateFn;
            return {
              ...prevData,
              faqs: Array.isArray(updatedFaqs) ? updatedFaqs : prevData.faqs,
            };
          });
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
        metaKeywords={blogData.metaKeywords}
        setMetaKeywords={(value) =>
          setBlogData((prev) => ({ ...prev, metaKeywords: value }))
        }
      />

      <ImageUpload
        image={blogData.imageUrl}
        setImage={(newImage) => setBlogData((prev) => ({ ...prev, imageUrl: newImage }))}
      />

      <div style={{ textAlign: "center" }}>
        <Button className={styles.submitbutton} type="submit">Update Blog</Button>
      </div>
    </form>
  );
};

export default EditBlogForm;