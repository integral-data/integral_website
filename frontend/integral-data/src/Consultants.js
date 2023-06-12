import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import EmployeeCard from './components/EmployeeCard';
import Image1 from './images/code_and_coffee.jpeg';
import Image2 from './images/dashboard.svg';
import Image3 from './images/nasa-unsplash.jpeg';
import TitleSubtitle from './components/TitleSubtitle';

const employeesData = [
    {
      id: 1,
      name: 'John Doe',
      image: Image1,
      shortDescription: 'Front-end Developer',
      longDescription: `John Doe is a talented front-end developer with over 8 years of experience. He specializes in creating interactive, user-friendly web applications using technologies such as HTML5, CSS3, JavaScript, and modern frameworks like React and Angular. John has a keen eye for design and UX, and always strives to create intuitive interfaces that offer the best user experience possible. He's been instrumental in driving several successful projects, always exceeding client expectations with his attention to detail and commitment to quality.`,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: Image2,
      shortDescription: 'Back-end Developer',
      longDescription: `Jane Smith is a skilled back-end developer with a strong foundation in data structures, algorithms, and software engineering principles. With more than 6 years of experience, she has a deep understanding of server-side languages such as Java, Python, and Node.js, as well as database management systems like SQL and MongoDB. Jane excels at problem-solving, systems design, and ensuring the reliability and efficiency of the data flow in the applications she works on. Her technical prowess and dedication have played a crucial role in the success of numerous complex projects.`,
    },
    {
      id: 3,
      name: 'Emma Johnson',
      image: Image3,
      shortDescription: 'Full-stack Developer',
      longDescription: `Emma Johnson is a competent full-stack developer with a decade of experience in the software industry. Her expertise spans across both front-end and back-end technologies, making her a versatile asset for any development team. Skilled in languages such as JavaScript, Python, and Ruby, Emma also has a strong grasp of databases, servers, and UI/UX principles. Her comprehensive skill set, coupled with her drive for continuous learning and improvement, has led to the successful completion of numerous high-stakes projects, always showcasing her commitment to high-quality, maintainable code.`,
    },
  ];
  

const EmployeesPage = () => {
  const handleClick = (employee) => {
    // handle click event, for example show a dialog with employee.longDescription
    alert(employee.longDescription);
  };

  return (
    <Container>
            <TitleSubtitle 
                title="Meet the Team" 
                subtitle="We've got a great team with a diverse skillset ready to tackle any challenge."
                color="white"
                  />
      <Box py={2}>
        <Grid container spacing={2}>
          {employeesData.map((employee) => (
            <Grid item xs={12} sm={6} md={4} key={employee.id}>
              <EmployeeCard {...employee} onClick={() => handleClick(employee)} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default EmployeesPage;
