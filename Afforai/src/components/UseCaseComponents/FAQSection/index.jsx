import Question from "./Question";
import styles from "./style.module.css";
import { Questions } from "./Question/constants";

const FAQSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowPadding}>
          <div className={styles.textContainer}>
            <div className={styles.heading}>FAQ</div>
            <div className={styles.description}>
              For more information check out our{" "}
              <a
                href="#"
                style={{
                  color: "rgb(96, 4, 255)",
                  textDecoration: "underline",
                }}
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.questionsList}>
        {Questions.map((question, index) => {
          return (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;

{
  /* <div>
For more information check out our <a href='#'>Help Center</a>
</div> */
}
