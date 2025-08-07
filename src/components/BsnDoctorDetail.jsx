import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../RandomData/bsn.js';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Divider,
  Button,
  Grid,
  Paper,
  useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

function BsnDoctorDetail() {
  const theme = useTheme();
  const { id } = useParams();
  const nurse = doctors.find(
    (n) => n.id === parseInt(id, 10) && n.department === 'BSN'
  );

  if (!nurse) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h6" align="center">
          Nurse not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      {/* Back Link */}
      <Button
        component={Link}
        to="/bsn"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
        variant="outlined"
      >
        Back to Nurses List
      </Button>

      {/* Main Nurse Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: theme.palette.background.paper,
            mb: 4
          }}
          aria-label={`Profile details for nurse ${nurse.name}`}
        >
          {/* Image */}
          <CardMedia
            component="img"
            image={nurse.image}
            alt={`Photo of ${nurse.name}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/default-doctor.jpg';
            }}
            sx={{
              width: { xs: '100%', md: 280 },
              height: 280,
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />

          {/* Info */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {nurse.name}
            </Typography>

            <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
              <Chip label={nurse.specialization} color="primary" />
              <Chip label={nurse.experience} />
              <Chip icon={<StarIcon />} label="4.8" color="success" />
            </Stack>

            <Grid container spacing={1} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Location:</strong> {nurse.location}
                </Typography>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Clinic:</strong> {nurse.clinic_name}
                </Typography>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Contact:</strong> {nurse.contact}
                </Typography>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Email:</strong> {nurse.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Education:</strong> {nurse.qualification}
                </Typography>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Available:</strong> {nurse.available_time}
                </Typography>
                <Typography component="p" variant="body2" gutterBottom>
                  <strong>Role:</strong> {nurse.job}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" color="text.secondary">
              {nurse.about}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* Reviews (Optional Field) */}
      {nurse.reviews && nurse.reviews.length > 0 && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Patient Reviews
          </Typography>

          <Stack spacing={2}>
            {nurse.reviews.map((review, idx) => (
              <Paper
                key={idx}
                elevation={2}
                sx={{
                  p: 2,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  backgroundColor: theme.palette.background.default,
                }}
              >
                <Typography variant="subtitle2">{review.patient}</Typography>
                <Typography variant="body2" sx={{ mb: 0.5, color: 'goldenrod' }}>
                  {'⭐'.repeat(review.rating)} ({review.rating}/5)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  “{review.comment}”
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      )}
    </Container>
  );
}

export default BsnDoctorDetail;
