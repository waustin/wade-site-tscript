import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Wade Austin</title>
        <meta name="description" content="Wade Austin - Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section">
        <h1 className={styles.title}>Wade Austin</h1>
        <h2 className={styles.tagLine}>Director of Development</h2>
        <div>
          <img src="https://www.amazon.com/photos/shared/C0tjmL99RQWigB6t4gVOzA.CGObH0WSHMNDO4PU1Z7m4j" />
        </div>
      </main>
    </div>
  );
}

export default Home
