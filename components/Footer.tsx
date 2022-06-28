import React from 'react'
import styles from './Footer.module.scss'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className={`section ${styles.mainFooter}`}>
      <nav className={styles.footerNav}>
        <a href="https://github.com/waustin" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/wadeaustin/" target="_blank">LinkedIn</a>
      </nav>
      <p className={styles.copyright}>{new Date().getFullYear()}</p>
    </footer>
  );
}