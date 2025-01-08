import EventSection from '../components/events/Events';
import image from '../assets/Image.JPG';
import image2 from '../assets/Aboutus.JPG';
import NewsCard from '../components/news/News';
import React from 'react';

const HomePage = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <main style={styles.mainContent}>
          <h2>Welcome to Our School</h2>
          <p>
            <b>
              At KBHS High School, we believe in empowering our students to reach
              their full potential. Our dedicated faculty, state-of-the-art facilities,
              and diverse programs ensure that every student thrives academically,
              socially, and emotionally. Join us in our commitment to excellence and a brighter future.
            </b>
          </p>
          <button style={styles.button}
           onClick={() => redirectTo('/Admissions')}>
            Enroll now
            </button>
        </main>
      </div>

      <div style={styles.aboutSection}>
      <div style={styles.imageWrapper}>
        <img src={image2} alt="About Us" style={styles.image} />
      </div>
      <div style={styles.textContent}>
        <h2><b>ABOUT US</b></h2>
        <p>
          KBHS High School is dedicated to fostering a vibrant educational environment where 
          every student is encouraged to achieve academic excellence, develop personal integrity, 
          and become a responsible, global citizen. With a commitment to innovative teaching methods, 
          diverse extracurricular programs, and a supportive community, we empower our students to thrive 
          and succeed in a rapidly changing world.
        </p>
        <button style={styles.button}
        onClick={() => redirectTo('/About')}>Learn more</button>
      </div>
    </div>

      <div style={styles.missionVisionContainer}>
        <div style={styles.missionSection}>
          <h2><b>OUR MISSION</b></h2>
          <p>
            KBHS High School aims to provide a supportive and challenging environment that fosters academic excellence, personal integrity, and global citizenship. We are dedicated to nurturing lifelong learners and critical thinkers who are prepared for a dynamic future.
          </p>
        </div>

        <div style={styles.visionSection}>
          <h2><b>OUR VISION</b></h2>
          <p>
            Our vision is to be a top educational institution in Kenya, known for academic excellence and holistic development. We strive to inspire students to be passionate learners and responsible leaders who positively impact their communities.
          </p>
        </div>    
      </div>

       
       <div style={styles.eventsSection}>
        <EventSection /> 
      </div>

    <div>
        <NewsCard />
    </div>

    
    <div className="container mx-auto p-2">
  {/* FAQ Section */}
  <h2 className="text-center text-2xl font-bold mb-4">Frequently Asked Questions</h2>
  

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* FAQ List */}
    <div className="space-y-4">
      <details className="p-4 bg-white rounded-md shadow">
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>What are the admission requirements?</span>
          <span className="text-blue-500 text-lg">+</span>
        </summary>
        <p className="pt-2 text-gray-600 text-sm">
        Admission requirements include a completed application form, recent academic transcripts, and a letter of recommendation. For more details, please visit our Admissions page.
        </p>
      </details>

      <details className="p-4 bg-white rounded-md shadow">
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>How do I apply for admission?</span>
          <span className="text-blue-500 text-lg">+</span>
        </summary>
        <p className="pt-2 text-gray-600 text-sm">
        You can apply for admission by filling out the online application form available on our website. Additionally, you will need to submit required documents as outlined in the application guidelines.
        </p>
      </details>

      <details className="p-4 bg-white rounded-md shadow">
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>How to Contact Us?</span>
          <span className="text-blue-500 text-lg">+</span>
        </summary>
        <p className="pt-2 text-gray-600 text-sm">
          You can contact us via email or by filling out the contact form available on our website.
        </p>
      </details>

      <details className="p-4 bg-white rounded-md shadow">
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>Trust Level of Feedback Application?</span>
          <span className="text-blue-500 text-lg">+</span>
        </summary>
        <p className="pt-2 text-gray-600 text-sm">
          Our Feedback Application is trusted by over 1000 organizations globally for its accuracy and efficiency.
        </p>
      </details>

      <details className="p-4 bg-white rounded-md shadow">
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>What are the school's hours of operation?</span>
          <span className="text-blue-500 text-lg">+</span>
        </summary>
        <p className="pt-2 text-gray-600 text-sm">
        The school operates from 8:00 AM to 3:00 PM, Monday through Friday. Office hours are from 7:30 AM to 4:00 PM.
        </p>
      </details>

      <details className="p-4 bg-white rounded-md shadow">
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>Why should your organization use Feedback Application?</span>
          <span className="text-blue-500 text-lg">+</span>
        </summary>
        <p className="pt-2 text-gray-600 text-sm">
          It provides detailed reports, tracking mechanisms, and easy communication between teams.
        </p>
      </details>
    </div>

  {/* Any Question Section */}
  <div className="flex flex-col items-center bg-white p-6 rounded-md shadow">
  <p className="text-center text-xl font-medium text-gray-800 mt-6 mb-8 max-w-2xl mx-auto">
  If you have any questions or need more information, we're here to help! Reach out to us through our Contact form, and we'll get back to you as soon as possible.
</p>
            <button
              onClick={() => redirectTo('/Contact')}
              className="bg-custom-green text-white py-2 px-4 rounded-full hover:bg-green-700"
            >
              Contact Us
              </button>
              </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, san-serif',
  },
  heroSection: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '95%', // Adjusted height for the background section
    padding: '20px',
    color: '#fff',
    backgroundAttachment: 'fixed',
  },
  mainContent: {
    textAlign: 'center',
    padding: '10%',
    maxWidth: '800px',
    color: 'white',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center', // Vertically centers the content
    margin: '0 auto', // Horizontally centers the content (if maxWidth is in use)
  },

  aboutSection: {
    display: 'flex', 
    alignItems: 'center', 
    padding: '100px',
    backgroundColor: '#f5f5f5',
    gap: '50px', 
    height: '100vh'
  },
  imageWrapper: {
    flex: '1', // Allow the image to take up 1 part of the available space
    maxWidth: '300px', // Control the maximum width of the image
  },
  image: {
    width: '100%', // Image will fill the image wrapper
    height: 'auto', // Maintain aspect ratio
    borderRadius: '8px', // Optional: Add rounded corners to the image
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add subtle shadow for better appearance
  },
  textContent: {
    flex: '2', // Text content takes up 2 parts of the available space
    padding: '0 80px', // Optional padding for the text content
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

  missionVisionContainer: {
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: '20px',
  },
  missionSection: {
    width: '45%',
    padding: '20px',
    backgroundColor: '#e0e0e0', // Light grey background to separate from other sections
    borderRadius: '8px',
  },
  visionSection: {
    width: '45%',
    padding: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
  }, 
};

export default HomePage;