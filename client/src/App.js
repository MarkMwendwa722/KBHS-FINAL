import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Admissions from './pages/Admissions';
import Assignments from './pages/Assignments';
import Academics from './pages/Academics';
import AlumniPage from './pages/Alumni';
import Students from './pages/students';
import AdmissionsPage from './pages/AdmissionsPage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Facilities from './pages/Facilities';
import Departments from './pages/Departments';
import News from './pages/News';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/alumni" element={<AlumniPage />} /> 
            <Route path="/students" element={<Students />} /> 
            <Route path="/admissions-page" element={<AdmissionsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
  },
  mainContent: {
    flex: 1,
  },
};

export default App;
