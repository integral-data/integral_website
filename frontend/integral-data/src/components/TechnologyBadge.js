import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
// Import your images...
import PythonLogo from '../images/logo_python.png';
import GitHubLogo from '../images/logo_github.png';
import ExcelLogo from '../images/logo_excel.png';
import APILogo from '../images/logo_generic_apis.png';
import DjangoLogo from '../images/logo_django.png';
import TableauLogo from '../images/logo_tableau.png';
import PowerBILogo from '../images/logo_power_bi.png';
import SeleniumLogo from '../images/logo_power_bi.png';
import PandasLogo from '../images/logo_power_bi.png';
import JupyterLogo from '../images/logo_power_bi.png';
import AWSLogo from '../images/logo_power_bi.png';

// Add your descriptions here
const descriptions = {
    "Python": "Python is an interpreted, high-level, general-purpose programming language.",
    "GitHub": "GitHub is a provider of Internet hosting for software development and version control using Git.",
    "Excel": "Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS.",
    "APIs": "API stands for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.",
    "Django": "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.",
    "Tableau": "Tableau is a powerful data visualization and business intelligence tool that helps companies visualize their data.",
    "Power BI": "Power BI is a business analytics tool developed by Microsoft. It provides interactive visualizations with self-service business intelligence capabilities.",
    "Selenium": "Selenium is a popular open-source web-based automation tool that provides a way to automate browser actions.",
    "Pandas": "Pandas is a software library written for the Python programming language for data manipulation and analysis.",
    "Jupyter Notebook": "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.",
    "AWS": "Amazon Web Services (AWS) is a secure cloud services platform offering compute power, database storage, content delivery, and other functionalities to help businesses scale and grow."
  };
  

const LogoImage = styled('img')({
  width: '40px',
  height: '40px',
  '&:hover': {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
  transition: 'transform .2s', // Adds a smooth animation
});

const LogoImageModal = styled('img')({
    width: '20px',
    height: '20px',
    '&:hover': {
      transform: 'scale(1.2)',
      cursor: 'pointer',
    },
    transition: 'transform .2s', // Adds a smooth animation
  });

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const TechnologyBadge = ({ logo, technologyName }) => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
  
    const handleOpen = () => {
      setOpen(true);
      setModalContent({
        title: technologyName,
        description: descriptions[technologyName],
        logo: logo
      });
    };
  
    const handleClose = () => setOpen(false);
  
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <LogoImage src={logo} alt={technologyName} onClick={handleOpen} />
        <Typography variant="caption">{technologyName}</Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="technology-description-title"
          aria-describedby="technology-description"
        >
          <Box sx={ModalStyle}>
          <Box sx={ModalStyle}>
    <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative' 
    }}>
        <LogoImageModal src={logo} alt={technologyName} style={{ position: 'absolute', left: '4px' }} />
        <Typography id="technology-description-title" variant="h6" component="h2">
            {technologyName}
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
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
        {descriptions[technologyName]}
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

const BadgePython = () => <TechnologyBadge logo={PythonLogo} technologyName="Python" />;
const BadgeGithub = () => <TechnologyBadge logo={GitHubLogo} technologyName="GitHub" />;
const BadgeExcel = () => <TechnologyBadge logo={ExcelLogo} technologyName="Excel" />;
const BadgeAPIs = () => <TechnologyBadge logo={APILogo} technologyName="APIs" />;
const BadgeDjango = () => <TechnologyBadge logo={DjangoLogo} technologyName="Django" />;
const BadgeTableau = () => <TechnologyBadge logo={TableauLogo} technologyName="Tableau" />;
const BadgePowerBI = () => <TechnologyBadge logo={PowerBILogo} technologyName="Power BI" />;
const BadgeSelenium = () => <TechnologyBadge logo={SeleniumLogo} technologyName="Selenium" />;
const BadgePandas = () => <TechnologyBadge logo={PandasLogo} technologyName="Pandas" />;
const BadgeJupyter = () => <TechnologyBadge logo={JupyterLogo} technologyName="Jupyter Notebook" />;
const BadgeAWS = () => <TechnologyBadge logo={AWSLogo} technologyName="AWS" />;

export { TechnologyBadge, BadgePython, BadgeGithub, BadgeExcel, BadgeAPIs, BadgeDjango, BadgeTableau, BadgePowerBI, BadgeSelenium, BadgePandas, BadgeJupyter, BadgeAWS };
