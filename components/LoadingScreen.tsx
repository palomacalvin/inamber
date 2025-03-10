// components/LoadingScreen.tsx
"use client"; // Mark this as a client-side component

import styles from '../styles/LoadingScreen.module.css'; // Import CSS module

const LoadingScreen = () => {
  return (
    <div className={styles['loading-screen']}>
      <p>Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;
