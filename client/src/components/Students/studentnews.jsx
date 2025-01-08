import React from 'react';
import './StudentNews.css';  // Renamed the CSS file to match the component name
import image from '../../assets/Alumni2.jpg';  // Assuming this is the correct image path

const newsData = [
  {
    id: 1,
    title: 'KBHS Students Excel In Science Fair',
    description:
      "Our students excelled at the State Science Fair, winning top honors for their innovative projects. Their success highlights KBHS's strong focus on STEM education and critical thinking.",
    image: image,
    link: '#', // Placeholder link
  },
  {
    id: 2,
    title: 'KBHS Hosts Annual Cultural Day',
    description:
      "The annual cultural day was a celebration of diversity and inclusion, with students showcasing talents through performances, art, and culinary presentations from various cultures.",
    image: image,
    link: '#', // Placeholder link
  },
  {
    id: 3,
    title: 'KBHS Robotics Team Wins Regional Competition',
    description:
      "Our robotics team made us proud by winning the regional robotics competition. Their innovation, teamwork, and problem-solving skills were on full display.",
    image: image,
    link: '#', // Placeholder link
  },
];

const StudentNews = () => {
  return (
    <div style={styles.newsContainer}>
      {newsData.map((news) => (
        <div key={news.id} style={styles.card}>
          <img src={news.image} alt={news.title} style={styles.image} />
          <div style={styles.cardContent}>
            <h3 style={styles.title}>{news.title}</h3>
            <p style={styles.description}>{news.description}</p>
            <a href={news.link} style={styles.link}>Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  newsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    justifyItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '15px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#2e8b57',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#2e8b57',
    fontWeight: 'bold',
  },
};

export default StudentNews;
