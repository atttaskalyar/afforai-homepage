import styles from "./index.module.css";

const PrimaryButton = ({ text, handleClick, width, height }) => {
  return (
    <button className={styles.primaryButton} onClick={handleClick} style={{width:width, height:height}}>
      {text}
    </button>
  );
};

export default PrimaryButton;
