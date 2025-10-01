import React from 'react';
import styles from './Cover.module.css';

export default function Cover() {
  return (
    // 2. Access the class name on the 'styles' object.
    <div className={styles.BookCover}>
      {/* Content goes here */}
    </div>
  );
}