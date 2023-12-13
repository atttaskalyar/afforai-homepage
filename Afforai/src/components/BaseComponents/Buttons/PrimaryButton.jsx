import styles from "./index.module.css";

const PrimaryButton = ({ text, handleClick, style }) => {
  return (
    <button
      className={styles.primaryButton}
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
