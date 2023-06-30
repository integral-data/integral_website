import { useState, React} from 'react';
import { Box, Card, Grid, CardContent, Container, Paper, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import ReactMarkdown from 'react-markdown';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



const CaseStudy = ({ id, title, subheader, author, datePosted, content, badges }) => {
    const [isTechVisible, setTechVisibility] = useState(true);
  
    const handleTechVisibility = () => {
      setTechVisibility(!isTechVisible);
    };
  
    return (
      <Container sx={{ py: '40px' }}>
        <Paper elevation={6} sx={{ padding: '30px', marginBottom: '30px', backgroundColor: 'transparent' }}>
          <Typography variant="h3" align="left" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h6" align="left" sx={{ mb: 1, color: '#50A6E1' }}>
            {subheader}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'coral', fontSize: '0.875rem' }} align="left">
            By: {author}
          </Typography>
  
          <Grid container justifyContent="center" sx={{ cursor: 'pointer', mb: 2 }} onClick={handleTechVisibility}>
            <Grid item alignItems="center"> 
              <Typography alignItems="center" variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Tech Used
              </Typography>
            </Grid>
            <Grid item>
              {isTechVisible ? <KeyboardArrowUpIcon sx={{ ml: 1 }} /> : <KeyboardArrowDownIcon sx={{ ml: 1 }} />}
            </Grid>
          </Grid>
        
          {isTechVisible && (
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              {badges && badges.map((Badge, index) => (
                <Box key={index} mx={1}>
                  {Badge}
                </Box>
              ))}
            </Box>
          )}
  
          <Box sx={{ my: 4 }}>
            <ReactMarkdown children={content} />
          </Box>
        </Paper>
      </Container>
    );
  };




const CaseStudyOverview = ({ study }) => {
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
              height: 250,
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
              <Box display="flex" justifyContent="center" flexWrap="wrap">
                {study.badges && study.badges.map((Badge, index) => (
                  <Box key={index} mx={1}>
                    {Badge}
                  </Box>
                ))}
              </Box>
              <Box sx={{ position: 'absolute', right: 10, bottom: 10, zIndex: 1 }}>
                <Typography variant="caption" color="#f27676">
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
