import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctors from '../RandomData/mbbs.js';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
  Divider,
  Button,
  Chip,
  Tooltip,
  useTheme
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function MbbsDoctorDetail() {
  const { id } = useParams();
  const theme = useTheme();

  const doctor = doctors.find(
    (d) => d.id === parseInt(id) && d.department === 'MBBS'
  );

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
        to="/mbbs"
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        color="primary"
        sx={{ mb: 3 }}
      >
        Back to MBBS List
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
            boxShadow: theme.shadows[4],
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

          <Stack spacing={1} mb={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MedicalServicesIcon color="action" />
              <Typography><strong>Specialist:</strong> {doctor.specialization}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <WorkOutlineIcon color="action" />
              <Typography><strong>Experience:</strong> {doctor.experience}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon color="action" />
              <Typography><strong>Location:</strong> {doctor.location}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalHospitalIcon color="action" />
              <Typography><strong>Clinic:</strong> {doctor.clinic_name}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon color="action" />
              <Typography><strong>Timing:</strong> {doctor.available_time}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon color="action" />
              <Typography><strong>Contact:</strong> {doctor.contact}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon color="action" />
              <Typography><strong>Email:</strong> {doctor.email}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <SchoolIcon color="action" />
              <Typography><strong>Education:</strong> {doctor.qualification || 'MBBS'}</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" color="text.secondary">
            {doctor.about}
          </Typography>
        </Box>
      </Paper>

      {/* Patient Reviews */}
      {doctor.reviews && doctor.reviews.length > 0 && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Patient Reviews
          </Typography>

          <Stack spacing={2}>
            {doctor.reviews.map((r, idx) => (
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
                  <Typography variant="subtitle2" fontWeight="bold">
                    {r.patient}
                  </Typography>

                  <Tooltip title={`${r.rating} out of 5 stars`}>
                    <Stack direction="row" spacing={0.2}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          fontSize="small"
                          color={i < r.rating ? 'warning' : 'disabled'}
                        />
                      ))}
                    </Stack>
                  </Tooltip>
                </Stack>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                  “{r.comment}”
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default MbbsDoctorDetail;
