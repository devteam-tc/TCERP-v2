// "use client"; // Ensures interactivity works in Next.js

// const KeywordParser = ({ description = "", anchorWordsSection }) => {
//   if (!anchorWordsSection || Object.keys(anchorWordsSection).length === 0) return description;

//   const words = Object.keys(anchorWordsSection);
//   const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");

//   return description
//     ?.toString() // Ensure description is always a string
//     .split(regex)
//     .map((part, index) =>
    //   words.includes(part) ? (
    //     <a
    //       key={index}
    //       href={anchorWordsSection[part]}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       style={{
    //         color: "blue",
    //         textDecoration: "none",
    //       }}
    //       onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
    //       onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
    //     >
    //       {part}
    //     </a>
    //   ) : (
    //     part
    //   )
    // );
// };

// export default KeywordParser;

"use client";
import styles from "./page.module.css"

const KeywordParser = ({ description = "", anchorWordsSection = {} }) => {
  if (!description || typeof description !== "string") return description;
  if (!anchorWordsSection || Object.keys(anchorWordsSection).length === 0) return description;

  const words = Object.keys(anchorWordsSection);
  const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi"); // Match whole words

  return description.split(regex).map((part, index) => {
    const lowerPart = part.toLowerCase().trim(); // Normalize case and trim spaces

    return words.some(word => word.toLowerCase() === lowerPart) ? (
      <a
        key={index}
        href={anchorWordsSection[lowerPart]}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.highlighted_keyword} // Apply CSS class
      >
        {part}
      </a>
    ) : (
      part
    );
  });
};

export default KeywordParser;
