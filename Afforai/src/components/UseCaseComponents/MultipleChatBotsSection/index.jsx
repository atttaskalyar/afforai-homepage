import PrimaryButton from "../../BaseComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../BaseComponents/Buttons/SecondaryButton";
import TertiaryButton from "../../BaseComponents/Buttons/TertiaryButton";
import Image from "../../BaseComponents/Images/Image";
import styles from "./styles.module.css";

const MultipleChatBotsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.textSection}>
          <div className={styles.textContainer}>
            <TertiaryButton text={"Most versatile"} />
            <div className={styles.heading}>
              Create multiple chatbots for different purposes
            </div>
            <div className={styles.description}>
              Legal documents? Summarising a book? Extracting data from a
              website? We allow you to create multiple chatbots at one time, so
              you can use Afforai for a whole range of purposes.
            </div>
            <div className={`desktop ${styles.buttonList}`}>
              <PrimaryButton text={"Get started"} />
              <SecondaryButton text="View Pricing" />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/Mobile/mobile-landing-11.png"}
            className={"fill mobile"}
          />
          <Image
            src={"/images/Desktop/laptop-landing-11.png"}
            className={"fill desktop"}
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleChatBotsSection;
