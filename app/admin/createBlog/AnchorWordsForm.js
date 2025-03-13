const AnchorWordsForm = ({ anchorWords, setAnchorWords }) => {
    const addAnchorWord = () => {
      setAnchorWords([...anchorWords, { word: "", href: "" }]);
    };
  
    return (
      <div>
        <h3>Anchor Words</h3>
        {anchorWords.map((item, index) => (
          <div key={index}>
            <input type="text" placeholder="Word" value={item.word} onChange={(e) => {
              const updated = [...anchorWords];
              updated[index].word = e.target.value;
              setAnchorWords(updated);
            }} />
            <input type="text" placeholder="Link (href)" value={item.href} onChange={(e) => {
              const updated = [...anchorWords];
              updated[index].href = e.target.value;
              setAnchorWords(updated);
            }} />
            <button type="button" onClick={() => setAnchorWords(anchorWords.filter((_, i) => i !== index))}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addAnchorWord}>+ Add Anchor Word</button>
      </div>
    );
  };
  
  export default AnchorWordsForm;
  