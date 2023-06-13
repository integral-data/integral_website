import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Collapse, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '100%', // 1:1
  borderRadius: '50%',
  backgroundPosition: 'center', // center the image
  width: '100%', // control the size
  margin: 'auto', // center the image
});

const EmployeeCard = ({ name, image, shortDescription, longDescription }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard onClick={handleExpandClick}>
      <CardActionArea>
        <StyledCardMedia image={image} title={name} />
        <CardContent>
          <Box textAlign="center">
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2" color="textSecondary">{shortDescription}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{longDescription}</Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default EmployeeCard;
