const ImageUpload = ({ image, setImage }) => {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };
  
    return (
      <div>
        <h3>Image Upload</h3>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        {image && <img src={image} alt="Preview" style={{ width: "100px", height: "100px", marginTop: "10px" }} />}
      </div>
    );
  };
  
  export default ImageUpload;
  