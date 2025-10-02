import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './cover.module.css';

export default function Cover({ onBookOpening }) {
  const router = useRouter();
  const [isTurning, setIsTurning] = useState(false);
  
  const handleClick = () => {
     setIsTurning(true);
     // onBookOpening(); // Trigger background animation
     
     // Commented out for animation testing
     // setTimeout(() => {
     //   router.push('/projects');
     // }, 1500); // Wait for page turn animation to complete
   };
  
  return (
    <div className={`${styles.bookVariables} ${styles.bookContainer}`}>
      <div 
        className={`${styles.book} ${isTurning ? styles.pageTurn + ' ' + styles.pageVisible : ''}`} 
        onClick={handleClick}
      >
        <div className={styles.bookCover}>
          <img src="/temp.png" alt="The Code Cookbook" className={styles.coverImage} />
        </div>
        <div className={styles.pageBack}>
          <img src="/temp.png" alt="The Code Cookbook" className={styles.coverImage} />
        </div>
      </div>
    </div>
  );
}
