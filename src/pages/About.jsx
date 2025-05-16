import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <h2>About</h2>

      <img className={styles.logoImg} src="src\assets\logo.jpg" alt="logo" />

      <div className={styles.logoText}>
        <p>
          TheQuizz API is a knowledge quiz focusing on computer science as a
          proof of concept. In the future, the quiz can be expanded to cover
          other scientific topics, and possibly include riddles that can be
          solved individually. The goal is to create a fun and engaging quiz
          format that can be used in social settings, such as an activity for a
          cozy evening.
        </p>
        <p>
          It is designed to be played using a single device (mobile/computer)
          for the quiz, not multiple.
        </p>
        <p>
          Once the proof of concept is completed, more categories will be added.
        </p>
        <a href="https://github.com/mrPrimeBeef/TheQuizzAPI">
          <p className={styles.repo}>
            https://github.com/mrPrimeBeef/TheQuizzAPI
          </p>
        </a>
        <a href="https://thequizzapi.sem2.dk/api/routes">
          <p className={styles.repo}>
            https://thequizzapi.sem2.dk/api/routes
          </p>
        </a>
      </div>
      <div className={styles.mockupSection}>
        <h2>Fast mock-up</h2>
        <img
          className={styles.mockup}
          src="src/assets/SienceQuiz.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
