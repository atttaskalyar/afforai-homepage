import styles from "./style.module.css";
import TertiaryButton from "../../BaseComponents/Buttons/TertiaryButton";
import Image from "../../BaseComponents/Images/Image";
const SaveYourselfSection = () => {
  return (
    <div className={styles.saveYourselfContainer}>
      <div className={styles.row}>
        <div className={styles.rowInner}>
          <div className={styles.column}>
            <TertiaryButton text={"10x your productivity"} />
            <div className={styles.heading}>
              Save yourself from stress & streamline your workflow
            </div>
            <div className={styles.description}>
              The average worker spends 9 hours per week looking through &
              gathering information from thick stacks of documents. With
              Afforai, you can save yourself 8 hours per week (plus a lot of
              headaches).
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/Mobile/mobile-landing-5.png"}
            className={"fill mobile"}
          />
          <Image
            src={"/images/Desktop/laptop-landing-5.png"}
            className={"fill desktop"}
          />
        </div>
      </div>
    </div>
  );
};

export default SaveYourselfSection;
