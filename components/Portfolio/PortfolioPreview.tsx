import React from 'react'
import styles from './Portfolio.module.scss'

function PortfolioPreview() {
  const randomSeed = Math.floor(Math.random() * 100);
  return (
    <div className={styles["portfolio-preview"]}>
      <img src={`https://picsum.photos/600/600?random=${randomSeed}`}/>
    </div>
  );
}

export default PortfolioPreview