"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const BlogGrid = ({ posts }) => {
  return (
    <section className={styles.blogGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <Link href={`/blogs/${post.slug}`} className={styles.cardLink}>
                <div className={styles.imageContainer}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2>
                    {post.title} <span className={styles.arrow}>→</span>
                  </h2>
                  <p>{post.excerpt}</p>
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
