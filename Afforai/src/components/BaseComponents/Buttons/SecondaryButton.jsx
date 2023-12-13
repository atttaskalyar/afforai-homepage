import styles from "./index.module.css";

const SecondaryButton = ({ text, handleClick, style }) => {
  return (
    <button
      className={styles.secondaryButton}
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
