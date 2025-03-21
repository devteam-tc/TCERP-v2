"use client"; // Required for Next.js App Router

import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Read visit count from localStorage, default to 0
    let count = localStorage.getItem("page_view");

    if (!count) {
      localStorage.setItem("page_view", 1); // Set first-time visit
      setVisitCount(1);
    } else {
      count = Number(count);
      if (sessionStorage.getItem("visited") !== "true") {
        // Prevent multiple increments within the same session
        let newCount = count + 1;
        localStorage.setItem("page_view", newCount);
        setVisitCount(newCount);
        sessionStorage.setItem("visited", "true"); // Mark session as visited
      } else {
        setVisitCount(count);
      }
    }
  }, []); // Runs only once when the component mounts

  return (
    <div className={styles.container}>
      {/* <div>Website visit count:</div> */}
      {/* <div className={styles.counter}>{visitCount}</div> */}
    </div>
  );
}
