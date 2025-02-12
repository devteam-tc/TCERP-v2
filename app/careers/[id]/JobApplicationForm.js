

// import { useState } from 'react';
// import { Form, Button, Col, Row } from 'react-bootstrap';
// import { db, storage } from '../../firebaseConfig';
// import { collection, addDoc, doc, getDocs, query, where, Timestamp, getDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik';
// import * as Yup from 'yup';
// import emailjs from '@emailjs/browser';
// import styles from './JobApplicationForm.module.css';

// const validationSchema = Yup.object({
//   fullName: Yup.string().required('Full Name is required'),
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
//   education: Yup.string().required('Education level is required'),
//   totalExperience: Yup.number().min(0, 'Years of experience cannot be negative').required('Total Years of Work Experience is required'),
//   currentCTC: Yup.number().min(0, 'CTC must be a positive value').required('Current CTC is required'),
//   expectedCTC: Yup.number().min(0, 'Expected CTC must be a positive value').required('Expected CTC is required'),
//   resume: Yup.mixed().required('Resume is required'),
// });

// const JobApplicationForm = ({ jobTitle }) => {
//   const [resumeFile, setResumeFile] = useState(null);

//   const initialValues = {
//     fullName: '',
//     email: '',
//     phone: '',
//     education: '',
//     totalExperience: '',
//     currentCTC: '',
//     expectedCTC: '',
//     resume: null,
//     AppliedDate: Timestamp.now(),
//   };

//   const fetchEmailKeys = async () => {
//     const docRef = doc(db, "emailConfig", "emailKeys");
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       return docSnap.data();
//     } else {
//       throw new Error("No email configuration found!");
//     }
//   };

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       if (!resumeFile) {
//         toast.error('Please upload a resume!', { position: 'top-center' });
//         setSubmitting(false);
//         return;
//       }
      
//       const jobApplicationsRef = collection(db, 'jobApplications');
//       const querySnapshot = await getDocs(
//         query(
//           jobApplicationsRef,
//           where('email', '==', values.email),
//           where('phone', '==', values.phone),
//           where('fullName', '==', values.fullName),
//           where('AppliedRole', '==', jobTitle)
//         )
//       );
      
//       if (!querySnapshot.empty) {
//         toast.error('You have already applied for this position.', { position: 'top-center', autoClose: 3000 });
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
      
//       await addDoc(collection(db, 'jobApplications'), structuredData);
      
//       const { service_id, template_id, public_key } = await fetchEmailKeys();
//       const templateParams = { ...structuredData };
//       await emailjs.send(service_id, template_id, templateParams, public_key);
      
//       toast.success('Application submitted successfully!', { position: 'top-right', autoClose: 5000 });
      
//       resetForm();
//       setResumeFile(null);
//       document.querySelector('input[type="file"]').value = '';
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       toast.error('Failed to submit application. Please try again.', { position: 'top-center', autoClose: 3000 });
//     } finally {
//       setSubmitting(false);
//     }
//   };
  
//   return (
//     <div className={styles.formContainer}>
//       <ToastContainer />
//       <h3 className={`${styles.textCenter} mt-3 mb-3`}>Job Application Form</h3>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//         {({ setFieldValue, isSubmitting }) => (
//           <FormikForm>
//             <Row>
//               <Col md={6}><Field name="fullName" type="text" placeholder="Full Name" className="form-control" /></Col>
//               <Col md={6}><Field name="email" type="email" placeholder="Email" className="form-control" /></Col>
//             </Row>
//             <Row>
//               <Col md={6}><Field name="phone" type="tel" placeholder="Phone Number" className="form-control" /></Col>
//               <Col md={6}><Field name="education" as="select" className="form-control"><option value="">Select</option><option>High School</option><option>Bachelors</option><option>Masters</option><option>PhD</option></Field></Col>
//             </Row>
//             <Row>
//               <Col md={4}><Field name="totalExperience" type="number" placeholder="Experience" className="form-control" /></Col>
//               <Col md={4}><Field name="currentCTC" type="number" placeholder="Current CTC" className="form-control" /></Col>
//               <Col md={4}><Field name="expectedCTC" type="number" placeholder="Expected CTC" className="form-control" /></Col>
//             </Row>
//             <input type="file" onChange={(e) => { setResumeFile(e.target.files[0]); setFieldValue('resume', e.target.files[0]); }} />
//             <Button type="submit" disabled={isSubmitting} className={styles.submitButton}>Submit</Button>
//           </FormikForm>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobApplicationForm;


import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc, doc, getDocs, query, where, Timestamp, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import styles from './JobApplicationForm.module.css';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  education: Yup.string().required('Education level is required'),
  totalExperience: Yup.number().min(0, 'Years of experience cannot be negative').required('Total Years of Work Experience is required'),
  currentCTC: Yup.number().min(0, 'CTC must be a positive value').required('Current CTC is required'),
  expectedCTC: Yup.number().min(0, 'Expected CTC must be a positive value').required('Expected CTC is required'),
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
    const docRef = doc(db, "emailConfig", "emailKeys");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("No email configuration found!");
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
        query(
          jobApplicationsRef,
          where('email', '==', values.email),
          where('phone', '==', values.phone),
          where('fullName', '==', values.fullName),
          where('AppliedRole', '==', jobTitle)
        )
      );
      
      if (!querySnapshot.empty) {
        toast.error('You have already applied for this position.', { position: 'top-center', autoClose: 3000 });
        setSubmitting(false);
        return;
      }
      
      const resumeRef = ref(storage, `resumes/${values.email}_${Date.now()}`);
      await uploadBytes(resumeRef, resumeFile);
      const resumeURL = await getDownloadURL(resumeRef);
      
      const structuredData = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        education: values.education,
        totalExperience: values.totalExperience,
        currentCTC: values.currentCTC,
        expectedCTC: values.expectedCTC,
        AppliedRole: jobTitle,
        AppliedDate: Timestamp.now(),
        resumeURL,
      };
      
      await addDoc(collection(db, 'jobApplications'), structuredData);
      
      const { service_id, template_id, public_key } = await fetchEmailKeys();
      const templateParams = { ...structuredData };
      await emailjs.send(service_id, template_id, templateParams, public_key);
      
      toast.success('Application submitted successfully!', { position: 'top-right', autoClose: 5000 });
      
      resetForm();
      setResumeFile(null);
      document.querySelector('input[type="file"]').value = '';
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.', { position: 'top-center', autoClose: 3000 });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className={styles.formContainer}>
      <ToastContainer />
      <h3 className="text-center mt-3 mb-5" style={{color: '#ef5226'}}>Job Application Form</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting }) => (
          <FormikForm>
            <Row className="mb-3">
              <Col md={6}>
                <label>Full Name</label>
                <Field name="fullName" type="text" className="form-control" placeHolder="Enter Full Name"/>
              </Col>
              <Col md={6}>
                <label>Email</label>
                <Field name="email" type="email" className="form-control" placeHolder="Enter Email"/>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <label>Phone Number</label>
                <Field name="phone" type="tel" className="form-control" placeHolder="Enter Phone Number"/>
              </Col>
              <Col md={6}>
                <label>Education Level</label>
                <Field name="education" as="select" className="form-control">
                  <option value="">Select</option>
                  <option>High School</option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                  <option>PhD</option>
                </Field>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <label>Total Experience</label>
                <Field name="totalExperience" type="number" className="form-control" placeHolder="Enter Total Experience in Years"/>
              </Col>
              <Col md={4}>
                <label>Current CTC</label>
                <Field name="currentCTC" type="number" className="form-control" placeHolder="Enter Current CTC"/>
              </Col>
              <Col md={4}>
                <label>Expected CTC</label>
                <Field name="expectedCTC" type="number" className="form-control" placeHolder="Enter Expected CTC"/>
              </Col>
            </Row>

            <div className="mb-4">
  <label className="form-label fw-bold">Upload Resume</label>
  <div className="input-group">
    <input 
      type="file" 
      className="form-control p-2 border rounded" 
      onChange={(e) => { 
        setResumeFile(e.target.files[0]); 
        setFieldValue('resume', e.target.files[0]); 
      }} 
    />
  </div>
</div>

<Button 
  type="submit" 
  disabled={isSubmitting} 
  className={`${styles.submitButton} btn btn-primary fw-bold px-4 py-2`}
>
  Submit Application
</Button>

            {/* <label>Upload Resume</label>
            <input type="file" className="mb-3" onChange={(e) => { setResumeFile(e.target.files[0]); setFieldValue('resume', e.target.files[0]); }} />
            <Button type="submit" disabled={isSubmitting} className={styles.submitButton}>Submit</Button> */}
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default JobApplicationForm;
