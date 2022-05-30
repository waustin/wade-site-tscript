import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Wade Austin</title>
        <meta name="description" content="Wade Austin - Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section">
        <h1 className={styles.title}>Home Page</h1>
      </main>
    
    </div>
  )
}

export default Home
