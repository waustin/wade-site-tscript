import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioPreview from './PortfolioPreview'

type Props = {}

const PortfolioList = (props: Props) => {
  return (
    <section className={styles["portfolio-list"]}>
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
      <PortfolioPreview />
    </section>
  );
}

export default PortfolioList