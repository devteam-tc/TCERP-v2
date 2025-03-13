const MetaKeywordsForm = ({ metaKeywords, setMetaKeywords }) => {
    const addMetaKeyword = (e) => {
      if (e.key === "Enter" && e.target.value) {
        setMetaKeywords([...metaKeywords, e.target.value]);
        e.target.value = "";
      }
    };
  
    return (
      <div>
        <h3>Meta Keywords</h3>
        <input type="text" placeholder="Add a meta keyword and press Enter" onKeyDown={addMetaKeyword} />
        <ul>
          {metaKeywords.map((keyword, index) => (
            <li key={index}>
              {keyword} <button type="button" onClick={() => setMetaKeywords(metaKeywords.filter((_, i) => i !== index))}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MetaKeywordsForm;
  