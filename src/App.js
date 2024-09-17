import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import store, { reduxHistory } from './redux/store';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';
import Navbar from './components/Navbar';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={reduxHistory}>
          <CssBaseline />
          <Navbar />
          <Box sx={{ mt: 8 }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/hotels" element={<Hotels />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
