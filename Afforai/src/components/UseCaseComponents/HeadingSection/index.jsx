import PrimaryButton from "../../BaseComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../BaseComponents/Buttons/SecondaryButton";
import styles from "./style.module.css";
import Image from "../../BaseComponents/Images/Image";

const HeadingSection = () => {
  return (
    <div className={styles.headingSectionContainer}>
      <div className={styles.headingSectionColumn}>
        <div className="container-column">
          <h1 className={`mobile-left-text ${styles.title}`}>
            You second brain for maximizing productivity
          </h1>
          <span className={`mobile-left-text ${styles.description}`}>
            Afforai is an AI chatbot that searches, summarizes, and translates
            info from multiple sources to produce trustworthy research. Feed
            lengthy research documents to stacks of dry compliance requirements
            and extract the key findings you need.
          </span>
          <div className={styles.buttonsList}>
            <PrimaryButton text={"Try for free"} />
            <SecondaryButton text={"View pricing"} />
          </div>
        </div>
        <div className={styles.headingImageContainer}>
          <Image src={"/images/Desktop/laptop-landing-1.png"} />
        </div>
        <div className={styles.backgroundImage}>
          <Image
            src={"/images/Desktop/laptop-landing-3.png"}
            className={"fill"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
