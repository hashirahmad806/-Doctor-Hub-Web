// import React, { useState } from 'react';
// import { doctors as allDoctors } from '../RandomData/doctor'; // BDS & BSN
// import { doctors as mbbsDoctors } from '../RandomData/mbbs';   // MBBS
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Box, Typography, Button } from '@mui/material';
// import Slider from 'react-slick';

// import '../styles/FeaturedDoctors.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const pageVariants = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -30 },
// };

// const sliderSettings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     { breakpoint: 1024, settings: { slidesToShow: 2 } },
//     { breakpoint: 600, settings: { slidesToShow: 1 } },
//   ],
// };

// const FeaturedDoctors = () => {
//   const groupedDoctors = {
//     MBBS: mbbsDoctors,
//     BSN: allDoctors.filter((doc) => doc.department === 'BSN'),
//     BDS: allDoctors.filter((doc) => doc.department === 'BDS'),
//   };

//   // Track expanded sections
//   const [showMore, setShowMore] = useState({
//     MBBS: false,
//     BSN: false,
//     BDS: false,
//   });

//   const toggleShowMore = (dept) => {
//     setShowMore((prev) => ({
//       ...prev,
//       [dept]: !prev[dept],
//     }));
//   };

//   const getDoctorLink = (dept, id) => {
//     if (dept === 'MBBS') return `/mbbs/doctors/${id}`;
//     if (dept === 'BDS') return `/bds/doctors/${id}`;
//     if (dept === 'BSN') return `/bsn/doctors/${id}`;
//     return `/doctors/${id}`;
//   };

//   return (
//     <motion.section
//       className="featured-doctors"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={pageVariants}
//       transition={{ duration: 0.5 }}
//     >
//       <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
//         Top Featured Doctors
//       </Typography>

//       {['MBBS', 'BSN', 'BDS'].map((dept) => {
//         const doctorsToShow = showMore[dept]
//           ? groupedDoctors[dept]
//           : groupedDoctors[dept].slice(0, 3);

//         return (
//           <Box key={dept} sx={{ mb: 6 }}>
//             <Typography
//               variant="h5"
//               sx={{ mb: 2, textAlign: 'center', color: 'primary.main' }}
//             >
//               — {dept} —
//             </Typography>

//             {/* Use Slider for MBBS and BDS, Grid for BSN */}
//             {dept === 'BSN' ? (
//               <Box className="doctor-grid">
//                 {doctorsToShow.map((doc, index) => (
//                   <motion.div
//                     key={doc.id}
//                     className="doctor-card"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <img src={doc.image} alt={doc.name} />
//                     <h3>{doc.name}</h3>
//                     <p><strong>Specialist:</strong> {doc.specialist || doc.specialization}</p>
//                     <p><strong>Experience:</strong> {doc.experience} years</p>
//                     <p><strong>Job:</strong> {doc.job || doc.specialization }</p>
//                     <Link to={getDoctorLink(dept, doc.id)}>
//                       <button className="btn-view">View Details</button>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </Box>
//             ) : (
//               <Slider {...sliderSettings}>
//                 {doctorsToShow.map((doc, index) => (
//                   <Box key={doc.id} sx={{ px: 1 }}>
//                     <motion.div
//                       className="doctor-card"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <img src={doc.image} alt={doc.name} />
//                       <h3>{doc.name}</h3>
//                       <p><strong>Specialist:</strong> {doc.specialist || doc.specialization}</p>
//                       <p><strong>Experience:</strong> {doc.experience} years</p>
//                       <p><strong>Job:</strong> {doc.job || 'N/A'}</p>
//                       <Link to={getDoctorLink(dept, doc.id)}>
//                         <button className="btn-view">View Details</button>
//                       </Link>
//                     </motion.div>
//                   </Box>
//                 ))}
//               </Slider>
//             )}

//             {/* Show More / Less Button */}
//             {groupedDoctors[dept].length > 3 && (
//               <Box textAlign="center" mt={2}>
//                 <Button
//                   variant="outlined"
//                   size="small"
//                   onClick={() => toggleShowMore(dept)}
//                 >
//                   {showMore[dept] ? 'Show Less' : 'Show More'}
//                 </Button>
//               </Box>
//             )}
//           </Box>
//         );
//       })}
//     </motion.section>
//   );
// };

// export default FeaturedDoctors;





import React, { useState } from 'react';
import { doctors as allDoctors } from '../RandomData/doctor'; // BDS & BSN
import { doctors as mbbsDoctors } from '../RandomData/mbbs';   // MBBS

import { doctors as bsnDoctors } from '../RandomData/bsn';
// MBBS
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const FeaturedDoctors = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const groupedDoctors = {
    MBBS: mbbsDoctors,
    BSN: bsnDoctors,
    BDS: allDoctors.filter((doc) => doc.department === 'BDS'),
  };

  const [showMore, setShowMore] = useState({
    MBBS: false,
    BSN: false,
    BDS: false,
  });

  const toggleShowMore = (dept) => {
    setShowMore((prev) => ({
      ...prev,
      [dept]: !prev[dept],
    }));
  };

  const getDoctorLink = (dept, id) => {
    return `/${dept.toLowerCase()}/doctors/${id}`;
  };

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Top Featured Doctors
      </Typography>

      {['MBBS', 'BSN', 'BDS'].map((dept) => {
        const doctorsToShow = showMore[dept]
          ? groupedDoctors[dept]
          : groupedDoctors[dept].slice(0, 3);

        return (
          <Box key={dept} sx={{ mt: 5 }}>
            <Typography variant="h5" color="primary" align="center" gutterBottom>
              — {dept} —
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {doctorsToShow.slice(0,9).map((doc, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={doc.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={doc.image}
                        alt={doc.name}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {doc.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Specialist:</strong> {doc.specialist || doc.specialization}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Experience:</strong> {doc.experience}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Job:</strong> {doc.job || doc.specialization}
                        </Typography>
                      </CardContent>
                      <Box sx={{ px: 2, pb: 2 }}>
                        <Button
                          component={Link}
                          to={getDoctorLink(dept, doc.id)}
                          fullWidth
                          variant="contained"
                          color="secondary"
                          sx={{ borderRadius: '30px', textTransform: 'none' }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {groupedDoctors[dept].length > 3 && (
              <Box textAlign="center" mt={3}>
                <Button variant="outlined" onClick={() => toggleShowMore(dept)}>
                  {showMore[dept] ? 'Show Less' : 'Show More'}
                </Button>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default FeaturedDoctors;
