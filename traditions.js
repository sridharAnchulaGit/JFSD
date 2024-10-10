//tradition.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './traditions.css';
import image1 from './images/greetings.jpg';
import image2 from './images/religious.jpg';
import image3 from './images/festivals.jpg';
import image5 from './images/symbols.jpg';
import image6 from './images/dances.jpg';
import image8 from './images/martial.jpg';
import image9 from './images/music.jpg';
import image10 from './images/food.jpg';
import image11 from './images/traditional.jpg';
import image12 from './images/epics.jpg';
import image13 from './images/language.jpg';
import image14 from './images/art.jpg';
import image15 from './images/yoga.jpg';




const HS1 = { "padding-left": "5px", "font-weight": "bold" };

const Traditions = () => {
  const [selectedTradition, setSelectedTradition] = useState(null);
  const traditionsList = [
    'Traditional Clothing',
    'Dances of India',
    'Music & Instruments',
    'Epics & Mythology',
    'Martial Arts',
    'Languages',
    'Art & Craft',
    'Greetings',
    'Religious Customs',
    'Festivals of India',
    'Symbols',
    'Cuisine & Food',
    'Ayurveda & Yoga',
    'Architecture',
    'Science & Technology',
    'Education System',
    'Environmental Practices',
    'Social Etiquette',
    'Philosophy & Wisdom',
  ];

  const traditionsContent = {
    'Greetings': (
        <div>
          <h3>Greetings in Indian Culture</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image1} alt="Namaste Greeting" className="greeting-image" />
              </div>
            </li>
          </ul>
          <li>Experience the diverse ways of greeting in Indian culture, where each gesture holds significance. One of the common greetings is 'Namaste,' symbolizing respect and acknowledgment.</li>
          
          <li>Customs and Variations: Explore the variations of greetings across different regions and communities in India. Each state and culture may have its unique way of expressing greetings, adding to the cultural diversity of the country.</li>
          
          <li>Occasions and Significance: Discuss how greetings play a crucial role in various occasions, such as weddings, festivals, and religious ceremonies. Understanding the context in which greetings are exchanged provides insight into the cultural fabric of India.</li>
        </div>
      ),
      
      'Religious Customs': (
        <div>
          <h3>Religions in Indian Culture</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image2} alt="Religious" className="religious" />
              </div>
            </li>
          </ul>
          <li>India is known for its rich tapestry of religions, including Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism. Explore the diverse religious customs and practices that contribute to the cultural mosaic of the country.</li>
          
          <li>Sacred Rituals: Dive deeper into specific religious rituals and practices observed by different communities. Highlight the significance of these customs in fostering a sense of spirituality and community.</li>
          
          <li>Interfaith Harmony: Emphasize the coexistence of multiple religions in India and how the country is a shining example of religious tolerance and harmony. Explore instances where different religious communities come together to celebrate shared values.</li>
        </div>
      ),
      
      'Festivals of India': (
        <div>
          <h3>Festivals in Indian Culture</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image3} alt="Festivals" className="festivals" />
              </div>
            </li>
          </ul>
          <li>Celebrate the vibrancy of Indian festivals, each marked by unique traditions, rituals, and joyous celebrations. From Diwali, the festival of lights, to Holi, the festival of colors, discover the cultural significance of these festive occasions.</li>
          
          <li>Regional Celebrations: Introduce readers to the regional variations in festival celebrations. Different states may have unique ways of commemorating the same festival, showcasing the diverse cultural landscape.</li>
          
          <li>Traditional Cuisine: Explore the culinary delights associated with each festival. Food is an integral part of Indian celebrations, and each festival brings a unique array of traditional dishes.</li>
        </div>
      ),
      
      'Symbols': (
        <div>
          <h3>Symbols in Indian Culture</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image5} alt="Symbols" className="symbols" />
              </div>
            </li>
          </ul>
          <li>Delve into the symbolism embedded in various aspects of Indian culture. From auspicious symbols like the 'Om' to national symbols like the Ashoka Chakra, each holds a deep cultural and historical meaning.</li>
          
          <li>Artistic Expressions: Discuss how symbols are not only religious or national but also find expression in various art forms. From classical dance to traditional paintings, symbols are woven into the artistic heritage of India.</li>
          
          <li>Modern Context: Highlight how these symbols continue to play a role in contemporary India. Whether in fashion, design, or popular culture, these symbols maintain their relevance and contribute to the nation's identity.</li>
        </div>
      ),
      
      'Music & Instruments': (
        <div>
          <h3>Music & Instruments</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image9} alt="Music & Instruments" className="music" />
              </div>
              <h3>Explore the rich heritage of Indian music and instruments. Here's a list of some of the best Indian songs:</h3>
              <ul>
                <li>"Mile Sur Mera Tumhara" - A patriotic song celebrating unity</li>
                <li>"Tere Bina" - A soulful melody by A.R. Rahman</li>
                <li>"Lag Ja Gale" - A classic romantic song by Lata Mangeshkar</li>
                <li>"Vande Mataram" - The national song of India</li>
                <li>"Tum Hi Ho" - A chartbuster from Aashiqui 2</li>
                <li>"Jai Ho" - The Oscar-winning song from Slumdog Millionaire</li>
                <li>"Mere Haath Mein" - A beautiful song from Fanaa</li>
                <li>"Kabira" - A soul-stirring song from Yeh Jawaani Hai Deewani</li>
                <li>"Chaiyya Chaiyya" - An energetic and iconic song from Dil Se</li>
                <li>"Jeene Laga Hoon" - A romantic track from Ramaiya Vastavaiya</li>
              </ul>
              <h3>Indian music is known for its diverse range of instruments. Some popular types include:</h3>
        <ul>
          <li>Sitar - A plucked string instrument</li>
          <li>Tabla - A pair of drums</li>
          <li>Flute - A wind instrument</li>
          <li>Sarod - Another type of string instrument</li>
          <li>Veena - A traditional South Indian string instrument</li>
        </ul>
        <h3>These instruments, along with others, contribute to the vibrant and rich musical culture of India.</h3>
            </li>
          </ul>
        </div>
      ),
      'Cuisine & Food': (
        <div>
          <h3>Cuisine & Food</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image10} alt="Cuisine & Food" className="food-image" />
              </div>
            </li>
          </ul>
          <h3>Discover the diverse and flavorful cuisine of India:</h3>
          <ul>
            <li>Indian cuisine is known for its rich spices and vibrant flavors.</li>
            <li>Some popular dishes include Biryani, Butter Chicken, and Masala Dosa.</li>
            <li>Don't forget to try the various types of Indian bread like Naan and Roti.</li>
            <li>Indulge in a variety of sweets such as Gulab Jamun and Jalebi.</li>
            <li>Each region in India has its unique culinary specialties.</li>
          </ul>
        </div>
      ),
      'Traditional Clothing': (
        <div>
          <h3>Traditional Clothing</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image11} alt="Traditional Clothing" className="clothing-image" />
              </div>
            </li>
          </ul>
          <h3>Experience the cultural diversity through traditional Indian clothing:</h3>
          <ul>
            <li>Traditional clothing varies across regions and communities in India.</li>
            <li>Common traditional attire for women includes sarees and salwar kameez.</li>
            <li>Men often wear dhoti, kurta, or sherwani for special occasions.</li>
            <li>Explore the vibrant colors and intricate designs in Indian textiles.</li>
            <li>Clothing choices often reflect cultural, religious, and regional influences.</li>
          </ul>
        </div>
      ),
      'Epics & Mythology': (
        <div>
          <h3>Epics & Mythology</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image12} alt="Epics & Mythology" className="epics-image" />
              </div>
            </li>
          </ul>
          <h3>Delve into the rich tapestry of Indian epics and mythology:</h3>
          <ul>
            <li>Explore ancient Indian epics like the Mahabharata and Ramayana.</li>
            <li>Discover the fascinating stories of gods, goddesses, and mythical creatures.</li>
            <li>Understand the moral and spiritual lessons embedded in these epic narratives.</li>
            <li>Witness the symbolic significance of various characters and events.</li>
            <li>Epics play a crucial role in shaping cultural and moral values in Indian society.</li>
          </ul>
        </div>
      ),
      'Languages': (
        <div>
          <h3>Languages</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image13} alt="Languages" className="languages-image" />
              </div>
            </li>
          </ul>
          <h3>Explore the linguistic diversity of India:</h3>
          <ul>
            <li>India is home to a vast array of languages, each with its unique script and dialects.</li>
            <li>Hindi, Bengali, Telugu, Marathi, and Tamil are among the most spoken languages.</li>
            <li>Discover the cultural and historical significance of various regional languages.</li>
            <li>Language plays a crucial role in preserving the heritage and identity of different communities.</li>
            <li>India's linguistic landscape reflects its rich cultural mosaic.</li>
          </ul>
        </div>
      ),
      'Art & Craft': (
        <div>
          <h3>Art & Craft</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image14} alt="Art & Craft" className="art-craft-image" />
              </div>
            </li>
          </ul>
          <h3>Appreciate the artistic expressions through Indian art and craft:</h3>
          <ul>
            <li>Indian art includes a variety of traditional and contemporary forms, from paintings to sculptures.</li>
            <li>Explore the intricate craftsmanship in textiles, pottery, and jewelry.</li>
            <li>Learn about different art forms such as Madhubani painting, Kalamkari, and Tanjore art.</li>
            <li>Art and craft traditions vary across regions, showcasing diverse cultural influences.</li>
            <li>Artistic expressions are deeply rooted in India's history, religion, and folklore.</li>
          </ul>
        </div>
      ),
      'Ayurveda & Yoga': (
        <div>
          <h3>Ayurveda & Yoga</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image15} alt="Ayurveda & Yoga" className="ayurveda-yoga-image" />
              </div>
            </li>
          </ul>
          <h3>Embrace the holistic approach to well-being with Ayurveda and Yoga:</h3>
          <ul>
            <li>Ayurveda is an ancient system of medicine focusing on natural healing and balance.</li>
            <li>Yoga offers a holistic approach to physical, mental, and spiritual well-being.</li>
            <li>Discover the principles of Ayurveda for a healthy lifestyle and prevention of ailments.</li>
            <li>Explore various yoga practices, including asanas, pranayama, and meditation.</li>
            <li>Ayurveda and Yoga are integral parts of India's cultural and spiritual heritage.</li>
          </ul>
        </div>
      ),
    
      'Dances of India': (
        <div>
          <h3>Dances in Indian Culture</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image6} alt="Dances of India" className="dances-image" />
              </div>
            </li>
          </ul>
          <h3>Experience the vibrant and diverse dance forms of India:</h3>
          <ul>
            <li>Classical dances like Bharatanatyam, Kathak, Odissi, Kuchipudi, and Mohiniyattam showcase grace and storytelling.</li>
            <li>Folk dances vary across regions, each depicting the cultural nuances and traditions of specific communities.</li>
            <li>Bollywood and contemporary dance forms add a modern and dynamic touch to India's dance repertoire.</li>
            <li>Dance is not just a performance art but a means of expressing emotions, stories, and spiritual devotion.</li>
            <li>Participate in the rhythmic celebration that is an integral part of Indian festivals and ceremonies.</li>
          </ul>
        </div>
      ),
      'Martial Arts': (
        <div>
          <h3>Martial Arts in Indian Culture</h3>
          <ul className="no-bullets">
            <li>
              <div className="image-container">
                <img src={image8} alt="Martial Arts" className="martial-arts-image" />
              </div>
            </li>
          </ul>
          <h3>Explore the ancient and diverse martial arts traditions of India:</h3>
          <ul>
            <li>Kalaripayattu, believed to be one of the oldest martial arts, originated in Kerala and focuses on strikes, kicks, and weaponry.</li>
            <li>Silambam, a traditional stick-fighting martial art, has roots in South India and showcases agility and coordination.</li>
            <li>Thang-Ta, a martial art form from Manipur, combines armed and unarmed combat techniques.</li>
            <li>Mardani Khel, an ancient form of armed martial arts, was practiced by Rajput women for self-defense.</li>
            <li>Discover how martial arts are deeply embedded in India's historical and cultural narrative.</li>
          </ul>
        </div>
      ),
  };
  

  const handleTraditionClick = (tradition) => {
    setSelectedTradition(tradition);
  };

  const scrollLeft = () => {
    document.querySelector('.traditions-menu').scrollLeft -= 100;
  };

  const scrollRight = () => {
    document.querySelector('.traditions-menu').scrollLeft += 100;
  };

  return (
    <div className="traditions-container">
      <div className='header'>
      <label style={HS1}>INDIA | Culture Management System</label>
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/states" className="nav-link">States in India</NavLink>
                    <NavLink to="/traditions" className="nav-link">Traditions</NavLink>
      </div>
      <div className="traditions-menu">
        <ul>
          {traditionsList.map((tradition, index) => (
            <li key={index} onClick={() => handleTraditionClick(tradition)} className={selectedTradition === tradition ? 'selected' : ''}>
              {tradition}
            </li>
          ))}
        </ul>
        <div className="swipe-arrow" onClick={scrollLeft}>&lt;</div>
        <div className="swipe-arrow" onClick={scrollRight}>&gt;</div>
      </div>
      <div className="traditions-content">
        {selectedTradition && traditionsContent[selectedTradition]}
      </div>
    </div>
  );
};

export default Traditions;
