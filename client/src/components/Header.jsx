import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header style={styles.header} className='relative'>
      <div>
        <button className='text-2xl' onClick={toggleDropdown} style={styles.dropdownButton} title='Categories'>
          KBHS 
           {showDropdown ? <span>🗙</span> : <span>☰</span>} 
        </button>
        <div
          style={{
            ...styles.dropdownMenu,
            transform: showDropdown ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }}
          
        >
          <Link to="/academics" style={styles.dropdownItem}>Academics</Link>
          <Link to="/admissions" style={styles.dropdownItem}>Admission Form</Link>
          <Link to="/assignments" style={styles.dropdownItem}>Assignments</Link>
          <Link to="/departments" style={styles.dropdownItem}>Departments</Link>
          <Link to="/alumni" style={styles.dropdownItem}>Alumni</Link>
          <Link to="/students" style={styles.dropdownItem}>Students</Link>
          <Link to="/gallery" style={styles.dropdownItem}>Gallery</Link>
          <Link to="/facilities" style={styles.dropdownItem}>Facilities</Link>
          <Link to="/news" style={styles.dropdownItem}>News & Events</Link>
        </div>
      </div>

      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About us</Link></li>
          <li style={styles.navItem}><Link to="/admissions-page" style={styles.navLink}>Admission</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
          <li style={styles.navItem}><Link to="/facilities" style={styles.navLink}>Facilities</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#295E4F',
    padding: '20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButton: {
    backgroundColor: '#295E4F',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap:'10px',
  },
  dropdownMenu: {
    position: 'absolute',
    backgroundColor: '#295E4F',
    border: '1px solid #2e8b57',
    borderRadius: '5px',
    marginTop: '5px',
    zIndex: '1000',
    left: '0',
    top: '100%',
    whiteSpace: 'nowrap',
  },
  dropdownItem: {
    display: 'block',
    padding: '10px',
    color: '#fff', 
    textDecoration: 'none',
    borderBottom: '1px solid #2e8b57',
  },
  dropdownItemLast: {
    borderBottom: 'none',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
  },
  navLink: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Header;