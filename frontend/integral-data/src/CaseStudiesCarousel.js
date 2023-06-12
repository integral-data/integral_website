import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, IconButton, Typography } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { caseStudiesData } from './data/caseStudiesData';
import { CaseStudy } from './components/CaseStudy';

// Custom arrow component for Carousel
const Arrow = (props) => {
  const { className, style, onClick, direction } = props;
  return (
    <IconButton
      className={className}
      style={{ ...style, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      onClick={onClick}
    >
      {direction === 'left' ? <ArrowBackIos /> : <ArrowForwardIos />}
    </IconButton>
  );
};


const CaseStudyPageCarousel = () => {
  const { id } = useParams();
  const initialSlide = caseStudiesData.findIndex((study) => study.id === parseInt(id));
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    initialSlide: initialSlide,
    afterChange: current => setCurrentSlide(current),
    nextArrow: (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        {/* <Typography variant="caption">{caseStudiesData[(currentSlide + 1) % caseStudiesData.length].title}</Typography> */}
        <Typography variant="caption" color="white">{caseStudiesData[(currentSlide + 1) % caseStudiesData.length].title}</Typography>

        {/* <IconButton><ArrowForwardIos /></IconButton> */}
      </Box>
    ),
    prevArrow: (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        {/* <Typography variant="caption">{caseStudiesData[(currentSlide - 1 + caseStudiesData.length) % caseStudiesData.length].title}</Typography> */}
        <Typography variant="caption" color="white">{caseStudiesData[(currentSlide - 1) % caseStudiesData.length].title}</Typography>
        {/* <IconButton><ArrowBackIos /></IconButton> */}
      </Box>
    ),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <Container sx={{ py: '40px' }}>
      <Slider {...settings}>
        {caseStudiesData.map((study) => (
          <div key={study.id}>
            <CaseStudy {...study} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default CaseStudyPageCarousel;
