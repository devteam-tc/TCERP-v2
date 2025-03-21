"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
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

const EditBlogForm = ({ id }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    meta: { title: "", description: "" },
    contentSection: [],
    tags: [],
    anchorWordsSection: [],
    faqSection: [],
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

    init();
  }, [id, isAuthenticated, router]);

  // Show redirecting message if user is not authenticated
  if (!isAuthenticated) {
    return <div>🔒 Redirecting to login...</div>;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "blogs", id);
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
      <ContentForm content={blogData.contentSection} setContent={(value) => setBlogData({ ...blogData, contentSection: value })} />
      <TagsForm tags={blogData.tagsSection} setTags={(value) => setBlogData({ ...blogData, tagsSection: value })} />
      <AnchorWordsForm anchorWords={blogData.anchorWordsSection} setAnchorWords={(value) => setBlogData({ ...blogData, anchorWordsSection: value })} />
      <FAQsForm faqs={blogData.faqSection.faqs} setFaqs={(value) => setBlogData({ ...blogData, faqSection: value })} />
      <CTASection ctaSection={blogData.ctaSection} setCtaSection={(value) => setBlogData({ ...blogData, ctaSection: value })} />
      <MetaKeywordsForm metaKeywords={blogData.metaKeywords} setMetaKeywords={(value) => setBlogData({ ...blogData, metaKeywords: value })} />
      <ImageUpload image={blogData.image} setImage={(value) => setBlogData({ ...blogData, image: value })} />
      
      <Button type="submit">Update Blog</Button>
    </form>
  );
};

export default EditBlogForm;
