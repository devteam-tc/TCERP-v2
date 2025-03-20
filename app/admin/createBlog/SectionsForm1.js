const SectionsForm = ({ sections, setSections }) => {
    const addSection = () => {
      setSections([...sections, { sectionName: `section${sections.length + 1}`, data: [{ TopHeading: "", TopIntro: "" }] }]);
    };
  
    return (
      <div>
        {sections.map((section, index) => (
          <div key={index}>
            <h3>{section.sectionName}</h3>
            <input type="text" placeholder="Top Heading" value={section.data[0].TopHeading} onChange={(e) => {
              const updatedSections = [...sections];
              updatedSections[index].data[0].TopHeading = e.target.value;
              setSections(updatedSections);
            }} />
            <input type="text" placeholder="Top Intro" value={section.data[0].TopIntro} onChange={(e) => {
              const updatedSections = [...sections];
              updatedSections[index].data[0].TopIntro = e.target.value;
              setSections(updatedSections);
            }} />
          </div>
        ))}
        <button type="button" onClick={addSection}>+ Add Section</button>
      </div>
    );
  };
  export default SectionsForm;
  