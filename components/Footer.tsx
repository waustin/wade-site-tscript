import React from 'react'
import styles from './Footer.module.scss'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className={`section ${styles.mainFooter}`}>
      This is the Footer
      <p className={styles.copyright}>{new Date().getFullYear()}</p>
    </footer>
  );
}