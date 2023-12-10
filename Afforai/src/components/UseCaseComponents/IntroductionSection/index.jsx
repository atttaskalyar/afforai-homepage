import styles from "./style.module.css";
import Image from "../../BaseComponents/Images/Image";
const IntroductionSection = () => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.introductionTextContainer}>
            <div className={styles.introductionHeading}>
              Say goodbye to long, tiresome documents
            </div>
            <div className={styles.introductionDescription}>
              Afforai seamlessly translates documents, files, spreadsheets &
              websites, filtering out what you don’t need & answering your
              specific questions within seconds.
            </div>
            <div className={styles.bulletPoints}>
              <div className={styles.bulletPoint}>
                <Image
                  src="/images/check-circle.svg"
                  className={styles.bulletImage}
                />
                <span>A whip smart research assistant</span>
              </div>
              <div className={styles.bulletPoint}>
                <Image
                  src="/images/check-circle.svg"
                  className={styles.bulletImage}
                />
                <span>A whip smart research assistant</span>
              </div>
              <div className={styles.bulletPoint}>
                <Image
                  src="/images/check-circle.svg"
                  className={styles.bulletImage}
                />
                <span>A whip smart research assistant</span>
              </div>
              <div className={styles.bulletPoint}>
                <Image
                  src="/images/check-circle.svg"
                  className={styles.bulletImage}
                />
                <span>A whip smart research assistant</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.introductionImageContainer}>
          <Image
            src={"/images/Mobile/mobile-landing-4.png"}
            className={"fill mobile"}
          />
          <Image
            src={"/images/Desktop/laptop-landing-4.png"}
            className={"fill desktop"}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
