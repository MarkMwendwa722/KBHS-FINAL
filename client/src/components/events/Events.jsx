import React from 'react';
import image1 from '../../assets/event1.jpg';
import image2 from '../../assets/event2.jpg';
import image3 from '../../assets/event3.jpg';
import image4 from '../../assets/event4.jpg';

const events = [
  {
    title: 'Science Fair 2024',
    date: 'March 15, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'School Auditorium',
    description: 'Join us for our annual Science Fair showcasing innovative projects from students across all grades.',
    imageUrl: image1
    
  },
  {
    title: 'Art Exhibition',
    date: 'April 5, 2024',
    time: '1:00 PM - 5:00 PM',
    location: 'Main Hall',
    description: 'An exhibition of stunning artworks created by students, featuring painting, sculpture, and photography.',
    imageUrl:  image2
    
  },
  {
    title: 'Dinner Night',
    date: 'May 20, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'School Theater',
    description: 'A delightful evening of performances from our school’s talented musicians and choir.',
    imageUrl: image3
    
  },
  {
    title: 'Tech event',
    date: 'June 23, 2024',
    time: '8:00 Am - 5:00 Pm',
    location: 'Tech Arena',
    description: 'Tech event to help you brush up on your skills and display your talent in the IT world',
    imageUrl: image4
  }
];

const EventSection = () => {
  return (
    <div style={styles.section}>
      <h2 style={styles.title}>Upcoming Events</h2>
      <div style={styles.eventList}>
        {events.map((event, index) => (
          <div key={index} style={styles.eventCard}>
            <div style={{ ...styles.imageWrapper, backgroundImage: `url(${event.imageUrl})` }}>
              <div style={styles.caption}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventDate}>{event.date}</p>
              </div>
            </div>
            <a href={event.link} style={styles.moreDetailsLink}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
    section: {
      padding: '40px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    title: {
      fontSize: '28px',
      marginBottom: '20px',
    },
    eventList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Grid layout with auto-resizing columns
      gap: '20px',
    },
    eventCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for box effect
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    eventCardHover: {
      transform: 'scale(1.05)',
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      height: '250px', // Increase the image height
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    caption: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    eventTitle: {
      fontSize: '20px', // Increase font size
      margin: '0',
    },
    eventDate: {
      margin: '5px 0 0 0',
      fontSize: '16px', // Increase font size
    },
    moreDetailsLink: {
      display: 'block',
      margin: '10px',
      textDecoration: 'none',
      color: '#2e8b57',
      fontWeight: 'bold',
      padding: '10px 0', // Add padding for spacing
    },
  };
 

export default EventSection;