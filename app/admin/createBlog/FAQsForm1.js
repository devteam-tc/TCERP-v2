const FAQsForm = ({ faqs, setFaqs }) => {
    const addFAQ = () => {
      setFaqs([...faqs, { question: "", answer: "" }]);
    };
  
    return (
      <div>
        <h3>FAQs</h3>
        {faqs.map((faq, index) => (
          <div key={index}>
            <input type="text" placeholder="Question" value={faq.question} onChange={(e) => {
              const updated = [...faqs];
              updated[index].question = e.target.value;
              setFaqs(updated);
            }} />
            <textarea placeholder="Answer" value={faq.answer} onChange={(e) => {
              const updated = [...faqs];
              updated[index].answer = e.target.value;
              setFaqs(updated);
            }} />
            <button type="button" onClick={() => setFaqs(faqs.filter((_, i) => i !== index))}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addFAQ}>+ Add FAQ</button>
      </div>
    );
  };
  
  export default FAQsForm;
  