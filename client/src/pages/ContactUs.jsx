import { useState } from 'react';
import axios from 'axios';
import image from '../assets/image5.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // New state to handle success message visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    try {
      // Send the actual user input from formData, not static dummy data
      const response = await axios.post(
        'http://127.0.0.1:8000/contact/',
        formData,  // Use formData which holds the user input
        { 
          headers: {
            'Authorization': 'Token e1e1d097a1f3890a1d3a95a6fed57f296f24d4ba', 
            'Content-Type': 'application/json' 
          }
        }
      );

      // Handle the response
      console.log('Response:', response);

      // Show success message and clear form fields
      setSuccessMessage("Message Sent!");  // Display message on the screen
      setFormData({
        name: '',
        email: '',
        message: '',
      });  // Reset form fields

      // Hide the success message after 3 seconds (optional)
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

    } catch (error) {
      // Handle error
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      } else {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <p style={styles.description}>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
      <div style={styles.contentWrapper}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              style={styles.textarea}
              required
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        <div style={styles.imageWrapper}>
          <img src={image} alt="Contact us" style={styles.image} />
          <p style={styles.caption}>Email:email@gmail.com</p>
          <p style={styles.caption}>Tel:0712345678</p>
        </div>
      </div>
      
      {/* Success Message */}
      {successMessage && (
        <div style={styles.successMessage}>
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#2e8b57',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  form: {
    flex: '1',
    marginRight: '20px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '8px',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',   
    border: '2px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #ccc',
    minHeight: '150px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#2e8b57',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imageWrapper: {
    flex: '2',
    maxWidth: '450px',
  },
  image: {
    width: '100%',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  mapSection: {
    marginTop: '40px',
  },
  mapTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  map: {
    width: '100%',
    height: '400px',
    border: '0',
  },
  caption: {
    textAlign: 'left',
    padding: '5px',
  },
  successMessage: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export default ContactUs;
