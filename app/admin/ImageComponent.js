import React from "react";
import Link from "next/link";
import styles from "./ImageComponent.module.css";

const ImageComponent = () => {
  const posterImage =
    "https://firebasestorage.googleapis.com/v0/b/tech-cloud-erp-1532582683650.firebasestorage.app/o/blogs_images%2FDesign-01-01-01.jpg?alt=media&token=b96faa41-6a07-4d66-95a4-6016c2389d65";

  return (
    <div className={styles.imageWrapper}>
      <Link href="/schedule-demo">
        <img src={posterImage} alt="Poster" className={styles.image} />
      </Link>
    </div>
  );
};

export default ImageComponent;
