import styles from "./index.module.css";

const TertiaryButton = ({ text, handleClick, style }) => {
  return (
    <button
      className={styles.tertiaryButton}
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default TertiaryButton;
