import React from 'react';
import styles from './style.module.css'; // Import the CSS file for TagPoint styles

const TagPoint = ({ svg, text }) => {
  return (
    <div className={styles.tagPointContainer}>
      <div className={styles.tagPointSvg}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="check">
        <path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path>
      </g>
    </svg>
      </div>
      <span className={styles.tagPointText}>{text}</span>
    </div>
  );
};

export default TagPoint;
