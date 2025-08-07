import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctors from '../RandomData/doctor';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Divider,
  Button,
  Paper,
  useTheme,
  Tooltip
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';

function DoctorDetail() {
  const theme = useTheme();
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id, 10));

  if (!doctor) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" align="center" color="error">
          Doctor not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        p: { xs: 2, sm: 4 },
        color: theme.palette.text.primary,
      }}
    >
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
        variant="outlined"
        color="primary"
      >
        Back to List
      </Button>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center',
        }}
      >
        <Avatar
          src={doctor.image}
          alt={doctor.name}
          sx={{
            width: 180,
            height: 180,
            borderRadius: 3,
            objectFit: 'cover',
            boxShadow: theme.shadows[5],
          }}
          imgProps={{
            onError: (e) => {
              e.target.onerror = null;
              e.target.src = '/images/default-doctor.jpg';
            },
          }}
        />

        <Box flex={1}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {doctor.name}
          </Typography>

          <Stack spacing={1} mb={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MedicalServicesIcon color="action" />
              <Typography variant="body1">
                <strong>Specialist:</strong> {doctor.specialist}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <WorkOutlineIcon color="action" />
              <Typography variant="body1">
                <strong>Experience:</strong> {doctor.experience} years
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationCityIcon color="action" />
              <Typography variant="body1">
                <strong>Country:</strong> {doctor.country}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationCityIcon color="action" />
              <Typography variant="body1">
                  <strong> About :</strong>    {doctor.about}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              
              <Typography variant="body1">
                  <strong>  Timing   :</strong>    {doctor.available_time  || 'MON - Fri  11 - 4 pm'}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon color="action" />
              <Typography variant="body1">{doctor.contact}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <SchoolIcon color="action" />
              <Typography variant="body1">
                <strong>Education:</strong> {doctor.education || ' BDS'}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <SchoolIcon color="action" />
              <Typography variant="body1">
                <strong>Job:</strong> {doctor.job || ' BDS'}
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 3 }} />

          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <InfoIcon color="action" />
            <Typography variant="body1" color="text.secondary">
              {doctor.about}
            </Typography>
          </Stack>
        </Box>
      </Paper>

      {doctor.reviews && doctor.reviews.length > 0 && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Patient Reviews
          </Typography>

          <Stack spacing={3}>
            {doctor.reviews.map((review, idx) => (
              <Paper
                key={idx}
                elevation={2}
                sx={{
                  p: 3,
                  borderLeft: `6px solid ${theme.palette.primary.main}`,
                  backgroundColor: theme.palette.background.default,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {review.patient}
                  </Typography>
                  <Tooltip title={`${review.rating} out of 5 stars`}>
                    <Stack direction="row" spacing={0.2} alignItems="center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          fontSize="small"
                          color={i < review.rating ? 'warning' : 'disabled'}
                        />
                      ))}
                    </Stack>
                  </Tooltip>
                </Stack>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                  “{review.comment}”
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default DoctorDetail;
