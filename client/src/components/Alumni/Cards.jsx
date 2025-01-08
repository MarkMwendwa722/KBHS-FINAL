import React from "react";
import { BsJustify } from "react-icons/bs";

const Card = ({ title }) => {
  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: '#295E4F',
    display:'grid',
    placeItems:'center',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    margin: '10px',
    flex:'1',
    height:'100%'
  },
  title: {
    fontSize: '20px',
    margin: 0,
  },
  header: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: '30px',
  },
  cardsWrapper: {
    display: 'flex', 
    gap: '7px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '896px', 
    height: '226px', 
    top: '2498px',
    margin: '0 auto', 
    padding: '40px',
  },
};

const CardContainer = () => {
  const cardsData = [
    'Mentorship programs',
    'Guest speaking',
    'Monetary donations',
  ];

  return (
    <div>
      <h2 style={styles.header}>How to give back</h2>
      <div style={styles.cardsWrapper}>
        {cardsData.map((cardTitle, index) => (
          <Card key={index} title={cardTitle} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
