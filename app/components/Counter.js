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

    // Inject the counter script dynamically
    const script = document.createElement("script");
    script.src =
      "https://counter6.optistats.ovh/private/counter.js?c=gz378r4yj2mxwrk3wpds78kmgcnsetxf&down=async";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Runs only once when the component mounts

  return (
    <div className={styles.container}>
      {/* <div className={styles.counter}>{visitCount}</div> */}
      <div id="sfcgz378r4yj2mxwrk3wpds78kmgcnsetxf"></div>
      <noscript>
        <img
          src="https://counter6.optistats.ovh/private/freecounterstat.php?c=gz378r4yj2mxwrk3wpds78kmgcnsetxf"
          border="0"
          title="website counter"
          alt="website counter"
        />
      </noscript>
    </div>
  );
}
