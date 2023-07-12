import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Button } from "./components/ButtonElements";
import {
  ArrowForward,
  ArrowRight,
} from "../src/components/HeroSection/HeroElements";
import { caseStudiesData } from "./data/caseStudiesData";
import CaseStudyCard from "./components/CaseStudyCard";
import { CaseStudy } from "./components/CaseStudy";
import { useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const IntegralPhiliosophy = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
//   const currentCaseStudy = caseStudiesData.find(
//     (study) => study.id === currentId
//   );

  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const filteredCaseStudiesData = caseStudiesData.filter(
    (study) => study.id !== currentId
  );

  // eslint-disable-next-line
  const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };
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

  const data_philio =   {
    id: 9,
    title: "Integral Data Can Help You Rethink Analytics",
    subheader: "We believe we can be the data & analytics partner you need and help you save money.",
    content: `## Our Value Proposition

Our team of consultants brings more than a decade of experience to every project. This isn’t just about expertise—it’s about delivering actionable insights and results. When you're considering building an in-house analytics team, you’re not just looking for staff—you’re looking for knowledge, for insights, for data-driven strategies. That’s where we come in.

## The Flexibility of Our Approach

With us, you gain flexible access to experts who strive to understand your data as deeply as you do. This is not a one-size-fits-all service but an agile, responsive team that adapts to your needs. Our team provides you with the ability to quickly scale up when you need deep dives into your data and scale down during periods of maintenance or slower growth. 

# In House Analytics - Is It The Right Choice?
## Exploring the Motivations Behind Building an In-House Team
As seasoned veterans of analytics operations at major companies, we've had front-row seats to the pros and cons of maintaining an in-house analytics team. It's natural to want full control over your analytics process by bringing everything in-house. However, it's vital to ask - what's the ultimate goal? If it's impactful results you're after, we can deliver those at a fraction of the cost of setting up and running an in-house team.

## The Reality of In-House Teams

Having worked within Fortune 500 analytics shops, we know first-hand that supporting an in-house team doesn't always equate to full-time work. Initial setup may be intensive, but once the system is automated, the focus shifts to maintenance, feature requests, and incremental improvements. This may not call for a full-time team unless your report suite is of significant scale. 

## Addressing the Issue of Report Bloat

A frequent problem with dedicated reporting and analytics teams is the phenomenon of "report bloat." During quiet periods, analysts often create new reports to fill their time. However, the creation of a new report does not inherently add value and can often lead to an overwhelming number of reports that are costly to maintain, without providing substantial insight or benefits. \n\n 

# The Integral Approach

## Our Different Approach to Reporting

Our approach is fundamentally different. We view reporting as a means to an end - that end being insightful, actionable data that helps you make informed business decisions. We're adept at understanding the underlying questions you're trying to answer, and we work to find the most effective way to provide you with that insight. Sometimes, what initially seems to be the solution may not be the best way to address your needs. We bring a fresh, external perspective and can often find more efficient or effective ways to answer your questions. 

## Flexible Data Presentation

Another key differentiation is our flexible approach to data presentation. Not every piece of analysis needs to become a permanent, regularly maintained report. We're experts at selecting the right medium for each piece of information. Perhaps a simple email with summary statistics can convey the insights you need. Or maybe a snippet of code can be created & stored on GitHub for ad-hoc execution as needed. And when it is necessary, we can design and implement automated reports that are refreshed regularly. In every case, our goal is to provide you with the information you need in the most suitable, efficient, and easily understood format. 

# The Integral Advantage

## Bridging the Gap Between Data and Business

But our value doesn't stop at technical ability. We pride ourselves on being bilingual in the language of data and business. We bridge the gap between complex technical concepts and the needs of non-technical stakeholders, ensuring that the insights we provide are not only correct but also understandable and actionable. In essence, we are not just your data engineers/analysts, but your translators and strategists, translating your data into a language that your entire business can understand and act on. 

## Full Life-Cycle Data Consultants\n
In the realm of data consulting, technical skills such as SQL querying or creating basic BI dashboards are commonplace. However, we believe that true data mastery involves a much deeper level of involvement and understanding throughout the entire data life-cycle. 

We are not just consultants who can build the technical side of things—we are full life-cycle consultants. This means we immerse ourselves completely in every facet of your data journey. We start from the initial stages of data collection, progressing to analysis and interpretation, and continue through to the application of insights derived from that data. 

By truly understanding the essence of your data and its impact on your business, we provide a more comprehensive and tailored service. This combination of technical ability and business acumen ensures that you receive not just data analysis, but meaningful insights that have a tangible positive impact on your business. In essence, we're not just working with your data, we're working with you, ensuring that the data serves your business in the most impactful way possible. 
`,
  }

  return (
    <Container sx={{ py: "40px" }}>
      {data_philio && <CaseStudy {...data_philio} />}
      <Typography variant="h4" fontWeight={600} mt={12} mb={2}>
        Explore Our Case Studies
      </Typography>

      <Box
        sx={{
          maxWidth: "100%",
          margin: "auto",
          alignItems:'center'
        }}
      >
        <Slider {...settings}>
          {filteredCaseStudiesData.map((caseStudy) => (
            <Grid container md={12} p={2} mb={4}>
              <Grid item md={12} key={caseStudy.id}>
                <CaseStudyCard study={caseStudy} />
              </Grid>
            </Grid>
          ))}
        </Slider>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <Button
          to="/case_studies"
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            View All Case Studies
          </Typography>
          {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </Box>
      </Box>

    </Container>
  );
};

export default IntegralPhiliosophy;
