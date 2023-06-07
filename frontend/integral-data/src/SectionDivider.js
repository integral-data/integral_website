import React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

const SectionDivider = () => {
    const sectionDividerStyle = {
      backgroundColor: '#CCCCCC', // Replace with your desired HEX code for light gray
      height: '2px', // Replace with your desired thickness
    };
  
    return (
      <div>
        <Box sx={{ height: '20px' }} /> {/* Spacer */}
        <Box sx={{ width: '80%', margin: '0 auto' }}>
          <Divider style={sectionDividerStyle} />
        </Box>
        <Box sx={{ height: '20px' }} /> {/* Spacer */}
      </div>
    );
  };

  export default SectionDivider;  
  