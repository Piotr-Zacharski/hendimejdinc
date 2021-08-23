import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  arrow: {
   margin: 30,
   cursor: "pointer"
  },
}));

const ImageSlider = ({ slides }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className='slider'>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' height={350}/>
            )}
          </div>
        );
      })}
      <ArrowBackIcon onClick={prevSlide} className={classes.arrow}/>
      <ArrowForwardIcon onClick={nextSlide} className={classes.arrow}/>
    </section>
  );
};

export default ImageSlider;