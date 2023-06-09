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
        <Box sx={{ height: '3em' }} /> {/* Spacer */}
        <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}> {/* Added Box with maxWidth here */}
          <Box sx={{ width: '80%', margin: '0 auto' }}>
            <Divider style={sectionDividerStyle} />
          </Box>
        </Box> {/* End of the added Box */}
        <Box sx={{ height: '3em' }} /> {/* Spacer */}
      </div>
    );
  };
  
  export default SectionDivider;
