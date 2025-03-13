import React, { useState } from "react";
import Select from "react-select";
import { db } from "../firebaseConfig"; // Ensure you have Firebase setup
import { addDoc, collection, Timestamp, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // Import UUID

// Industry Options
const industryOptions = [
  { value: "Agriculture Industry", label: "Agriculture Industry" },
  { value: "Apparel Industry", label: "Apparel Industry" },
  { value: "Automotive Industry", label: "Automotive Industry" },
  { value: "Beverage Industry", label: "Beverage Industry" },
  { value: "Chemical Industry", label: "Chemical Industry" },
  { value: "Educational Institutes", label: "Educational Institutes" },
  { value: "Electrical Solar Industry", label: "Electrical Solar Industry" },
  { value: "Electronics Industry", label: "Electronics Industry" },
  { value: "FMCG Industry", label: "FMCG Industry" },
  { value: "Finance Industry", label: "Finance Industry" },
];

// **Industry Select Component**
const IndustrySelect = ({ selectedOption, handleChange }) => {
  return (
    <Select
      options={[...industryOptions, { value: "Other", label: "Other" }]}
      value={selectedOption}
      onChange={handleChange}
      placeholder="Select Category..."
    />
  );
};

// **Custom Industry Input Component**
const CustomIndustryInput = ({ customOption, setCustomOption, handleSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter custom industry"
        value={customOption}
        onChange={(e) => setCustomOption(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

// **Main Component**
const IndustryForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [customOption, setCustomOption] = useState("");

  const handleChange = async (selected) => {
    setSelectedOption(selected);

    if (selected?.value === "Other") {
      setCustomOption(""); // Reset custom input field
      return;
    }

    // Save selected industry to Firestore
    try {
      await addDoc(collection(db, "blogPosts"), {
        industry: selected.value,
        timestamp: Timestamp.now(),
      });
      console.log("Industry added:", selected.value);
    } catch (error) {
      console.error("Error adding industry:", error);
    }
  };

  const handleCustomIndustrySubmit = async () => {
    if (!customOption.trim()) return;
  
    const generatedSlug = uuidv4(); // Generate a unique slug
  
    try {
      const docRef = doc(db, "blogPosts", generatedSlug);
      await setDoc(docRef, {
        industry: customOption,
        timestamp: Timestamp.now(),
      });
      console.log("Custom industry added:", customOption);
      setCustomOption(""); // Clear input field
      setSelectedOption({ value: customOption, label: customOption }); // Update UI
    } catch (error) {
      console.error("Error adding custom industry:", error);
    }
  };

  return (
    <div>
      <label>Select Category:</label>
      <IndustrySelect selectedOption={selectedOption} handleChange={handleChange} />
      {selectedOption?.value === "Other" && (
        <CustomIndustryInput
          customOption={customOption}
          setCustomOption={setCustomOption}
          handleSubmit={handleCustomIndustrySubmit}
        />
      )}
    </div>
  );
};

export default IndustryForm;
