import styles from "./style.module.css";
import { useRef, useState, useEffect } from "react";

const DraggableMovingSlider = ({children, direction, speed, dragSpeed, containerClass}) => {

  

   //tracks the position of the X-co-ordinate where the dragging started
   const [previousPosX, setPreviousPosX] = useState();
   const [isMouseDown, setIsMouseDown] = useState(false);

   let sliderDirection;

   if(direction==="left"){
      sliderDirection=1
   }
   if(direction==="right"){
      sliderDirection=-1
   }

   const elements = useRef();


   const handleDrag = (e) => {
      if(isMouseDown){
         const offset = previousPosX - e.clientX
         elements.current.scrollLeft = (offset +previousPosX) * dragSpeed;
      }
    };

    const handleOnMouseDown = (e)=>{
         setPreviousPosX(e.clientX)
         setIsMouseDown(true)
    }





    useEffect(() => {
      let intervalId;
      if(direction==="left"){

         elements.current.scrollLeft= elements.current.scrollWidth/3;
      }
      if(direction==="right"){
         elements.current.scrollLeft =elements.current.scrollWidth/3 *2;
      }
      let elementWidth = elements.current.scrollWidth/3;

      const autoScroll = () => {
        intervalId = setInterval(
         () => {
         if(!isMouseDown){
            elements.current.scrollLeft += 1*speed * sliderDirection; 
            if(direction==="left"){
               if(elements.current.scrollLeft>=2*elementWidth){
                  elements.current.scrollLeft= elements.current.scrollWidth/3;
               }
            }
            if(direction==="right"){
               if(elements.current.scrollLeft<=elementWidth){
                  elements.current.scrollLeft =elements.current.scrollWidth/3 *2;
               }
            }
         }
        }, 10);
      };
  
      const stopAutoScroll = () => {
        clearInterval(intervalId);
      };
  
      // Start automatic scrolling by default
      autoScroll();
  
      // Clear interval on unmount or when component is not focused
      return () => {
        stopAutoScroll();
      };
    }, []);



return  <div className={styles.carouselContainer}>
    <div className={styles.carouselTrack} ref={elements} onMouseMove={handleDrag} onMouseDown={handleOnMouseDown} onMouseUp={()=>setIsMouseDown(false)} onMouseLeave={()=>setIsMouseDown(false)}> 
      <div className={styles.carouselElement}>
      {children}
      </div>
      <div className={styles.carouselElement}>
      {children}
      </div>
      <div className={styles.carouselElement}>
      {children}
      </div>
    </div>

 </div>




};

DraggableMovingSlider.defaultProps={
   direction:"left",
   speed:1,
   dragSpeed:1,
}

export default DraggableMovingSlider;
