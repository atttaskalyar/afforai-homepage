import styles from './style.module.css'

const MovingSlider = ({duration, infinite, containerClass, children })=>{
    return <div className={`${styles.sliderContainer} ${containerClass}`} style={{ position:"relative",overflow:"hidden", whiteSpace:"nowrap", maxWidth:"inherit"}}>
        {/* <div className='slider'></div> */}
        {children}
        {children}
    </div>
}

export default MovingSlider