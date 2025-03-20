const TitleAndDescription = ({ title, setTitle, description, setDescription, slug }) => (
    <div>
      <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <div>
        <label>Slug (Auto-generated):</label>
        <input type="text" value={slug} readOnly />
      </div>
    </div>
  );
  export default TitleAndDescription;
  