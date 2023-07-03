import React from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Box, Container, Typography, useMediaQuery } from "@mui/material";
import { caseStudiesData } from "./data/caseStudiesData";
import CaseStudyCard from "./components/CaseStudyCard";
import { CaseStudy } from "./components/CaseStudy";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";

function getRandom(arr, n) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const CaseStudyPage = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
  const currentCaseStudy = caseStudiesData.find(
    (study) => study.id === currentId
  );

  const filteredCaseStudiesData = caseStudiesData.filter(
    (study) => study.id !== currentId
  );
  const randomCaseStudies = getRandom(filteredCaseStudiesData, 3);

  const prevCase = caseStudiesData.find((study) => study.id === currentId - 1);
  const nextCase = caseStudiesData.find((study) => study.id === currentId + 1);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const getContainerWidth = () => {
    // You can adjust these pixel values to better suit your needs
    if (isXs) return 300;
    if (isSm) return 400;
    if (isMd) return 900;
    if (isLg) return 1200;
    if (isXl) return 1400;
    return 300; // Default for xs and smaller
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const settings = {
    infinite: true,
    dots: true,
    dotsClass: "slick-dots",
    speed: 700,
    slidesToShow: isSmallScreen ? 1 : 3, // Show 1 slide on small screens, 3 on larger ones
    rows: 1,
    slidesToScroll: isSmallScreen ? 1 : 3,
    vertical: false,
    verticalSwiping: true,
  };

  return (
    <Container sx={{ py: "40px" }}>
      {currentCaseStudy && <CaseStudy {...currentCaseStudy} />}
      <Typography variant="h4" fontWeight={600} mt={12} mb={2}>
        Explore Other Cases
      </Typography>
      <Grid container spacing={2} direction="row" justifyContent="center">
        {randomCaseStudies.map((caseStudy) => (
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            key={caseStudy.id}
            justifySelf={"center"}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CaseStudyCard study={caseStudy} showSubtitle={0} />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Link
          to="/case_studies"
          style={{ textDecoration: "none", color: colors.greenAccent[500] }}
        >
          <Typography variant="h5"> View All Cases </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default CaseStudyPage;
