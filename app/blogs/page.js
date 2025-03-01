// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import styles from "./page.module.css";
// import { blogPosts } from "../../data/blog-posts";
// import Navigation from "../components/Header/navigation";
// import Footer from "../components/Footer";

// const POSTS_PER_PAGE = 3;

// export default function Home() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const displayedPosts = blogPosts.slice(
//     (currentPage - 1) * POSTS_PER_PAGE,
//     currentPage * POSTS_PER_PAGE
//   );

//   return (
//     <main className={styles.main}>
//       <Navigation />

//       <section className={styles.hero}>
//         <div className={styles.container}>
//           <h1>
//             Our Blogs <span className={styles.rssIcon}>📰</span>
//           </h1>
//         </div>
//       </section>

//       <section className={styles.blogGrid}>
//         <div className={styles.container}>
//           <div className={styles.grid}>
//             {displayedPosts.map((post) => (
//               <article key={post.id} className={styles.blogCard}>
//                 <Link href={`/blogs/${post.slug}`} className={styles.cardLink}>
//                   <div className={styles.imageContainer}>
//                     <Image
//                       src={post.image || "/placeholder.svg"}
//                       alt={post.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className={styles.cardImage}
//                     />
//                   </div>
//                   <div className={styles.cardContent}>
//                     <h2>
//                       {post.title} <span className={styles.arrow}>→</span>
//                     </h2>
//                     <p>{post.excerpt}</p>
//                     <div className={styles.tags}>
//                       {post.tags.map((tag) => (
//                         <span key={tag} className={styles.tag}>
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </Link>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className={styles.pagination}>
//         <div className={styles.container}>
//           <button
//             className={styles.paginationButton}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             ← Previous
//           </button>
//           <div className={styles.paginationNumbers}>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index + 1}
//                 className={
//                   currentPage === index + 1 ? styles.active : ""
//                 }
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//           <button
//             className={styles.paginationButton}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next →
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </main>
//   );
// }


// import { blogPosts } from "../../data/blog-posts";
// import BlogsClient from "./BlogsClient";

// export const metadata = {
//   title: "Blogs",
//   description: "Explore all our blog posts on various topics.",
// };

// export default function BlogsPage() {
//   // Pass the blogPosts data to the Client Component
//   return <BlogsClient blogPosts={blogPosts} />;
// }

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Ensure firebase is configured
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Blogs | Discover Expert ERP Tips & Insights for Growth",
  description: "Dive into our blog for clear, expert advice on ERP systems. Learn tips, insights, and strategies to boost your business efficiency today",
  keywords: "manufacturing erp, manufacturing erp software, production erp, production software, erp solutions, erp applications, erp software management, garment manufacturing software, plastic manufacturing industry, leather manufacturing erp software, cloud based erp software"
};

async function getBlogPosts() {
  const querySnapshot = await getDocs(collection(db, "blogPosts"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default async function BlogsPage() {
  const blogPosts = await getBlogPosts();

  return <BlogsClient blogPosts={blogPosts} />;
}
