// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { auth } from "../firebaseConfig";
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const LoginForm = () => {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const auth = getAuth();
//  // Function to initialize reCAPTCHA
//  const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//         size: "invisible", // Change to "normal" if you want a visible checkbox
//         callback: (response) => {
//           console.log("reCAPTCHA solved:", response);
//         },
//         "expired-callback": () => {
//           console.error("reCAPTCHA expired. Please try again.");
//         },
//       });
//       window.recaptchaVerifier.render();
//     }
//   };

//   const formatPhoneNumber = (phone) => {
//     if (!phone) {
//       throw new Error("Phone number is required!");
//     }
  
//     // Ensure phone is a string
//     phone = String(phone).trim();
  
//     // Validate phone number format (must start with "+")
//     if (!/^\+\d{10,15}$/.test(phone)) {
//       throw new Error("Invalid phone number format. It must start with '+' followed by the country code and number.");
//     }
  
//     return phone;
//   };
  
  
//   const handleSendOtp = async (phone) => {
//     try {
//       const formattedPhone = formatPhoneNumber(phone);
  
//       setupRecaptcha();
//       const appVerifier = window.recaptchaVerifier;
  
//       const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
//       window.confirmationResult = confirmationResult;
//       alert("OTP sent successfully!");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Error sending OTP: " + error.message);
//     }
//   };
  
  

//   const handleVerifyOtp = async () => {
//     if (!otp || !confirmationResult) return alert("Enter the OTP.");
//     setLoading(true);

//     try {
//       await confirmationResult.confirm(otp);
//       alert("Login successful!");
//       router.push("/admin");
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Invalid OTP. Try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login with OTP</h2>
//       <div>
//         {!confirmationResult ? (
//           <>
//             <input
//               type="text"
//               className="form-control mb-3"
//               placeholder="Enter phone number (e.g., +1234567890)"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={() => handleSendOtp(phone)} disabled={loading}>
//                 {loading ? "Sending..." : "Send OTP"}
//                 </button>

//           </>
//         ) : (
//           <>
//             <input
//               type="text"
//               className="form-control mb-3"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button className="btn btn-success" onClick={handleVerifyOtp} disabled={loading}>
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </>
//         )}
//       </div>
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };

// export default LoginForm;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import styles from "./LoginForm.module.css";

const TEST_PHONE = "+1234567890";
const TEST_OTP = "123456";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/admin"); // ✅ Replace to prevent going back to login
    }
  }, [isAuthenticated, router]);

  const handleSendOtp = () => {
    setError("");
    setLoading(true);
    if (phone.trim() === TEST_PHONE) {
      setConfirmationResult(true);
      alert("Test OTP sent successfully! Use 123456");
    } else {
      setError("Invalid test number. Use +1234567890");
    }
    setLoading(false);
  };

  const handleVerifyOtp = () => {
    if (otp === TEST_OTP) {
      alert("Login successful!");
      dispatch(login());
      sessionStorage.setItem("isAuthenticated", "true");
      router.replace("/admin");
    } else {
      setError("Invalid OTP. Use 123456");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login with OTP</h2>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.formGroup}>
        {!confirmationResult ? (
          <>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter test phone number: +1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className={styles.button} onClick={handleSendOtp} disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter test OTP: 123456"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className={styles.button} onClick={handleVerifyOtp} disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
