import styles from "./style.module.css";
import { useState } from "react";

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleQuestion = () =>
    setOpen((prevOpen) => {
      return !prevOpen;
    });

  return (
    <div className={styles.faqContainer} onClick={toggleQuestion}>
      <div className={styles.faqQuestionContainer}>
        <div className={styles.faqQuestion}>
          <div style={{ flexGrow: 1 }}>{question}</div>
          <div style={{ "font-size": "20px", flexShrink: 0 }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
            </svg>
          </div>
        </div>
        <div className={open ? styles.faqAnswerOpen : styles.faqAnswerHidden}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Question;
