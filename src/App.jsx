import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
} from '@mui/material';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // ✅ NEW Footer
import Home from './pages/Home';
import ContactUs from './pages/ContactUs.jsx'; // ✅ Contact Page

import DoctorList from './components/DoctorList'; // BDS
import MbbsDoctorList from './components/MbbsDoctorList';
import BsnDoctorList from './components/BsnDoctorList';

import DoctorDetail from './components/DoctorDetail'; // BDS
import MbbsDoctorDetail from './components/MbbsDoctorDetail';
import BsnDoctorDetail from './components/BsnDoctorDetail';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component

// ✅ AnimatedRoutes Component
function AnimatedRoutes({ searchTerm, selectedSpecialist }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/bds"
          element={
            <DoctorList
              department="BDS"
              searchTerm={searchTerm}
              selectedSpecialist={selectedSpecialist}
            />
          }
        />
        <Route
          path="/mbbs"
          element={
            <MbbsDoctorList
              department="MBBS"
              searchTerm={searchTerm}
              selectedSpecialist={selectedSpecialist}
            />
          }
        />
        <Route
          path="/bsn"
          element={
            <BsnDoctorList
              department="BSN"
              searchTerm={searchTerm}
              selectedSpecialist={selectedSpecialist}
            />
          }
        />

        {/* Detail Pages */}
        <Route path="/bds/doctors/:id" element={<DoctorDetail />} />
        <Route path="/mbbs/doctors/:id" element={<MbbsDoctorDetail />} />
        <Route path="/bsn/doctors/:id" element={<BsnDoctorDetail />} />

        {/* ✅ Contact Page Route */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialist, setSelectedSpecialist] = useState('All');
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode === 'dark' || savedMode === 'light') {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#90caf9' : '#1976d2',
          },
          secondary: {
            main: mode === 'dark' ? '#f48fb1' : '#dc004e',
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#f5f9ff',
            paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
          },
        },
        typography: {
          fontFamily: 'Inter, Roboto, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          bgcolor="background.default"
          color="text.primary"
        >
          <NavBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedSpecialist={selectedSpecialist}
            setSelectedSpecialist={setSelectedSpecialist}
            mode={mode}
            toggleTheme={toggleTheme}
          />

          {/* Main Content */}
          <Box flex="1">
            <AnimatedRoutes
              searchTerm={searchTerm}
              selectedSpecialist={selectedSpecialist}
            />
          </Box>

          {/* Sticky Footer */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
