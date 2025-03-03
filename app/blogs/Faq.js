"use client"; // Mark this as a client component

import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import styles from "./page.module.css";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust path as needed

async function getBlogPost(slug) {
  const docRef = doc(db, "blogPosts", slug);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
}

export default function FaqAccordion({ slug }) {
  const [post, setPost] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await getBlogPost(slug);
      setPost(fetchedPost);
    }
    fetchPost();
  }, [slug]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqContainer}>
          {post?.faqs && post.faqs.length > 0 ? (
            post.faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 onClick={() => toggleFAQ(index)} className={styles.faqQuestion}>
                  {faq.question} {openIndex === index ? <FaMinus /> : <FiPlus />}
                </h3>
                {openIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
              </div>
            ))
          ) : (
            <p>No FAQs available</p>
          )}
        </div>
      </div>
    </section>
  );
}
