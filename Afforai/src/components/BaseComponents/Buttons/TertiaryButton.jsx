import styles from "./index.module.css";

const TertiaryButton = ({ text, handleClick }) => {
  return (
    <button className={styles.tertiaryButton} onClick={handleClick}>
      {text}
    </button>
  );
};

export default TertiaryButton;
