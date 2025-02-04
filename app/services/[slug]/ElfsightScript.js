"use client"; // This ensures the component runs on the client

import { useEffect } from "react";

export default function ElfsightScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "true");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component only loads the script and doesn't render anything
}
