import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PythonLogo from '../images/logo_python.png'; // replace with the path to your python logo
import GitHubLogo from '../images/logo_github.png'; // replace with the path to your react logo
import ExcelLogo from '../images/logo_excel.png'; // replace with the path to your react logo
import APILogo from '../images/logo_generic_apis.png'; // replace with the path to your react logo
import DjangoLogo from '../images/logo_django.png'; // replace with the path to your react logo
import TableauLogo from '../images/logo_tableau.png'; // replace with the path to your react logo
import PowerBILogo from '../images/logo_power_bi.png'; // replace with the path to your react logo


const LogoImage = styled('img')({
  width: '40px', // you can adjust the size as needed
  height: '40px',
});

const TechnologyBadge = ({ logo, technologyName }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <LogoImage src={logo} alt={technologyName} />
    <Typography variant="caption">{technologyName}</Typography>
  </Box>
);

const BadgePython = () => <TechnologyBadge logo={PythonLogo} technologyName="Python" />;
const BadgeGithub = () => <TechnologyBadge logo={GitHubLogo} technologyName="GitHub" />;
const BadgeExcel = () => <TechnologyBadge logo={ExcelLogo} technologyName="Excel" />;
const BadgeAPIs = () => <TechnologyBadge logo={APILogo} technologyName="APIs" />;
const BadgeDjango = () => <TechnologyBadge logo={DjangoLogo} technologyName="Django" />;

const BadgeTableau = () => <TechnologyBadge logo={TableauLogo} technologyName="Tableau" />;
const BadgePowerBI = () => <TechnologyBadge logo={PowerBILogo} technologyName="Power BI" />;

export {TechnologyBadge, BadgePython, BadgeGithub, BadgeExcel, BadgeAPIs, BadgeDjango, BadgeTableau, BadgePowerBI};





