import styles from "./style.module.css";
import Image from "./../../../BaseComponents/Images/Image";

const ReviewCard = ({ style }) => {
  return (
    <div className={styles.cardContainer} style={style}>
      <div className={styles.cardText}>
        Placeholder text for the review. This is placeholder text that can be
        used for this review card
      </div>
      <div className={styles.cardAuthorContainer}>
        <div className={styles.cardAuthorDetailsContainer}>
          <Image
            src="public/images/ProfilePictures/profile.webp"
            className={styles.authorPicture}
          />
          <div>Name</div>
        </div>
        <div className={styles.productHunt}></div>
      </div>
    </div>
  );
};

export default ReviewCard;
