// app/layout.tsx
import Link from "next/link";
import "./globals.css"; // Global styles
import styles from '../styles/Layout.module.css'; // Import CSS Module


import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <main>{children}</main>
        <footer>
          <p>In Amber - &copy; 2025</p>
        </footer>
      </body>
    </html>
  );
}
