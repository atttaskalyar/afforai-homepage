import styles from "./style.module.css";

const ReviewCard = ({ style }) => {
  return (
    <div className={styles.cardContainer} style={style}>
      <div className={styles.cardText}>
        Placeholder text for the review. This is placeholder text that can be
        used for this review card
      </div>
      <div className={styles.cardAuthorContainer}></div>
    </div>
  );
};

export default ReviewCard;
