import React from 'react'
import styles from './Portfolio.module.scss'

function PortfolioPreview() {
  const randomSeed = Math.floor(Math.random() * 100);
  return (
    <div className={styles["portfolio-preview"]}>
      <img src={`https://picsum.photos/600/600?random=${randomSeed}`} alt="" />
      <div className={styles["overlay"]}>
        <h4>Photo Name</h4>
        <a
          className="link"
          href="http://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
}

export default PortfolioPreview