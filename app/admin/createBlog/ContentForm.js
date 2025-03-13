const ContentForm = ({ content, setContent }) => {
    const addContent = () => {
      setContent([...content, { title: "", description: [""] }]);
    };
  
    return (
      <div>
        <h3>Content Section</h3>
        {content.map((item, index) => (
          <div key={index}>
            <input type="text" placeholder="Content Title" value={item.title} onChange={(e) => {
              const updatedContent = [...content];
              updatedContent[index].title = e.target.value;
              setContent(updatedContent);
            }} />
            <textarea placeholder="Content Description" value={item.description[0]} onChange={(e) => {
              const updatedContent = [...content];
              updatedContent[index].description[0] = e.target.value;
              setContent(updatedContent);
            }} />
          </div>
        ))}
        <button type="button" onClick={addContent}>+ Add Content</button>
      </div>
    );
  };
  
  export default ContentForm;
  