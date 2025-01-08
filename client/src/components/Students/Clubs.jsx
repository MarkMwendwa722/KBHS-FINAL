import React from "react";


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
      display: 'grid',
      placeItems: 'center',
      color: 'white',
      padding: '20px',
      margin: '10px',
      flex: '2',
      height: '100%',
      top: '2538px',
      
      // Updated to display two cards per row
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gridAutoRows: 'minmax(100px, auto)', 
      gap: '20px', // Space between the cards
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
      display: 'ruby', 
      gap: '2px',
      justifyContent: 'center', // Changed from justifyItems for flex alignment
      alignItems: 'center',
      Maxwidth: '1171px', 
      height: '534px', 
      top: '1878px',
      left: '134px', 
      padding: '40px',

    },
  };
  

const CardContainer = () => {
  const cardsData = [
    'Math club',
    'Science club',
    'Chess club',
    'Wildlife club',
  ];

  return (
    <div>
      <h2 style={styles.header}>Our Clubs</h2>
      <div style={styles.cardsWrapper}>
        {cardsData.map((cardTitle, index) => (
          <Card key={index} title={cardTitle} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
