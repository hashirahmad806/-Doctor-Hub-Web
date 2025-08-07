// import React from 'react';
// import { Link } from 'react-router-dom';
// import doctors from '../RandomData/doctor';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   Box,
//   Chip,
//   Divider,
//   Paper,
//   useTheme
// } from '@mui/material';

// import StarIcon from '@mui/icons-material/Star';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import PeopleIcon from '@mui/icons-material/People';
// import CommentIcon from '@mui/icons-material/Comment';

// function DoctorList({ department = 'BDS', searchTerm = '', selectedSpecialist = 'All' }) {
//   const theme = useTheme(); // ✅ Access current theme (light/dark)

//   const filtered = doctors.filter(doc =>
//     doc.department === department &&
//     doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (selectedSpecialist === 'All' || doc.specialist === selectedSpecialist)
//   );

//   const grouped = filtered.reduce((acc, doc) => {
//     acc[doc.specialist] = acc[doc.specialist] || [];
//     acc[doc.specialist].push(doc);
//     return acc;
//   }, {});

//   return (
//     <Container sx={{ py: 5 }}>
//       {/* 🧾 Intro Section */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           mb: 4,
//           backgroundColor: theme.palette.mode === 'dark'
//             ? theme.palette.background.paper
//             : '#f9f9f9',
//         }}
//       >
//         <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} gutterBottom>
//           Our Expert {department} Doctors
//         </Typography>

//         <Typography align="center" color="text.secondary" sx={{ fontSize: '1.2rem', mb: 2 }}>
//           Our {department} team is composed of highly skilled professionals with years of specialized training and hands-on experience.
//           From routine care to complex procedures, our experts are dedicated to excellence and patient comfort.
//         </Typography>

//         <Typography align="center" color="text.secondary" sx={{ fontSize: '1.15rem', mb: 2 }}>
//           What sets us apart is our focus on precision, compassion, and innovation.
//           We combine the latest technologies with proven techniques to provide personalized care for every patient.
//         </Typography>

//         <Typography align="center" color="text.secondary" sx={{ fontSize: '1.15rem', mb: 4 }}>
//           Trusted by thousands of patients across the country, our doctors receive praise for their clarity,
//           gentle approach, and exceptional outcomes. Explore our team below.
//         </Typography>
//       </Paper>

//       {/* 📊 Stats */}
//       <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={5}>
//         <Chip icon={<CommentIcon />} label="1245+ Reviews" color="primary" />
//         <Chip icon={<StarIcon />} label="4.8★ Avg Rating" color="success" />
//         <Chip icon={<LocationCityIcon />} label="27 Cities Served" color="secondary" />
//         <Chip icon={<PeopleIcon />} label="3200+ Patients Treated" />
//       </Box>

//       {/* 🧑‍⚕️ Specialist Sections */}
//       {Object.entries(grouped).map(([specialist, docs]) => (
//         <Box key={specialist} mb={5}>
//           <Typography variant="h5" color="secondary" gutterBottom>
//             {specialist}
//           </Typography>
//           <Divider sx={{ mb: 3 }} />

//           <Grid container spacing={3}>
//             {docs.map((doc) => (
//               <Grid item key={doc.id} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     backgroundColor: theme.palette.background.paper,
//                     transition: '0.3s',
//                     ':hover': { boxShadow: 6 },
//                   }}
//                 >
//                   <CardMedia component="img" height="200" image={doc.image} alt={doc.name} />
//                   <CardContent>
//                     <Typography variant="h6">{doc.name}</Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {doc.specialist} • {doc.experience} years
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {doc.job}
//                     </Typography>
//                   </CardContent>
//                   <Box textAlign="center" pb={2}>
//                     <Button
//                       component={Link}
//                       to={`/${doc.department.toLowerCase()}/doctors/${doc.id}`}
//                       variant="contained"
//                       size="small"
//                     >
//                       View Details
//                     </Button>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       ))}
//     </Container>
//   );
// }

// export default DoctorList;




import React from 'react';
import { Link } from 'react-router-dom';
import doctors from '../RandomData/doctor';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PeopleIcon from '@mui/icons-material/People';
import CommentIcon from '@mui/icons-material/Comment';
import { motion } from 'framer-motion';

const DoctorList = ({
  department = 'BDS',
  searchTerm = '',
  selectedSpecialist = 'All',
}) => {
  const filtered = doctors.filter(
    (doc) =>
      doc.department === department &&
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpecialist === 'All' || doc.specialist === selectedSpecialist)
  );

  const grouped = filtered.reduce((acc, doc) => {
    acc[doc.specialist] = acc[doc.specialist] || [];
    acc[doc.specialist].push(doc);
    return acc;
  }, {});

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <Container sx={{ py: 5 }}>
      {/* Intro */}
      <Paper elevation={0} sx={{ p: 4, mb: 4, backgroundColor: 'background.paper' }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          sx={{ fontWeight: 'bold', fontSize: '2.3rem' }}
          gutterBottom
        >
          Our Expert {department} Doctors
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 2 }}>



          Our {department} team is composed of highly skilled professionals with years of specialized training and hands-on experience.
          From routine care to complex procedures, our experts are dedicated to excellence and patient comfort.
        </Typography> 


        <Typography align="center" color="text.secondary" sx={{ fontSize: '1.15rem', mb: 2 }}>
         What sets us apart is our focus on precision, compassion, and innovation.
         We combine the latest technologies with proven techniques to provide personalized care for every patient.                 
         Trusted by thousands of patients across the country, our doctors receive praise for their clarity,
          gentle approach, and exceptional outcomes. Explore our team below.
         </Typography>

    <Typography align="center" color="text.secondary" sx={{ mb: 2 }}>
          Explore our curated team of skilled professionals in {department}. Each profile reflects our commitment to exceptional patient care and innovation.

        </Typography>
      </Paper>

      {/* Stats */}
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={5}>
        <Chip icon={<CommentIcon />} label="1245+ Reviews" color="primary" />
        <Chip icon={<StarIcon />} label="4.8★ Avg Rating" color="success" />
        <Chip icon={<LocationCityIcon />} label="27 Cities Served" color="secondary" />
        <Chip icon={<PeopleIcon />} label="3200+ Patients Treated" color="default" />
      </Box>

      {/* Doctor Sections by Specialist */}
      {Object.entries(grouped).map(([specialist, docs]) => (
        <Box key={specialist} mb={5}>
          <Typography variant="h5" color="secondary" gutterBottom>
            {specialist}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            {docs.map((doc) => (
              <Grid item key={doc.id} xs={12} sm={6} md={4} lg={3}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.4, delay: doc.id * 0.05 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: '0.3s',
                      '&:hover': { boxShadow: 6 },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={doc.image}
                      alt={doc.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/fallback.jpg'; // Add a fallback image in /public folder
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {doc.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doc.specialist} • {doc.experience} years
                      </Typography>
                      <Typography variant="body2">{doc.job}</Typography>
                    </CardContent>
                    <Box textAlign="center" pb={2}>
                      <Button
                        component={Link}
                        to={`/${doc.department.toLowerCase()}/doctors/${doc.id}`}
                        variant="contained"
                        size="small"
                      >
                        View Details
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default DoctorList;
