import PrimaryButton from "../../BaseComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../BaseComponents/Buttons/SecondaryButton";
import styles from "./style.module.css";
import Image from "../../BaseComponents/Images/Image";
import TagPoint from "./TagPoint";
import MovingSlider from "../MovingSlider";

const HeadingSection = () => {
  return (
    <div className={styles.headingSectionContainer}>
      <div className={styles.headingSectionColumn}>
        <div className="container-column" style={{ zIndex: 2 }}>
          <h1 className={`mobile-left-text ${styles.title}`}>
            You second brain for maximizing productivity
          </h1>
          <span className={`mobile-left-text ${styles.description}`}>
            Afforai is an AI chatbot that searches, summarizes, and translates
            info from multiple sources to produce trustworthy research. Feed
            lengthy research documents to stacks of dry compliance requirements
            and extract the key findings you need.
          </span>
          <div className="mobile">
            <MovingSlider containerClass={`mobile ${styles.sliderMobile}`}>
              <div className={`${styles.tagPointList}`}>
                <TagPoint text={"Summarize Key Findings"} />
                <TagPoint text={"Compare Between Documents"} />
                <TagPoint text={"Search For Answers"} />
                <TagPoint text={"Ask in Any Language"} />
              </div>
            </MovingSlider>
          </div>

          <div className="desktop">
            <div className={`${styles.tagPointList}`}>
              <TagPoint text={"Summarize Key Findings"} />
              <TagPoint text={"Compare Between Documents"} />
              <TagPoint text={"Search For Answers"} />
              <TagPoint text={"Ask in Any Language"} />
            </div>
          </div>

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
