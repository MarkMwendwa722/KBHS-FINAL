import React from 'react';
import './NewsCard.css';
import games from '../../assets/games.jpg';
import lab from '../../assets/lab.jpg';
import art from '../../assets/art.jpg';

const newsData = [
  {
    id: 1,
    title: 'School Sports Day Announced',
    description: 'The much-anticipated School Sports Day will take place on the 25th of September. Get ready for an exciting day filled with competitive sports and team spirit!',
    image: games
  },
  {
    id: 2,
    title: 'New Science Lab Inauguration',
    description: 'Our state-of-the-art science lab is now open. Students can now experience advanced experiments and learning.',
    image: lab
  },
  {
    id: 3,
    title: 'Annual Art Exhibition',
    description: 'Join us for the Annual Art Exhibition, showcasing incredible artworks from our talented students.',
    image: art
  },
];

const NewsCard = () => {
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
    display: 'grid', // Grid layout to display news cards in a neat format
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
    width: '100%', // Adjust width to be responsive
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

export default NewsCard;