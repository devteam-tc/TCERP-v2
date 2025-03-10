"use client";
import { useEffect, useState } from "react";
import styles from "./TableOfContents.module.css";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll(
      ".blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content .topheading, .blog-content .subHeading"
    );

    let sectionIndex = 0;
    let subIndex = 0;
    let subSubIndex = 0;
    let subSubSubIndex = 0;

    const headingsArray = Array.from(headingElements).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id; // Assign unique ID if not present

      let level;
      let displayIndex = "";

      if (heading.tagName === "H2") {
        level = 1;
        sectionIndex++;
        subIndex = 0;
        subSubIndex = 0;
        subSubSubIndex = 0;
        displayIndex = `${sectionIndex}. `;
      } else if (heading.tagName === "H4" || heading.classList.contains("topheading")) {
        level = 2;
        subIndex++;
        subSubIndex = 0;
        subSubSubIndex = 0;
        displayIndex = `${sectionIndex}.${subIndex}. `;
      } else if (heading.tagName === "H5" || heading.classList.contains("subHeading")) {
        level = 3;
        subSubIndex++;
        subSubSubIndex = 0;
        displayIndex = `${sectionIndex}.${subIndex}.${subSubIndex} `;
      } else if (heading.tagName === "H5") {
        level = 4;
        subSubSubIndex++;
        displayIndex = `${sectionIndex}.${subIndex}.${subSubIndex}.${subSubSubIndex} `;
      } else {
        level = 5;
      }

      return {
        id,
        text: heading.textContent,
        level,
        displayIndex,
      };
    });

    setHeadings(headingsArray);
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={styles.tocContainer}>
      <h3 className={styles.tocTitle}>Table of Contents</h3>
      {headings.length > 0 ? (
        <ul className={styles.tocList}>
          {headings.map((heading, index) => (
            <li
              key={index}
              className={`${styles.tocItem} ${styles[`tocItem-level${heading.level}`]}`}
              onClick={() => handleClick(heading.id)}
            >
              {heading.displayIndex} {heading.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No headings found</p>
      )}
    </div>
  );
};

export default TableOfContents;
