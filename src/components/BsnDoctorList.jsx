import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../RandomData/bsn.js';
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
  Stack,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PeopleIcon from '@mui/icons-material/People';
import CommentIcon from '@mui/icons-material/Comment';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function BsnDoctorList({ department = 'BSN', searchTerm = '', selectedSpecialist = 'All' }) {
  const theme = useTheme();

  const filtered = doctors.filter(
    (doc) =>
      doc.department === department &&
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpecialist === 'All' || doc.specialization === selectedSpecialist)
  );

  const grouped = filtered.reduce((acc, doc) => {
    acc[doc.specialization] = acc[doc.specialization] || [];
    acc[doc.specialization].push(doc);
    return acc;
  }, {});

  return (
    <Container sx={{ py: 5 }}>
      {/* Hero Section */}
      <Paper
        elevation={2}
        sx={{
          p: 5,
          mb: 5,
          borderRadius: 3,
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.background.paper
              : 'linear-gradient(to right, #fef9f9, #e0f7fa)',
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          Professional BSN Nurses At Your Service
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ fontSize: '1.15rem', mb: 2 }}>
          Our BSN-certified nurses are experienced, compassionate, and trained in modern healthcare practices.
          Browse through a wide range of specializations and get the care you deserve.
        </Typography>
      </Paper>

      {/* Stats Section */}
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={5}>
        <Chip icon={<LocalHospitalIcon />} label="Certified Nursing Staff" color="info" />
        <Chip icon={<CommentIcon />} label="980+ Reviews" color="primary" />
        <Chip icon={<StarIcon />} label="4.9★ Avg Rating" color="success" />
        <Chip icon={<LocationCityIcon />} label="Available Nationwide" color="secondary" />
        <Chip icon={<PeopleIcon />} label="2,500+ Patients Served" />
      </Box>

      {/* Doctor Cards by Specialization */}
      {Object.entries(grouped).map(([specialization, docs]) => (
        <Box key={specialization} mb={6}>
          <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
            {specialization}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={4}>
            {docs.map((doc) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={doc.id}>
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 4,
                    transition: '0.3s ease-in-out',
                    ':hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    },
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={doc.image}
                    alt={doc.name}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {doc.name}
                    </Typography>

                    <Stack direction="row" spacing={1} mb={1} alignItems="center">
                      <Chip label={doc.specialization} color="primary" size="small" />
                      <Chip label={doc.experience} size="small" />
                    </Stack>

                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                      📍 {doc.location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      📞 {doc.contact}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Button
                      component={Link}
                      to={`/bsn/doctors/${doc.id}`}
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{ borderRadius: '30px', textTransform: 'none' }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default BsnDoctorList;
