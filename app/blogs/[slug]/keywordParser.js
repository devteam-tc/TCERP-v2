// "use client";
// import styles from "./page.module.css"

// const KeywordParser = ({ description = "", anchorWordsSection = {} }) => {
//   if (!description || typeof description !== "string") return description;
//   if (!anchorWordsSection || Object.keys(anchorWordsSection).length === 0) return description;

//   const words = Object.keys(anchorWordsSection);
//   const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi"); // Match whole words

//   return description.split(regex).map((part, index) => {
//     const lowerPart = part.toLowerCase().trim(); // Normalize case and trim spaces

//     return words.some(word => word.toLowerCase() === lowerPart) ? (
//       <a
//         key={index}
//         href={anchorWordsSection[lowerPart]}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={styles.highlighted_keyword} // Apply CSS class
//       >
//         {part}
//       </a>
//     ) : (
//       part
//     );
//   });
// };

// export default KeywordParser;
import styles from "./page.module.css";

const KeywordParser = ({ description = "", anchorWordsSection = {}, usedKeywords }) => {
  if (!description || typeof description !== "string") return description;
  if (!anchorWordsSection || Object.keys(anchorWordsSection).length === 0) return description;

  const words = Object.keys(anchorWordsSection).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

  return description.split(regex).map((part, index) => {
    const lowerPart = part.toLowerCase().trim();

    // ✅ Show only first occurrence
    if (words.some(word => word.toLowerCase() === lowerPart) && !usedKeywords.has(lowerPart)) {
      usedKeywords.add(lowerPart);
      return (
        <a
          key={index}
          href={anchorWordsSection[lowerPart]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.highlighted_keyword}
        >
          {part}
        </a>
      );
    }

    return part;
  });
};

export default KeywordParser;

