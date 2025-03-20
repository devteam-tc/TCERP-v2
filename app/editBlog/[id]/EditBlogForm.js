"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { db } from "../../firebaseConfig"; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";

import TitleAndDescription from "../../admin/TitleAndDescription";
import ContentForm from "../../admin/ContentForm";
import TagsForm from "../../admin/TagsForm";
import AnchorWordsForm from "../../admin/AnchorWordsForm";
import FAQsForm from "../../admin/FAQsForm";
import CTASection from "../../admin/CTASection";
import MetaKeywordsForm from "../../admin/MetaKeywordsForm";
import ImageUpload from "../../admin/ImageUpload";

const EditBlogForm = ({ id }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    meta: { title: "", description: "" },
    content: [],
    tags: [],
    anchorWords: [],
    faqs: [],
    ctaSection: { ctaTitle: "", description: "" },
    metaKeywords: [],
    image: "",
  });

  // ✅ Single useEffect for authentication & fetching data
  useEffect(() => {
    const init = async () => {
      if (!isAuthenticated) {
        router.replace("/login");
        return;
      }

      if (id) {
        try {
          const docRef = doc(db, "blogPosts", id);
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

    init();
  }, [id, isAuthenticated, router]);

  // Show redirecting message if user is not authenticated
  if (!isAuthenticated) {
    return <div>🔒 Redirecting to login...</div>;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "blogPosts", id);
      await updateDoc(docRef, { ...blogData, date: new Date() });
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
    <form onSubmit={handleUpdate}>
      <TitleAndDescription title={blogData.title} setTitle={(value) => setBlogData({ ...blogData, title: value })} description={blogData.description} setDescription={(value) => setBlogData({ ...blogData, description: value })} />
      <ContentForm content={blogData.content} setContent={(value) => setBlogData({ ...blogData, content: value })} />
      <TagsForm tags={blogData.tags} setTags={(value) => setBlogData({ ...blogData, tags: value })} />
      <AnchorWordsForm anchorWords={blogData.anchorWords} setAnchorWords={(value) => setBlogData({ ...blogData, anchorWords: value })} />
      <FAQsForm faqs={blogData.faqs} setFaqs={(value) => setBlogData({ ...blogData, faqs: value })} />
      <CTASection ctaSection={blogData.ctaSection} setCtaSection={(value) => setBlogData({ ...blogData, ctaSection: value })} />
      <MetaKeywordsForm metaKeywords={blogData.metaKeywords} setMetaKeywords={(value) => setBlogData({ ...blogData, metaKeywords: value })} />
      <ImageUpload image={blogData.image} setImage={(value) => setBlogData({ ...blogData, image: value })} />
      
      <Button type="submit">Update Blog</Button>
    </form>
  );
};

export default EditBlogForm;
