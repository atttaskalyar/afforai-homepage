import styles from "./style.module.css";
import Image from "../../BaseComponents/Images/Image";
const LovedBySection = () => {
  return (
    <div className={styles.lovedBySectionContainer}>
      <div className={styles.lovedByStatement}>
        Loved by <span style={{ color: "rgb(128, 54, 255)" }}>20000+</span>{" "}
        users around the world
      </div>
      <Image
        src={"/images/Desktop/laptop-landing-2.png"}
        className={`fill ${styles.lovedByImage}`}
      />
    </div>
  );
};

export default LovedBySection;
