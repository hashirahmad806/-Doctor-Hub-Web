import React from 'react';
import { Link } from 'react-router-dom';
import doctors from '../RandomData/mbbs.js';
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
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PeopleIcon from '@mui/icons-material/People';
import CommentIcon from '@mui/icons-material/Comment';

function MbbsDoctorList({ department = 'MBBS', searchTerm = '', selectedSpecialist = 'All' }) {
  const theme = useTheme();

  const filtered = doctors.filter(doc =>
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
        elevation={1}
        sx={{
          p: 4,
          mb: 5,
          background: theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : 'linear-gradient(to right, #f2f9ff, #e6f0ff)',
        }}
      >
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          Meet Our Expert MBBS Doctors
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ fontSize: '1.15rem', mb: 2 }}>
          Our MBBS doctors bring years of hands-on experience, deep clinical knowledge, and a strong commitment to patient care.
          Whether you’re seeking routine consultation or specialized treatments, you're in expert hands.
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
          Browse by specialization and find the doctor that fits your health needs.
        </Typography>
      </Paper>

      {/* Stats Section */}
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={5}>
        <Chip icon={<CommentIcon />} label="1,245+ Reviews" color="primary" />
        <Chip icon={<StarIcon />} label="4.8★ Avg Rating" color="success" />
        <Chip icon={<LocationCityIcon />} label="27 Cities Served" color="secondary" />
        <Chip icon={<PeopleIcon />} label="3,200+ Patients Treated" />
      </Box>

      {/* Doctor Cards by Specialization */}
      {Object.entries(grouped).map(([specialization, docs]) => (
        <Box key={specialization} mb={6}>
          <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
            {specialization}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            {docs.map((doc) => (
              <Grid
                key={doc.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    transition: '0.3s',
                    maxWidth: 280,
                    width: '100%',
                    backgroundColor: theme.palette.background.paper,
                    ':hover': {
                      boxShadow: 6,
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={doc.image}
                    alt={doc.name}
                    sx={{ borderRadius: 1 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      {doc.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {doc.specialization}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 1 }}>
                      {doc.experience} years experience
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }}>
                      {doc.location}
                    </Typography>
                  </CardContent>
                  <Button
                    component={Link}
                    to={`/mbbs/doctors/${doc.id}`}
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, borderRadius: '20px', textTransform: 'none' }}
                  >
                    View Details
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default MbbsDoctorList;
