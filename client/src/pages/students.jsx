import React from "react";
import image2 from "../assets/students1.jpg";
import image1 from "../assets/Students.JPG";
import Studentnews from "../components/Students/studentnews";
import Studentsleaders from "../components/Students/Studentsleaders";
import Clubs from "../components/Students/Clubs"


const Students = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <p style={styles.text}>Students</p>
      </div>

      <div style={styles.aboutSection}>
        <div style={styles.imageWrapper}>
          <img src={image2} alt="students" style={styles.image} />
        </div>
        <div style={styles.textContent}>
          <h2><b>STUDENT LIFE</b></h2>
          <p>
            At KBHS High School, student life is vibrant and dynamic, fostering both academic and personal growth. Students participate in diverse extracurricular activities, from sports and arts to science clubs and community service. The supportive environment encourages collaboration, creativity, and leadership, ensuring every student can explore their interests and develop their talents.
          </p>
        </div>
      </div>


      <div>
        <Studentsleaders />
      </div>

        <div>
        <Clubs />
        </div>
      <div>
        <Studentnews />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  heroSection: {
    backgroundImage: `url(${image1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '93vh',
    padding: '10px',
    color: '#fff',
    backgroundAttachment: 'fixed',
  },
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '100px',
    backgroundColor: '#f5f5f5',
    gap: '50px',
    height: '100vh',
  },
  imageWrapper: {
    flex: '2',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  textContent: {
    flex: '2',
    padding: '0 80px',
    textAlign: 'left',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#295E4F',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  text: {
    position: 'absolute',
    bottom: '0',
    left: '100px',
    color: '#ffffff', 
    padding: '20px', 
    fontSize: '60px',
  },
};

export default Students;
