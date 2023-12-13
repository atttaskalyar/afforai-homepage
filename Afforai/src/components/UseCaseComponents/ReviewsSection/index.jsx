import styles from "./style.module.css";
import DraggableMovingSlider from "../DraggableMovingSlider";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <div className={styles.container}>
      <DraggableMovingSlider
        direction={"right"}
        containerClass={styles.carouselContainer}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </DraggableMovingSlider>

      <DraggableMovingSlider direction={"left"}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </DraggableMovingSlider>
    </div>
  );
};

export default ReviewSection;
