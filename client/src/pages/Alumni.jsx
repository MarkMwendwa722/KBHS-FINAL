import React from 'react';
import Alumni from '../assets/Alumni1.jpg'
import { BiBold } from 'react-icons/bi';
import AlumniEvents from '../components/Alumni/Alumnievent';
import Alumni3 from '../assets/Alumni3.jpg';
import Alumni4 from '../assets/Alumni4.jpg';
import { RxTextAlignBottom } from 'react-icons/rx';
import Cards from "../components/Alumni/Cards"

const AlumniPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
      <div style={styles.heroSection}>
        <p style={styles.text}>Alumni</p>
        </div>
      </header>
      <div style={styles.aboutSection}>
      <div style={styles.imageWrapper}>
        <img src={Alumni3} alt="Nurse" style={styles.image} />
      </div>
      <div style={styles.textContent}>
        <h2>A Success Story</h2>
        <p>Hi there! I'm Emily, a proud alumna of KBHS and now a dedicated nurse. The education and support I received at KBHS were instrumental in my journey. The challenging coursework and encouraging teachers helped me discover my passion for healthcare. With hard work and determination, I pursued a nursing degree and now get to make a difference in people's lives every day. To all current students, I want to say: believe in yourself and never give up. KBHS provides a strong foundation for your future success. With perseverance, you can achieve your dreams, just as I did.</p>
      </div>
      </div>
      <div>
        <AlumniEvents />
        </div>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}></h2>
        <p style={styles.joinText}>Alumni Association</p>
        <button style={styles.joinButton}>Join now</button>
      </section>
    <div>
      <Cards />
      </div>
    </div>
  );
};

  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Arial, san-serif'
    },
    header: {
      textAlign: 'left',
      Color: 'white',
      height: '92vh',
      justifyContent: 'center',
      alignItems: 'center', 
      fontFamily: 'inter, sans-serif',
      fontSize: '60px',
    },
    heroSection: {
      backgroundImage: `url(${Alumni})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '95%', 
      padding: '20px',
      color: 'white',
      backgroundAttachment: 'fixed',
    },
    text: {
      position: 'absolute',
      bottom: '0',
      left: '100px',
      color: '#ffffff', // Text color
      padding: '20px', 
    },
    headerSubtitle: {
      marginTop: '10px',
      color: '#e0ffe0',
    },
    joinText: {
      marginBottom: '20px',
      fontSize: '60px',
      color: 'black',
      fontFamily: 'inter',
    },
    joinButton: {
      backgroundColor: '#295E4F', // Teal-colored button
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1em',
      width: '300px',
    },
    joinButtonHover: {
      backgroundColor: '#1c7e6e',
    },
    footer: {
      textAlign: 'center',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
    },
    footerText: {
      margin: 0,
      color: '#a9d8a9', // Light green
    },
   aboutSection: {
      display: 'flex', 
      alignItems: 'center', 
      padding: '100px',
      backgroundColor: '#f5f5f5',
      gap: '50px', 
      height: '95vh'
    },
    imageWrapper: {
      maxheight: '500px',
      maxWidth: '525px', 
    },
    textContent: {
      flex: '1', // Text content takes up 2 parts of the available space
      padding: '0 80px', // Optional padding for the text content
      textAlign: 'left',
      fontSize: '16px',
      width: '400px',
    },
    image: {
      width: '100%', // Image will fill the image wrapper
      height: 'auto', // Maintain aspect ratio
      borderRadius: '8px', // Optional: Add rounded corners to the image
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add subtle shadow for better appearance
    },
    section: {
      backgroundImage: `url(${Alumni4})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px',
      alignItems: 'center',
      width: '90%',
      height: '60vh',
      justifyContent: 'center',
      position: 'relative',
      left: 30,
      textAlign: 'center',
      marginBottom: '30px',

     
    },
    sectionTitle: {
      color: 'white',
      marginBottom: '130px',
      
    },
  };


export default AlumniPage;
