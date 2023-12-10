import TertiaryButton from "../../BaseComponents/Buttons/TertiaryButton";
import styles from "./style.module.css";

const WhyChooseUsSection = () => {
  return (
    <div className={styles.whyChooseUsSection}>
      <div className={styles.row} style={{ marginBottom: "40px" }}>
        <div className={styles.textSection}>
          <div className={styles.textContainer}>
            <TertiaryButton text={"Why choose us?"} />
            <div className={styles.heading}>Build for the user</div>
            <div className={styles.description}>
              Afforai is where exceptional customer focus meets exceptional
              technology.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row} style={{ paddingBottom: "0.5rem" }}></div>
      <div
        className={styles.row}
        style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}
      ></div>
    </div>
  );
};

export default WhyChooseUsSection;
