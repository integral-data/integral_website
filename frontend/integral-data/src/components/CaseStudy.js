import React from 'react';
import { Box, Card, CardContent, Container, Paper, Typography, useTheme, Grid, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { tokens } from "../theme";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { caseStudiesData } from '../data/caseStudiesData';

const CaseStudy = ({ id, title, subheader, author, datePosted, content }) => {  
    return (
      <Container sx={{ py: '40px' }}>
        <Paper elevation={6} sx={{ padding: '30px', marginBottom: '30px' }}>
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 2 }}>
            {subheader}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 2 }}>
            By {author} | Posted on {datePosted}
          </Typography>
          <Box sx={{ my: 4 }}>
            <ReactMarkdown children={content} />
          </Box>
        </Paper>
      </Container>
    );
};

const CaseStudyOverview = ({ study }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [props, set] = useSpring(() => ({ scale: 1 }));
  
    return (
      <Link to={`/case_study_v2/${study.id}`} style={{ textDecoration: 'none' }}>
        <animated.div
          style={props}
          onMouseEnter={() => set({ scale: 1.05 })}
          onMouseLeave={() => set({ scale: 1 })}
        >
          <Card
            sx={{
              maxWidth: 345,
              height: 200,
              transition: "0.3s",
              borderRadius: "10px",
              alignSelf: "center",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent sx={{ background: "#0D1A42", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", position: "relative" }}>
              <Typography variant="h5" component="div" color="white" sx={{ mt: 2, textAlign: "center" }}>
                {study.title}
              </Typography>
              <Typography variant="body2" color={"#50A6E1"} sx={{ mt: 1, mb: 2, textAlign: "center" }}>
                {study.subheader}
              </Typography>
              <Box sx={{ position: 'absolute', right: 10, bottom: 10, zIndex: 1 }}>
                <Typography variant="caption" color="white">
                  {study.datePosted}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </animated.div>
      </Link>
    );
  };
  
  export {CaseStudy, CaseStudyOverview};
  