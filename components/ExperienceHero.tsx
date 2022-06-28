import React, {useState, useEffect} from 'react'
import styles from './ExperienceHero.module.scss';
import { motion } from "framer-motion";

type Props = {
  title: string,
  words: string[];
}

const ExperienceHero = (props: Props) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  function currentWord() {
    return props.words[currentWordIdx];
  }

  useEffect(() =>{
    const wordTimer = setTimeout(() => {
      setCurrentWordIdx((currentWordIdx + 1) % props.words.length);
    }, 1000);
    return () => clearTimeout(wordTimer);
  });


  return (
    <div className={styles.experienceHero}>
      <h3>{props.title}</h3>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
      >
        <span className={styles.expWord}>{currentWord()}</span>
      </motion.div>
    </div>
  );
}

export default ExperienceHero