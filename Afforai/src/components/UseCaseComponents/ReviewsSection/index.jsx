import styles from './style.module.css'
import DraggableMovingSlider from '../DraggableMovingSlider'

const ReviewSection = ()=>{
    return <div className={styles.container}>
         <DraggableMovingSlider direction={"right"} containerClass={styles.carouselContainer}>
      <div style={{color:"red"}}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      </DraggableMovingSlider>

      <DraggableMovingSlider direction={"left"}>
      <div style={{color:"red"}}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      </DraggableMovingSlider>
    </div>
}


export default ReviewSection