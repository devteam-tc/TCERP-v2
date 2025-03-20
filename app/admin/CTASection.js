import styles from './Form.module.css';

const CTASection = ({ ctaSection, setCtaSection }) => {
     
    const handleCtaChange = (field, value) => {
        setCtaSection({ ...ctaSection, [field]: value });
      };
      
  
    return (
      <div className={styles.section}>
        <h3>CTA Section</h3>
        <input className={styles.input}
          type="text"
          placeholder="CTA Title"
          value={ctaSection.ctaTitle}
          onChange={(e) => handleCtaChange("ctaTitle", e.target.value)}
          required
        />
        <input className={styles.input}
          placeholder="Description"
          value={ctaSection.description}
          onChange={(e) => handleCtaChange("description", e.target.value)}
          required
        />
      </div>
    );
  };
  
  export default CTASection;
  