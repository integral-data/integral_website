import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Chip,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
// Import your images...
import PythonLogo from "../images/logo_python.png";
import GitHubLogo from "../images/logo_github.png";
import ExcelLogo from "../images/logo_excel.png";
import APILogo from "../images/logo_generic_apis.png";
import DjangoLogo from "../images/logo_django.png";
import TableauLogo from "../images/logo_tableau.png";
import PowerBILogo from "../images/logo_power_bi.png";
import SeleniumLogo from "../images/logo_selenium.jpeg";
import PandasLogo from "../images/logo_pandas.png";
import JupyterLogo from "../images/logo_jupyter.png";
import AWSLogo from "../images/logo_aws.png";
import HTMLLogo from "../images/logo_html.png";
import CSSLogo from "../images/logo_css.png";
import SQLLogo from "../images/logo_sql.png";
import FlaskLogo from "../images/logo_flask.jpeg";

// Add your descriptions here
const descriptions = {
  Python:
    "Python is an interpreted, high-level, general-purpose programming language.",
  GitHub:
    "GitHub is a provider of Internet hosting for software development and version control using Git.",
  Excel:
    "Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS.",
  APIs: "API stands for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.",
  Django:
    "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.",
  Tableau:
    "Tableau is a powerful data visualization and business intelligence tool that helps companies visualize their data.",
  "Power BI":
    "Power BI is a business analytics tool developed by Microsoft. It provides interactive visualizations with self-service business intelligence capabilities.",
  Selenium:
    "Selenium is a popular open-source web-based automation tool that provides a way to automate browser actions.",
  Pandas:
    "Pandas is a software library written for the Python programming language for data manipulation and analysis.",
  Jupyter:
    "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.",
  AWS: "Amazon Web Services (AWS) is a secure cloud services platform offering compute power, database storage, content delivery, and other functionalities to help businesses scale and grow.",
  HTML: "HTML stands for Hyper Text Markup Language. It's the standard markup language for creating web pages and web applications.",
  CSS: "CSS stands for Cascading Style Sheets. It's used for describing the look and formatting of a document written in HTML or XML.",
  SQL: "SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.",
  Flask:
    "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.",
};

const LogoImage = styled("img")({
  width: "30px",
  height: "30px",
  "&:hover": {
    transform: "scale(1.2)",
    cursor: "pointer",
  },
  transition: "transform .2s", // Adds a smooth animation
});

const LogoImageModal = styled("img")({
  width: "20px",
  height: "20px",
  "&:hover": {
    transform: "scale(1.2)",
    cursor: "pointer",
  },
  transition: "transform .2s", // Adds a smooth animation
});

const ChipLogo = styled(Chip)({
  width: "auto",
  "&:hover": {
    transform: "scale(1.2)",
    cursor: "pointer",
  },
  transition: "transform .2s", // Adds a smooth animation
});

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const TechnologyChip = ({ logo, technologyName }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpen = () => {
    setOpen(true);
    setModalContent({
      title: technologyName,
      description: descriptions[technologyName],
      logo: logo,
    });
  };

  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Chip
        icon={
          <Avatar
            src={logo}
            alt={technologyName}
            style={{ width: 30, height: 30 }}
          />
        }
        label={technologyName}
        onClick={handleOpen}
        variant="outlined"
        sx={{ padding: "2px", height: "40px" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="technology-description-title"
        aria-describedby="technology-description"
      >
        <Box sx={ModalStyle}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            p={2}
          >
            <img
              src={logo}
              alt={technologyName}
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                left: "4px",
              }}
            />
            <Typography
              id="technology-description-title"
              variant="h6"
              component="h2"
            >
              {technologyName}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
          </Box>
          <Typography id="technology-description" sx={{ mt: 2 }}>
            {modalContent.description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

const TechnologyBadge = ({ logo, technologyName, alwaysShowTitle = false }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setModalContent({
      title: technologyName,
      description: descriptions[technologyName],
      logo: logo,
    });
  };

  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LogoImage
        src={logo}
        alt={technologyName}
        onClick={handleOpen}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      />
      <Typography
        variant="caption"
        fontSize="0.75rem"
        style={{
          visibility: isHovered || alwaysShowTitle ? "visible" : "hidden",
          marginTop: "5px", // Add space between logo and title
          fontWeight: "bold", // Make the title bold
        }}
      >
        {technologyName}
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="technology-description-title"
        aria-describedby="technology-description"
      >
        <Box sx={ModalStyle}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <LogoImageModal
              src={logo}
              alt={technologyName}
              style={{ position: "absolute", left: "4px" }}
            />
            <Typography
              id="technology-description-title"
              variant="h6"
              component="h2"
            >
              {technologyName}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
          </Box>
          <Typography id="technology-description" sx={{ mt: 2 }}>
            {modalContent.description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

// The rest of your components...

const BadgePython = () => (
  <TechnologyBadge logo={PythonLogo} technologyName="Python" />
);
const BadgeGithub = () => (
  <TechnologyBadge logo={GitHubLogo} technologyName="GitHub" />
);
const BadgeExcel = () => (
  <TechnologyBadge logo={ExcelLogo} technologyName="Excel" />
);
const BadgeAPIs = () => (
  <TechnologyBadge logo={APILogo} technologyName="APIs" />
);
const BadgeDjango = () => (
  <TechnologyBadge logo={DjangoLogo} technologyName="Django" />
);
const BadgeTableau = () => (
  <TechnologyBadge logo={TableauLogo} technologyName="Tableau" />
);
const BadgePowerBI = () => (
  <TechnologyBadge logo={PowerBILogo} technologyName="Power BI" />
);
const BadgeSelenium = () => (
  <TechnologyBadge logo={SeleniumLogo} technologyName="Selenium" />
);
const BadgePandas = () => (
  <TechnologyBadge logo={PandasLogo} technologyName="Pandas" />
);
const BadgeJupyter = () => (
  <TechnologyBadge logo={JupyterLogo} technologyName="Jupyter" />
);
const BadgeAWS = () => <TechnologyBadge logo={AWSLogo} technologyName="AWS" />;
const BadgeHTML = () => (
  <TechnologyBadge logo={HTMLLogo} technologyName="HTML" />
);
const BadgeCSS = () => <TechnologyBadge logo={CSSLogo} technologyName="CSS" />;
const BadgeSQL = () => <TechnologyBadge logo={SQLLogo} technologyName="SQL" />;
const BadgeFlask = () => (
  <TechnologyBadge logo={FlaskLogo} technologyName="Flask" />
);

const ChipPython = () => (
  <TechnologyChip logo={PythonLogo} technologyName="Python" />
);
const ChipGithub = () => (
  <TechnologyChip logo={GitHubLogo} technologyName="GitHub" />
);
const ChipExcel = () => (
  <TechnologyChip logo={ExcelLogo} technologyName="Excel" />
);
const ChipAPIs = () => <TechnologyChip logo={APILogo} technologyName="APIs" />;
const ChipDjango = () => (
  <TechnologyChip logo={DjangoLogo} technologyName="Django" />
);
const ChipTableau = () => (
  <TechnologyChip logo={TableauLogo} technologyName="Tableau" />
);
const ChipPowerBI = () => (
  <TechnologyChip logo={PowerBILogo} technologyName="Power BI" />
);
const ChipSelenium = () => (
  <TechnologyChip logo={SeleniumLogo} technologyName="Selenium" />
);
const ChipPandas = () => (
  <TechnologyChip logo={PandasLogo} technologyName="Pandas" />
);
const ChipJupyter = () => (
  <TechnologyChip logo={JupyterLogo} technologyName="Jupyter" />
);
const ChipAWS = () => <TechnologyChip logo={AWSLogo} technologyName="AWS" />;
const ChipHTML = () => <TechnologyChip logo={HTMLLogo} technologyName="HTML" />;
const ChipCSS = () => <TechnologyChip logo={CSSLogo} technologyName="CSS" />;
const ChipSQL = () => <TechnologyChip logo={SQLLogo} technologyName="SQL" />;
const ChipFlask = () => (
  <TechnologyChip logo={FlaskLogo} technologyName="Flask" />
);

export {
  TechnologyBadge,
  BadgePython,
  BadgeGithub,
  BadgeExcel,
  BadgeAPIs,
  BadgeDjango,
  BadgeTableau,
  BadgePowerBI,
  BadgeSelenium,
  BadgePandas,
  BadgeJupyter,
  BadgeAWS,
  BadgeHTML,
  BadgeCSS,
  BadgeSQL,
  BadgeFlask,
  ChipPython,
  ChipGithub,
  ChipExcel,
  ChipAPIs,
  ChipDjango,
  ChipTableau,
  ChipPowerBI,
  ChipSelenium,
  ChipPandas,
  ChipJupyter,
  ChipAWS,
  ChipHTML,
  ChipCSS,
  ChipSQL,
  ChipFlask,
};
