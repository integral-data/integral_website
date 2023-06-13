import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext, useMode } from "./theme";
import HomePage from "./HomePage";
import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";
import ExperiencePage from "./ExperiencePage";
import WhyIntegral from "./WhyIntegral";
import WhatWeDo from "./WhatWeDo";
import SkillsV2 from "./SkillsV2";
import NewPage from "./NewPage";
import Layout from "./Layout";

import CaseStudiesPage from "./CaseStudiesOverviewPage";
import CaseStudyPageCarousel from "./CaseStudiesCarousel";
import CaseStudyPage from "./CaseStudySingle";
import EmployeesPage from "./Consultants";

function AppRouter() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="contact" element={<ContactForm />} />
                    <Route
                      path="contact_success"
                      element={<ContactSuccess />}
                    />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="why_integral" element={<WhyIntegral />} />
                    <Route path="what_we_do" element={<WhatWeDo />} />
                    <Route path="skills" element={<SkillsV2 />} />
                    <Route path="test" element={<NewPage />} />

                    <Route path="/case_studies" element={<CaseStudiesPage />} />
                    <Route
                      path="/case_carousel"
                      element={<CaseStudyPageCarousel />}
                    />
                    <Route
                      path="/case_study/:id"
                      element={<CaseStudyPageCarousel />}
                    />
                    <Route
                      path="/case_study_v2/:id"
                      element={<CaseStudyPage />}
                    />
                    <Route path="/consultants" element={<EmployeesPage />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

//   function AppRouter() {
//     return (
//       <Router>
//         <CssBaseline />
//         <ThemeProvider theme={defaultTheme}>
//         <Box flex="1" sx={{ overflow: 'auto' }}>
//                 <ResponsiveAppBar />
//                 <Box flex="1">
//                     <Routes>
//                         <Route exact path="/" element={<HomePage />} />
//                         <Route path="/contact" element={<ContactForm />} />
//                         <Route path="/contact_success" element={<ContactSuccess />} />
//                         <Route path="/experience" element={<ExperiencePage />} />
//                         <Route path="/why_integral" element={<WhyIntegral />} />
//                         <Route path="/what_we_do" element={<WhatWeDo />} />
//                         <Route path="/skills" element={<SkillsV2 />} />
//                         <Route path="/test" element={<NewPage />} />

//                     </Routes>
//                 </Box>
//                 <Footer />
//             </Box>
//         </ThemeProvider>
//       </Router>
//     );
// }

export default AppRouter;
