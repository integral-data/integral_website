import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { caseStudiesData } from './data/caseStudiesData';
import { CaseStudy } from './components/CaseStudy';

const CaseStudyPageCarousel = () => {
  const { id } = useParams();
  const initialSlide = caseStudiesData.findIndex((study) => study.id === parseInt(id));
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const prevCase = caseStudiesData[(currentSlide - 1 + caseStudiesData.length) % caseStudiesData.length];
  const nextCase = caseStudiesData[(currentSlide + 1) % caseStudiesData.length];

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
        <Typography variant="caption">{nextCase && nextCase.title}</Typography>
        
      </Box>
    ),
    prevArrow: (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <Typography variant="caption">{prevCase && prevCase.title}</Typography>
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
      <Box display="flex" justifyContent="space-between">
        {prevCase && 
          <Link to={`/case_study/${prevCase.id}`} style={{textDecoration: 'none'}}>
            <ArrowBackIos />
            <Typography variant="caption" style={{ color: 'white' }}>{prevCase.title}</Typography>

          </Link>}
        {nextCase && 
          <Link to={`/case_study/${nextCase.id}`} style={{textDecoration: 'none'}}>
            <Typography variant="caption" style={{ color: 'white' }}>{nextCase.title}</Typography>
            <ArrowForwardIos />

          </Link>}
      </Box>
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
