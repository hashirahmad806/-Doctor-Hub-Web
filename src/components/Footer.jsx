import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  useTheme,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // for TikTok

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f8f8f8',
        color: theme.palette.text.primary,
        py: 5,
        mt: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        DoctorCare+
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Trusted healthcare professionals. Compassionate care, anytime.
      </Typography>

      {/* Social Icons */}
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Tooltip title="Instagram" arrow>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              backgroundColor: '#E1306C',
              '&:hover': {
                boxShadow: '0 0 12px #E1306C',
                backgroundColor: '#E1306C',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="TikTok" arrow>
          <IconButton
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              backgroundColor: '#000',
              '&:hover': {
                boxShadow: '0 0 12px #69C9D0',
                backgroundColor: '#000',
              },
            }}
          >
            <MusicNoteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Facebook" arrow>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              backgroundColor: '#1877F2',
              '&:hover': {
                boxShadow: '0 0 12px #1877F2',
                backgroundColor: '#1877F2',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn" arrow>
          <IconButton
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              backgroundColor: '#0A66C2',
              '&:hover': {
                boxShadow: '0 0 12px #0A66C2',
                backgroundColor: '#0A66C2',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="YouTube" arrow>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              backgroundColor: '#FF0000',
              '&:hover': {
                boxShadow: '0 0 12px #FF0000',
                backgroundColor: '#FF0000',
              },
            }}
          >
            <YouTubeIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Copyright */}
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 4, color: 'text.secondary' }}
      >
        &copy; {new Date().getFullYear()} DoctorCare+. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
