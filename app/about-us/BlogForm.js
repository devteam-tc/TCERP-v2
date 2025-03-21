import styles from './BlogForm.module.css';

const BlogForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogSection}>
        <label className={styles.label}>Blog Heading</label>
        <input className={styles.input} type="text" placeholder="Enter Your blog heading in 50-60 Characters" />

        <label className={styles.label}>Blog Description</label>
        <input  className={styles.input}  type="text" placeholder="Enter Your Blog Description in 50-60 Characters" />
      </div>

      <div className={styles.imageSection}>
        <label className={styles.label}>Blog Image</label>
        <button className={styles.uploadButton}>Upload</button>
        <p>*Blog image size in 16:9 ratio</p>
        <input  className={styles.input}  type="text" placeholder="Alt information" />
      </div>

      {[1, 2, 3].map((section, index) => (
        <div key={index} className={styles.section}>
          <h3>Section {section}.0</h3>
          <label className={styles.label}>Section Heading</label>
          <input  className={styles.input}  type="text" placeholder="Enter Your Section heading in 50-60 Characters" />

          <label className={styles.label}>Section Description</label>
          <input  className={styles.input}  type="text" placeholder="Enter Your Section Description in 100-150 Characters" />

          <button className={styles.addButton}>+ Add New Section Description</button>
        </div>
      ))}

      <div className={styles.faqSection}>
        <h3>FAQ’s</h3>
        <label className={styles.label}>FAQ 1</label>
        <input  className={styles.input}  type="text" placeholder="Enter Your Faq in 50-60 Characters" />
        <label className={styles.label}>FAQ Answer</label>
        <input  className={styles.input}  type="text" placeholder="Enter Your Faq answer in 150-200 Characters" />
        <button className={styles.addButton}>+ Add New FAQ</button>
      </div>
    </div>
  );
};

export default BlogForm;
