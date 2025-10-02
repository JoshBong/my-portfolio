import React from 'react';
import { useRouter } from 'next/router';
import styles from './cover.module.css';

export default function Cover() {
  return (
    <div className={`${styles.bookVariables} ${styles.bookContainer}`}>
      <div className={styles.book}>
      <div className={styles.bookCover}>
          <img src="/temp.png" alt="The Code Cookbook" className={styles.coverImage} />
        </div>
      </div>
    </div>
  );
}
