import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={`section ${styles['main-header']}`}>
      <nav className={styles["main-nav"]}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header