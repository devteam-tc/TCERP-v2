const CTASection = ({ ctaSection, setCtaSection }) => (
    <div>
      <h3>CTA Section</h3>
      <input type="text" placeholder="CTA Title" value={ctaSection.ctaTitle} onChange={(e) => setCtaSection({ ...ctaSection, ctaTitle: e.target.value })} />
      <textarea placeholder="CTA Description" value={ctaSection.description} onChange={(e) => setCtaSection({ ...ctaSection, description: e.target.value })} />
    </div>
  );
  
  export default CTASection;
  