import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, IconButton, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { caseStudiesData } from './data/caseStudiesData';
import { CaseStudy } from './components/CaseStudy';

const CaseStudyPage = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
  const currentCaseStudy = caseStudiesData.find((study) => study.id === currentId);

  const prevCase = caseStudiesData.find((study) => study.id === (currentId - 1));
  const nextCase = caseStudiesData.find((study) => study.id === (currentId + 1));

  return (
    <Container sx={{ py: '40px' }}>
      {currentCaseStudy && <CaseStudy {...currentCaseStudy} />}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        {prevCase ? 
          <Link to={`/case_study_v2/${prevCase.id}`} style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
            <IconButton color="white"><ArrowBackIos /></IconButton>
            <Typography variant="caption" style={{ color: 'white' }}>Previous: {prevCase.title}</Typography>
          </Link> : <Box></Box> // empty box to take up space when there is no previous case
        }
        {nextCase ? 
          <Link to={`/case_study_v2/${nextCase.id}`} style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
            <Typography variant="caption" style={{ color: 'white' }}>Next: {nextCase.title}</Typography>
            <IconButton color="white"><ArrowForwardIos /></IconButton>
          </Link> : <Box></Box> // empty box to take up space when there is no next case
        }
      </Box>
      <Box mt={3} display="flex" justifyContent="center">
      <Button 
  variant="contained" 
  component={props => <Link to="/case_studies" {...props} />} 
  sx={{ 
    backgroundColor: '#f27676', 
    color: 'white',
    ':hover': { 
      backgroundColor: '#50A6E1', 
      color: 'white' 
    } 
  }}
>
  Back to Cases
</Button>
      </Box>
    </Container>
  );
};

export default CaseStudyPage;
