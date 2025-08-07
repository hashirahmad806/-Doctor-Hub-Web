// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Paper,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import FeaturedDoctors from '../components/FeaturedDoctors'; // ✅ Keep only this

// const fadeIn = (delay = 0) => ({
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
// });

// const Home = () => {
//   return (
//     <Box sx={{ bgcolor: '#f5f9ff', minHeight: '100vh', pt: 6 }}>
//       <Container maxWidth="lg">
//         {/* Hero Section */}
//         <motion.div {...fadeIn(0)}>
//           <Typography
//             variant="h3"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: 'bold', color: '#1976d2' }}
//           >
//             Welcome to <span style={{ color: '#1565c0' }}>Doctors Hub</span>
//           </Typography>
//           <Typography variant="h6" align="center" color="text.secondary" paragraph>
//             Discover top-rated medical professionals in BDS, MBBS, and BSN. Trusted by thousands of patients and families.
//           </Typography>

//           <Box textAlign="center" mt={4}>
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               component={Link}
//               to="/bds"
//               sx={{ mr: 2 }}
//             >
//               Explore BDS Doctors
//             </Button>
//             <Button
//               variant="outlined"
//               size="large"
//               component={Link}
//               to="/mbbs"
//             >
//               Explore MBBS Doctors
//             </Button>
//           </Box>
//         </motion.div>

//         {/* About Section */}
//         <motion.div {...fadeIn(0.3)}>
//           <Box mt={10}>
//             <Typography variant="h4" gutterBottom color="primary">
//               About Doctors Hub
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               Doctors Hub connects patients with certified and experienced medical professionals. Whether you're searching for a dental surgeon, general physician, or nurse specialist, our platform ensures you get access to the right healthcare expert.
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               We carefully review each doctor's profile, qualifications, and patient feedback to bring only the best to our platform. Our departments in BDS, MBBS, and BSN offer expert care across various specialties.
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               Thousands of satisfied patients trust our services for timely care, transparent reviews, and unmatched quality.
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* ✅ Featured Doctors */}
//         <motion.div {...fadeIn(0.5)}>
//           <Box mt={8}>
//             <FeaturedDoctors />
//           </Box>
//         </motion.div>

//         {/* Departments */}
//         <motion.div {...fadeIn(0.7)}>
//           <Box mt={10}>
//             <Typography variant="h4" gutterBottom color="primary">
//               Explore Departments
//             </Typography>
//             <Grid container spacing={3} mt={2}>
//               {['BDS', 'MBBS', 'BSN'].map((dept, i) => (
//                 <Grid item xs={12} sm={4} key={i}>
//                   <Paper
//                     elevation={3}
//                     component={Link}
//                     to={`/${dept.toLowerCase()}`}
//                     sx={{
//                       p: 4,
//                       textAlign: 'center',
//                       textDecoration: 'none',
//                       color: 'inherit',
//                       transition: 'transform 0.3s ease',
//                       '&:hover': {
//                         transform: 'scale(1.05)',
//                         bgcolor: '#414446ff',
//                       },
//                     }}
//                   >
//                     <Typography variant="h6" fontWeight="bold">
//                       {dept}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Click to view all {dept} doctors
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </motion.div>

//         {/* Footer */}
//         <Box mt={10} mb={4} textAlign="center">
//           <Typography variant="body2" color="text.secondary">
//             &copy; 2025 Doctors Hub. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Home;
// // Note: Ensure to import this Home component in your main App.jsx or wherever you want to display it.
// // You can use it like this:







//adding dark mode


import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import FeaturedDoctors from '../components/FeaturedDoctors';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', pt: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div {...fadeIn(0)}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
          >
            Welcome to <span style={{ color: theme.palette.primary.dark }}>Doctors Hub</span>
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Discover top-rated medical professionals in BDS, MBBS, and BSN. Trusted by thousands of patients and families.
          </Typography>

          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/bds"
              sx={{ mr: 2 }}
            >
              Explore BDS Doctors
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/mbbs"
              color="primary"
            >
              Explore MBBS Doctors
            </Button>
          </Box>
        </motion.div>

        {/* About Section */}
        <motion.div {...fadeIn(0.3)}>
          <Box mt={10}>
            <Typography variant="h4" gutterBottom color="primary">
              About Doctors Hub
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Doctors Hub connects patients with certified and experienced medical professionals...
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We carefully review each doctor's profile...
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Thousands of satisfied patients trust our services...
            </Typography>
          </Box>
        </motion.div>

        {/* Featured Doctors */}
        <motion.div {...fadeIn(0.5)}>
          <Box mt={8}>
            <FeaturedDoctors />
          </Box>
        </motion.div>

        {/* Departments */}
        <motion.div {...fadeIn(0.7)}>
          <Box mt={10}>
            <Typography variant="h4" gutterBottom color="primary">
              Explore Departments
            </Typography>
            <Grid container spacing={3} mt={2}>
              {['BDS', 'MBBS', 'BSN'].map((dept, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Paper
                    elevation={3}
                    component={Link}
                    to={`/${dept.toLowerCase()}`}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      bgcolor: theme.palette.background.paper,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {dept}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Click to view all {dept} doctors
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Footer */}
        <Box mt={10} mb={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            &copy; 2025 Doctors Hub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
