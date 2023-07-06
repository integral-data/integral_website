import {React } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import ReactMarkdown from "react-markdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = ({
  id,
  title,
  subheader,
  author,
  datePosted,
  content,
  badges,
  chips,
}) => {
  // const [isTechVisible, setTechVisibility] = useState(true);

  // const handleTechVisibility = () => {
  //   setTechVisibility(!isTechVisible);
  // };

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {subheader}
      </Typography>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Typography variant="body1" display="block" gutterBottom>
          {author} - {datePosted}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        columnGap={2}
        flexWrap="wrap"
        marginBottom={4}
      >
        {chips && chips.map((Chip, index) => Chip)}
      </Box>
      <Box>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </Box>
  );
};

const CaseStudyOverview = ({ study }) => {
  const [props, set] = useSpring(() => ({ scale: 1 }));

  return (
    <Link to={`/case_study_v2/${study.id}`} style={{ textDecoration: "none" }}>
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
          <CardContent
            sx={{
              background: "#0D1A42",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              color="white"
              sx={{ mt: 2, textAlign: "center" }}
            >
              {study.title}
            </Typography>
            <Typography
              variant="body2"
              color={"#50A6E1"}
              sx={{ mt: 1, mb: 2, textAlign: "center" }}
            >
              {study.subheader}
            </Typography>

            <Box display="flex" justifyContent="center" flexWrap="wrap">
              {study.badges &&
                study.badges.map((Badge, index) => (
                  <Box key={index} mx={1}>
                    {Badge}
                  </Box>
                ))}
            </Box>
            <Box
              sx={{ position: "absolute", right: 10, bottom: 10, zIndex: 1 }}
            >
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
export { CaseStudy, CaseStudyOverview };
