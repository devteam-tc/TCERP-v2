import styles from './Form.module.css';

const ContentForm = ({ content, setContent }) => {
    const addContent = () => {
      setContent([...content, { title: "", description: [""] }]);
    };
  // Handle title change
const handleContentChange = (index, field, value) => {
    const updatedContent = [...content];
    updatedContent[index][field] = value;
    setContent(updatedContent);
  };
  
  // Handle description change for a specific point
  const handleDescriptionChange = (contentIndex, descIndex, value) => {
    const updatedContent = [...content];
    updatedContent[contentIndex].description[descIndex] = value;
    setContent(updatedContent);
  };
  
  // Add a new description point inside a content section
  const addDescriptionPoint = (contentIndex) => {
    const updatedContent = [...content];
    updatedContent[contentIndex].description.push("");
    setContent(updatedContent);
  };
  
  // Remove a description point
  const removeDescriptionPoint = (contentIndex, descIndex) => {
    const updatedContent = [...content];
    updatedContent[contentIndex].description.splice(descIndex, 1);
    setContent(updatedContent);
  };
  
  // Add a new content section
  const addContentItem = () => {
    setContent([...content, { title: "", description: [""] }]);
  };
  
  
    return (
        <div className={styles.section} >
        <h3>Content Section</h3>
        {content.map((item, contentIndex) => (
          <div key={contentIndex}>
            <input className={styles.input}
              type="text"
              placeholder="Content Title"
              value={item.title}
              onChange={(e) => handleContentChange(contentIndex, "title", e.target.value)}
              required
            />

            {/* Loop through descriptions array */}
            {item.description.map((desc, descIndex) => (
              <div key={descIndex} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input className={styles.input}
                  placeholder={`Description Point ${descIndex + 1}`}
                  value={desc}
                  onChange={(e) =>
                    handleDescriptionChange(contentIndex, descIndex, e.target.value)
                  }
                  required
                />
                <button className={styles.crossbutton} type="button" onClick={() => removeDescriptionPoint(contentIndex, descIndex)}>
                  ❌
                </button>
              </div>
            ))}

            <button  className={styles.addButton} type="button"  onClick={() => addDescriptionPoint(contentIndex)}>+ Add Description Point</button>
          </div>
        ))}

          <button style={{ marginTop: '10px' }} className={styles.addButton} type="button" onClick={addContentItem}>
            + Add Content
          </button>
      </div>
    );
  };
  
  export default ContentForm;
  