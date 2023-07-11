import { React } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const CaseStudyCard = ({ study, showSubtitle, size }) => {
  const [props, set] = useSpring(() => ({ scale: 1 }));

  return (
    <Link to={`/case_study_v2/${study.id}`} style={{ textDecoration: "none" }}>
      <animated.div
        style={props}
        onMouseEnter={() => set({ scale: 1.02 })}
        onMouseLeave={() => set({ scale: 1 })}
      >
        <Paper
          sx={{
            maxWidth: 345,
            height: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "0.3s",
            borderRadius: "10px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
              transform: "scale(1.05)",
            },
            background: "rgba(13, 26, 66, 0.7)", // Make the background see-through
            padding: "20px",
            color: "#ffffff",
          }}
        >
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              mb: 3 // Add some margin to the bottom
            }}
          >
            <Typography variant="caption" color="white">
              {study.categories && study.categories.join(", ")}
            </Typography>
            <Typography variant="caption" style={{ color: "#AAF0C1" }}>
              {study.datePosted}
            </Typography>
          </Box>
          
          <Box sx={{ height: "30%" }}>
            <Typography
              variant="h4"
              component="div"
              color="white"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {study.title}
            </Typography>
          </Box>
          
          {showSubtitle !== 0 && (
            <Box sx={{ height: "20%" }}>
              <Typography variant="body1" color="white">
                {study.subheader}
              </Typography>
            </Box>
          )}
          
          <Box sx={{ height: "40%" }}>
            <Typography variant="body1" color="secondary" mb={2} textAlign={'center'}>
              Tech Stack
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              sx={{ mb: 2 }}
            >
              {study.badges &&
                study.badges.map((Badge, index) => (
                  <Box key={index} mx={1}>
                    {Badge}
                  </Box>
                ))}
            </Box>
          </Box>
        </Paper>
      </animated.div>
    </Link>
  );
};

export default CaseStudyCard;
