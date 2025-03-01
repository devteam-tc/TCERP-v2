const KeywordParser = ({ text, keywordLinks }) => {
    if (!keywordLinks || Object.keys(keywordLinks).length === 0) return text;
  
    const words = Object.keys(keywordLinks);
    const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
  
    return text.split(regex).map((part, index) =>
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
  
  