// "use client";

// import { useState } from "react";
// import { Form, Button, Col, Row } from "react-bootstrap";
// import { db, storage } from "../../firebaseConfig";
// import { collection, addDoc, doc, getDocs, query, where, Timestamp, getDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import emailjs from "@emailjs/browser";
// import styles from "./JobApplicationForm.module.css"; // Import CSS module

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Full Name is required"),
//   email: Yup.string().email("Invalid email format").required("Email is required"),
//   phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
//   education: Yup.string().required("Education level is required"),
//   totalExperience: Yup.number().min(0, "Years of experience cannot be negative").required("Total Years of Work Experience is required"),
//   currentCTC: Yup.number().min(0, "CTC must be a positive value").required("Current CTC is required"),
//   expectedCTC: Yup.number().min(0, "Expected CTC must be a positive value").required("Expected CTC is required"),
//   resume: Yup.mixed().required("Resume is required"),
// });

// const JobApplicationForm = ({ jobTitle }) => {
//   const [resumeFile, setResumeFile] = useState(null);

//   const initialValues = {
//     fullName: "",
//     email: "",
//     phone: "",
//     education: "",
//     totalExperience: "",
//     currentCTC: "",
//     expectedCTC: "",
//     resume: null,
//     AppliedDate: Timestamp.now(),
//   };

//   const fetchEmailKeys = async () => {
//     const docRef = doc(db, "emailConfig", "emailKeys");
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { service_id, template_id, public_key } = docSnap.data();
//       return { service_id, template_id, public_key };
//     } else {
//       throw new Error("No email configuration found!");
//     }
//   };

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       if (!resumeFile) {
//         toast.error("Please upload a resume!", { position: "top-center" });
//         setSubmitting(false);
//         return;
//       }

//       const jobApplicationsRef = collection(db, "jobApplications");
//       const querySnapshot = await getDocs(
//         query(
//           jobApplicationsRef,
//           where("email", "==", values.email),
//           where("phone", "==", values.phone),
//           where("fullName", "==", values.fullName),
//           where("AppliedRole", "==", jobTitle)
//         )
//       );

//       if (!querySnapshot.empty) {
//         toast.error("You have already applied for this position.", { position: "top-center", autoClose: 3000 });
//         setSubmitting(false);
//         return;
//       }

//       const resumeRef = ref(storage, `resumes/${values.email}_${Date.now()}`);
//       await uploadBytes(resumeRef, resumeFile);
//       const resumeURL = await getDownloadURL(resumeRef);

//       const structuredData = {
//         fullName: values.fullName,
//         email: values.email,
//         phone: values.phone,
//         education: values.education,
//         totalExperience: values.totalExperience,
//         currentCTC: values.currentCTC,
//         expectedCTC: values.expectedCTC,
//         AppliedRole: jobTitle,
//         AppliedDate: Timestamp.now(),
//         resumeURL,
//       };

//       await addDoc(collection(db, "jobApplications"), structuredData);

//       const { service_id, template_id, public_key } = await fetchEmailKeys();
//       const templateParams = { ...structuredData };
//       await emailjs.send(service_id, template_id, templateParams, public_key);

//       toast.success("Application submitted successfully!", { position: "top-right", autoClose: 5000 });
//       resetForm();
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       toast.error("Failed to submit application. Please try again.", { position: "top-center", autoClose: 3000 });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className={styles.formContainer}>
//       <ToastContainer />
//       <h3 className={styles.heading}>Job Application Form</h3>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//         {({ handleSubmit, setFieldValue, isSubmitting }) => (
//           <Form onSubmit={handleSubmit}>
//             <Row>
//               <Col md={6}>
//                 <Form.Group>
//                   <Form.Label>Full Name</Form.Label>
//                   <Field type="text" name="fullName" className="form-control" />
//                   <ErrorMessage name="fullName" component="div" className={styles.errorText} />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group>
//                   <Form.Label>Email</Form.Label>
//                   <Field type="email" name="email" className="form-control" />
//                   <ErrorMessage name="email" component="div" className={styles.errorText} />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={6}>
//                 <Form.Group>
//                   <Form.Label>Phone Number</Form.Label>
//                   <Field type="tel" name="phone" className="form-control" />
//                   <ErrorMessage name="phone" component="div" className={styles.errorText} />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group>
//                   <Form.Label>Education Level</Form.Label>
//                   <Field as="select" name="education" className="form-control">
//                     <option value="">Select</option>
//                     <option value="High School">High School</option>
//                     <option value="Bachelor's Degree">Bachelors Degree</option>
//                     <option value="Master's Degree">Masters Degree</option>
//                     <option value="PhD">PhD</option>
//                   </Field>
//                   <ErrorMessage name="education" component="div" className={styles.errorText} />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Form.Group className="mt-3">
//               <Form.Label>Resume</Form.Label>
//               <input
//                 type="file"
//                 className="form-control"
//                 onChange={(e) => {
//                   setResumeFile(e.target.files[0]);
//                   setFieldValue("resume", e.target.files[0]);
//                 }}
//               />
//               <ErrorMessage name="resume" component="div" className={styles.errorText} />
//             </Form.Group>

//             <div className="d-flex justify-content-center">
//               <Button type="submit" disabled={isSubmitting} className={styles.submitButton}>
//                 {isSubmitting ? "Submitting..." : "Submit Application"}
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobApplicationForm;


'use client';

import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc, doc, getDocs, query, where, Timestamp, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import styles from './JobApplicationForm.module.css';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  education: Yup.string().required('Education level is required'),
  totalExperience: Yup.number().min(0, 'Experience cannot be negative').required('Experience is required'),
  currentCTC: Yup.number().min(0, 'CTC must be positive').required('Current CTC is required'),
  expectedCTC: Yup.number().min(0, 'Expected CTC must be positive').required('Expected CTC is required'),
  resume: Yup.mixed().required('Resume is required'),
});

const JobApplicationForm = ({ jobTitle }) => {
  const [resumeFile, setResumeFile] = useState(null);

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    education: '',
    totalExperience: '',
    currentCTC: '',
    expectedCTC: '',
    resume: null,
    AppliedDate: Timestamp.now(),
  };

  const fetchEmailKeys = async () => {
    const docRef = doc(db, 'emailConfig', 'emailKeys');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('No email configuration found!');
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (!resumeFile) {
        toast.error('Please upload a resume!', { position: 'top-center' });
        setSubmitting(false);
        return;
      }

      const jobApplicationsRef = collection(db, 'jobApplications');
      const querySnapshot = await getDocs(
        query(jobApplicationsRef, where('email', '==', values.email), where('AppliedRole', '==', jobTitle))
      );

      if (!querySnapshot.empty) {
        toast.error('You have already applied for this position.', { position: 'top-center' });
        setSubmitting(false);
        return;
      }

      const resumeRef = ref(storage, `resumes/${values.email}_${Date.now()}`);
      await uploadBytes(resumeRef, resumeFile);
      const resumeURL = await getDownloadURL(resumeRef);

      const structuredData = { ...values, AppliedRole: jobTitle, resumeURL };

      await addDoc(collection(db, 'jobApplications'), structuredData);

      const { service_id, template_id, public_key } = await fetchEmailKeys();
      await emailjs.send(service_id, template_id, structuredData, public_key);

      toast.success('Application submitted successfully!', { position: 'top-right' });

      resetForm();
      setResumeFile(null);
      document.querySelector('input[type="file"]').value = '';

    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Submission failed. Please try again.', { position: 'top-center' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <ToastContainer />
      <h3 className={styles.title}>Job Application Form</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mt-3">
                  <Form.Label>Full Name</Form.Label>
                  <Field type="text" name="fullName" className="form-control" />
                  <ErrorMessage name="fullName" component="div" className={styles.errorText} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className={styles.errorText} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mt-3">
                  <Form.Label>Phone</Form.Label>
                  <Field type="tel" name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className={styles.errorText} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mt-3">
                  <Form.Label>Education</Form.Label>
                  <Field as="select" name="education" className="form-control">
                    <option value="">Select</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelors Degree</option>
                    <option value="Master's Degree">Masters Degree</option>
                    <option value="PhD">PhD</option>
                  </Field>
                  <ErrorMessage name="education" component="div" className={styles.errorText} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>Resume</Form.Label>
              <input type="file" className="form-control" onChange={(e) => {
                setResumeFile(e.target.files[0]);
                setFieldValue('resume', e.target.files[0]);
              }} />
              <ErrorMessage name="resume" component="div" className={styles.errorText} />
            </Form.Group>

            <div className={styles.buttonContainer}>
              <Button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobApplicationForm;
