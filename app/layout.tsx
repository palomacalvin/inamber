// app/layout.tsx
"use client"; // Mark this as a client-side component

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css"; // Global styles
import styles from '../styles/Layout.module.css'; // Import CSS Module
import LoadingScreen from "../components/LoadingScreen"; // Import the LoadingScreen component

export default function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 3 seconds or until assets are ready
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loading screen after 3 seconds (for testing)
    }, 3000); // Adjust time as needed for actual assets loading

    return () => {
      clearTimeout(timeout); // Clean up timeout when the component is unmounted
    };
  }, []);

  return (
    <html lang="en">
      <body className={styles.layout}>
        {loading && <LoadingScreen />} {/* Show loading screen while loading */}
        <main>{children}</main>
        <footer>
          <p>In Amber - &copy; 2025</p>
        </footer>
      </body>
    </html>
  );
}
