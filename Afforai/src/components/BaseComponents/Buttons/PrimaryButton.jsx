import styles from "./index.module.css";

const PrimaryButton = ({ text, handleClick }) => {
  return (
    <button className={styles.primaryButton} onClick={handleClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
