import styles from './Form.module.css';

const AnchorWordsForm = ({ anchorWords, setAnchorWords }) => {
   
    const addAnchorWord = () => {
        setAnchorWords([...anchorWords, { word: "", href: "" }]);
      };
      
      // Function to remove an anchor word entry
      const removeAnchorWord = (index) => {
        setAnchorWords(anchorWords.filter((_, i) => i !== index));
      };
     
      // Function to update anchor word and href
      const handleAnchorWordChange = (index, field, value) => {
        const updatedAnchorWords = [...anchorWords];
        updatedAnchorWords[index][field] = value;
        setAnchorWords(updatedAnchorWords);
      };
      
    return (
        <div>
        {anchorWords.map((item, index) => (
          <div key={index} className={styles.section}>
                    <h3>Anchor Words</h3>
            {/* Input for Anchor Word */}
            <input className={styles.input}
              type="text"
              placeholder="Anchor Word"
              value={item.word}
              onChange={(e) => handleAnchorWordChange(index, "word", e.target.value)}
            />

            {/* Input for Href (URL) */}
            <input className={styles.input}
              type="text"
              placeholder="Href (URL)"
              value={item.href}
              onChange={(e) => handleAnchorWordChange(index, "href", e.target.value)}
            />

            {/* Remove Button */}
            <button className={styles.crossbutton} onClick={() => removeAnchorWord(index)}>Remove</button>
          </div>
        ))}

        {/* Button to Add New Anchor Word */}
        <button className={styles.addButton} onClick={addAnchorWord}>Add Anchor Word</button>
      </div>
    );
  };
  
  export default AnchorWordsForm;
  