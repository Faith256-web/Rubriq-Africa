"use client"; // This component runs on the client side

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This component tracks user inactivity and automatically logs them out
export default function IdleTimeout({ timeoutMinutes = 5 }) {
  const router = useRouter();

  useEffect(() => {
    let timeoutId;

    // Function to handle logout after idle time
    const handleLogout = async () => {
      try {
        // Call the API endpoint to clear the authentication cookie
        await fetch("/api/auth/logout", { method: "POST" });
        // Redirect the user to the login page
        router.push("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    // Function to reset the idle timer whenever the user interacts
    const resetTimer = () => {
      // Clear the previous timer
      if (timeoutId) clearTimeout(timeoutId);
      // Set a new timer
      // timeoutMinutes * 60 seconds * 1000 milliseconds
      timeoutId = setTimeout(handleLogout, timeoutMinutes * 60 * 1000);
    };

    // List of events that represent user activity
    const events = ["mousemove", "keydown", "click", "scroll"];

    // Attach event listeners to the window to detect activity
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Initialize the timer when the component mounts
    resetTimer();

    // Cleanup function: runs when the component unmounts to prevent memory leaks
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [router, timeoutMinutes]);

  // This component doesn't render anything visible
  return null;
}
