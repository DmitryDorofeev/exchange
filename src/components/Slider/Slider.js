import React, {useEffect, useState, useRef} from 'react';
import Slick from 'react-slick';
import styles from './Slider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slider = ({children, onChange, active = 0}) => {
  const [current, setCurrent] = useState(active);
  const slider = useRef(null);

  useEffect(() => {
    slider.current.slickGoTo(current);
  }, []);

  useEffect(() => {
    onChange(current);
  }, [current]);

  return (
    <div className={styles.root}>
      <Slick
        slidesToShow={1}
        slidesToScroll={1}
        dots
        afterChange={setCurrent}
        className={styles.slide}
        ref={slider}
      >
        {children}
      </Slick>
    </div>
  )
};