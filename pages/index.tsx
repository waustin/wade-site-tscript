import type { NextPage } from 'next'
import Head from 'next/head'
import ExperienceHero from '../components/ExperienceHero'
import Footer from '../components/Footer'

import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
  const experiences = [
      "Javascript",
      "Vue",
      "React",
      "Next",
      "Nuxt",
      "PHP",
      "Laravel",
      "Wordpress",
      "Python",
      "Django",
      "Postgres",
      "MySQL",
      "HTML",
      "CSS/SASS"
  ];
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Wade Austin</title>
        <meta name="description" content="Wade Austin - Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section">
        <div className="columns">
          <div className="column is-three-quarters">
            <h1 className={styles.title}>Wade Austin</h1>
            <h2 className={styles.tagLine}>Software Developer</h2>
            <h2 className={styles.tagLine}>
              Currently: Director of Development @ <a href="http://few.io" target="_blank">Few</a>
            </h2>
            <div>
              <img src="https://www.amazon.com/photos/shared/C0tjmL99RQWigB6t4gVOzA.CGObH0WSHMNDO4PU1Z7m4j" />
            </div>
          </div>
          <div className="column">
            <ExperienceHero title="Experience With:" words={experiences} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home
