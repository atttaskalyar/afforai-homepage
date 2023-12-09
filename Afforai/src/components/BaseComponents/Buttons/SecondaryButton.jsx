import styles from "./index.module.css";

const SecondaryButton = ({ text, handleClick }) => {
  return (
    <button className={styles.secondaryButton} onClick={handleClick}>
      {text}
    </button>
  );
};

export default SecondaryButton;
