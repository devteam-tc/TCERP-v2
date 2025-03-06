"use client"; // Ensures interactivity works in Next.js

const KeywordParser = ({ description, keywordLinks }) => {
  if (!keywordLinks || Object.keys(keywordLinks).length === 0) return description;

  const words = Object.keys(keywordLinks);
  const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");

  return description.split(regex).map((part, index) =>
    words.includes(part) ? (
      <a
        key={index}
        href={keywordLinks[part]}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "blue",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        {part}
      </a>
    ) : (
      part
    )
  );
};

export default KeywordParser;
