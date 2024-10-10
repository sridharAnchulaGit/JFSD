// ImagePopup.js
import React from 'react';
import './ImagePopup.css';

const contentByCategory = {
  Food: {
    title: 'Food Category',
    paragraphs: [
      'Indulge in the rich and diverse culinary delights of India. From the spicy flavors of street food to the aromatic curries, experience a journey through the country\'s gastronomic wonders.',
      'Discover the unique blend of spices, herbs, and cultural influences that make Indian cuisine a celebration of flavors and traditions.'
    ],
    description: 'To know more about it please do watch below video',
    videoId: '0qSm029ROn4',
  },
  Traditions: {
    title: 'Traditions Category',
    paragraphs: [
      'Immerse yourself in the tapestry of cultural traditions that have been passed down through generations in India.',
      'From vibrant festivals to age-old rituals, explore the depth and diversity of customs that contribute to the rich heritage of the country.'
    ],
    description: 'To know more about it please do watch below video',
    videoId: 'HDj7muZJQHY',
  },
  Dance: {
    title: 'Dance Category',
    paragraphs: [
      'Experience the rhythmic beats and captivating movements of Indian dance forms.',
      'From classical Kathak to energetic Bollywood styles, each dance tells a story and reflects the cultural richness of India.'
    ],
    description: 'To know more about it please do watch below video',
    videoId: 'JWhA3ldZcyY',
  },
  Heritage: {
    title: 'Heritage Category',
    paragraphs: [
      'Embark on a journey through the historical heritage and architectural marvels of India.',
      'Discover the stories behind ancient monuments, palaces, and temples that stand as testaments to the country’s rich past and cultural diversity.'
    ],
    description: 'To know more about it please do watch below video',
    videoId: 'FQ1z1397TbY',
  },
  Art: {
    title: 'Art Category',
    paragraphs: [
      'Immerse yourself in the vibrant world of Indian art and creativity.',
      'From traditional paintings to contemporary sculptures, witness the diverse expressions of artists that capture the essence of India’s artistic soul.'
    ],
    description: 'To know more about it please do watch below video',
    videoId: '5xpJeO_syN4C',
  },
};

const ImagePopup = ({ category, onClose }) => {
  const { title, paragraphs , videoId, description } = contentByCategory[category];
  const videoLink = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="image-popup-overlay">
      <div className="image-popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h1>{title}</h1>
        <p style={{textAlign: 'justify',fontSize:'10pt'}}>{paragraphs}</p>
        <h3>{description}</h3>
        {videoId && (
          <div className="popup-video">
            <iframe
              title={`${title} Video`}
              width="320"  
              height="180" 
              src={videoLink}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePopup;
