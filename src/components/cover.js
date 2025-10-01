import React from 'react';
import { useRouter } from 'next/router';
import styles from './Cover.module.css';

export default function Cover() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/project');
  };

  return (
    // 2. Access the class name on the 'styles' object.
    <div className={styles.bookCover} onClick={handleClick}>
      {/* 3. Use the class name in the JSX */}
      <div className={styles.bookTitle}>The Code Cookbook</div>
      <div className={styles.bookAuthor}>By Joshua Huang</div>
      <div className={styles.bookDescription}>
        A personal portfolio of my projects and experiences.
      </div>
    </div>
  );
}