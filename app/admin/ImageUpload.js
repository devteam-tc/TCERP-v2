import React, { useState } from "react";
import { storage } from "../firebaseConfig"; // Ensure correct Firebase import
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Handle File Selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Invalid file type! Please select an image.");
        return;
      }
      setImage(file);
    }
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image before uploading.");
      return;
    }

    try {
      setUploading(true);
      console.log("Uploading image:", image);

      // Replace spaces & special characters in filename
      const sanitizedFileName = image.name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.]/g, "");

      // Reference to Firebase Storage
      const imageRef = ref(storage, `blogs_images/${Date.now()}_${sanitizedFileName}`);
      
      // Upload Image
      const snapshot = await uploadBytes(imageRef, image);
      console.log("Upload snapshot:", snapshot);

      // Get Image URL
      const downloadUrl = await getDownloadURL(imageRef);
      setImageUrl(downloadUrl);
      console.log("Image successfully uploaded! URL:", downloadUrl);
      
    } catch (error) {
      console.error("Error during image upload:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ width: "200px", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
