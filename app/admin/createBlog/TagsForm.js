const TagsForm = ({ tags, setTags }) => {
    const addTag = (e) => {
      if (e.key === "Enter" && e.target.value) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    };
  
    return (
      <div>
        <h3>Tags</h3>
        <input type="text" placeholder="Add a tag and press Enter" onKeyDown={addTag} />
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              {tag} <button type="button" onClick={() => setTags(tags.filter((_, i) => i !== index))}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TagsForm;
  