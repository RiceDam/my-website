import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectList from './components/ProjectList'
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Banner />
        <About />
        <ProjectList />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
