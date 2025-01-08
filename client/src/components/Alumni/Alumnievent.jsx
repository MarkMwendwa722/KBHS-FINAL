import React from 'react';
import Alumni2 from '../../assets/Alumni2.jpg'

const AlumniEvents = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    },
    section: {
      padding: '20px',
      marginBottom: '20px',
      borderRadius: '8px',
    },
    sectionTitle: {
        textAlign: 'center',
        color: 'black',
        marginBottom: '20px',
        fontWeight: 'bold',   
        fontSize: '50px',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '20px',
    },
    card: {
      backgroundColor: 'grey',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    cardImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '15px',
      
    },
    eventTitle: {
      margin: '0 0 10px 0',
      fontSize: '18px',
      
    },
    eventDescription: {
      margin: '0 0 10px 0',
      fontSize: '14px',
      
    },
    eventDate: {
      fontSize: '12px',
      
    },
  };

  const events = [
    {
      title: 'Alumni Reunion Gala',
      description: 'Reconnect and celebrate with old friends and teachers.',
      date: 'November 25, 2024',
      imageUrl: Alumni2, 
    },
    {
      title: 'Career Networking Event',
      description: 'A great opportunity to share and gain professional advice.',
      date: 'January 15, 2025',
      imageUrl:  Alumni2,
    },
    {
      title: 'Alumni Sports Day',
      description: 'Relive the glory days with fun and friendly games.',
      date: 'March 10, 2025',
      imageUrl:  Alumni2,
    },
  ];

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}> Alumni Events</h2>
        <div style={styles.cardGrid}>
          {events.map((event, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventDescription}>{event.description}</p>
                <p style={styles.eventDate}>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AlumniEvents;
