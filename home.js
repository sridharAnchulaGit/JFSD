import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import logouticon from './images/logout.webp';
import ImagePopup from './ImagePopup';  
import image1 from './images/i1.jpg';
import image2 from './images/i2.jpg';
import image3 from './images/i3.jpg';
import image4 from './images/i4.jpg';
import image5 from './images/i5.webp';
import { callApi, errorResponse, getSession } from './main';


const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = { "float": "right", "paddingRight": "5px", "cursor": "pointer" };
const HS3 = { "float": "right", "height": "16px", "marginTop": "6px", "cursor": "pointer" };
const HS4 = { "float": "right", "paddingRight": "10px" };
const HS5={width:'500px',height:'320px', position:'absolute', right:'470px', top: '480px', "margin-top" : "-320px"};
const HS6={width:'20px',height:'20px', position:'absolute', left:'600px', top: '500px', "margin-top" : "45px"};
const HS7={width:'20px',height:'20px', position:'absolute', right:'630px', top: '500px', "margin-top" : "45px"};
const HS8={width:'200px',height:'20px', position:'absolute', right:'615px', top: '490px', "margin-top" : "50px"};
const HS9 ={width: '250px', height: '200px', position: 'absolute',right:'200px', top: '540px', "margin-top": "-320px", opacity: 0.5, filter: 'blur(0.5px)', transition: 'opacity 0.5s ease-out, filter 0.5s ease-out' };
const HS10 ={width: '170px', height: '150px', position: 'absolute',right:'10px', top: '570px', "margin-top": "-320px", opacity: 0.5, filter: 'blur(1.5px)', transition: 'opacity 0.5s ease-out, filter 0.5s ease-out' };
const HS11={width:'350px',height:'320px', position:'absolute', right:'1010px', top: '500px', "margin-top" : "-320px"};


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          userName: '',
          currentImageIndex: 0,
          welcomeMessage: 'Welcome to the Indian Culture Management System',
          isPopupOpen: false, 
        };
        this.sid = getSession("sid");

        if (this.sid === "")
            window.location.replace("/");

        const urlUname = "http://localhost:5000/home/uname";
        const dataUname = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", urlUname, dataUname, this.loadUname, errorResponse);
        
    }

    loadUname = (res) => {
        var data = JSON.parse(res);
        var fullName = `${data[0].firstname} ${data[0].lastname}`;
        this.setState({ userName: fullName });
    }

    logout() {
        window.location.replace("/");
    }

    goToNextImage = () => {
        const { currentImageIndex } = this.state;
        const images = [image1, image2, image3, image4, image5];
        const nextIndex = (currentImageIndex + 1) % images.length;
        this.setState({ currentImageIndex: nextIndex });
    };

    goToPrevImage = () => {
        const { currentImageIndex } = this.state;
        const images = [image1, image2, image3, image4, image5];
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        this.setState({ currentImageIndex: prevIndex });
    };

     openPopup = (smallImage) => {
    this.setState({ isPopupOpen: true, smallImage });
  };
    
      closePopup = () => {
        this.setState({ isPopupOpen: false });
      };

    categoryNames = ["Food", "Traditions", "Dance", "Heritage", "Art"];
    

    render() {
        const { currentImageIndex } = this.state;
        const images = [image1, image2, image3, image4, image5];
        const firstImageIndex = currentImageIndex % images.length;
        const secondImageIndex = (currentImageIndex + 1) % images.length;
        const thirdImageIndex = (currentImageIndex + 2) % images.length;
        //const fourthImageIndex = (currentImageIndex + 3) % images.length; 
    
        return (
            <div className='full-height'>
                <div className='header'>
                <label style={HS1}>INDIA | Culture Management System</label>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/states" className="nav-link">States in India</NavLink>
                    <NavLink to="/traditions" className="nav-link">Traditions</NavLink>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id="HL1" style={HS4}>{this.state.userName}</label>
                </div>
                <div className='content'>
                    <div className='outlet'>
                        <div className="welcome-text" style={{ animation: 'multicolorAnimation 5s infinite' }}>
                            <h1>{this.state.welcomeMessage}</h1>
                        </div>
                    </div>
                    <div className="image-container" style={{ position: 'relative' }}>
                    <div style={HS11}>
                            <h1 style={{fontSize:'30px'}}>Categories</h1>
                            <p style={{ fontSize: '18px' }}>
                                Choose a category of your choice and Learn India's fascinating tapestry,
                                 from its captivating history and unique regional traditions to the mouthwatering cuisine, 
                                 vibrant arts, and the exciting blend of traditional and modern influences in everyday life.
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', animation: 'floatAnimation 2s infinite' }}>
                        <img src={images[firstImageIndex]} alt={`Slide ${firstImageIndex + 1}`} style={HS5} className='center-image' onClick={this.openPopup} />
                        <img src={images[secondImageIndex]} alt={`Slide ${secondImageIndex + 1}`} style={HS9} className='center-image' onClick={this.openPopup} />
                        <img src={images[thirdImageIndex]} alt={`Slide ${thirdImageIndex + 1}`} style={HS10} className='center-image' onClick={this.openPopup} />
                        </div>
                    </div>

                <div className="slider-container">
                    <button className="slider-arrow left" onClick={this.goToPrevImage} style={HS6}>&lt;</button>
                    <div className="slider-text" style={{ ...HS8, textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                        {`${this.categoryNames[firstImageIndex]}`}
                        </div>
                        <button className="slider-arrow right" onClick={this.goToNextImage} style={HS7}>&gt;</button>
                    </div>
                </div>
                    {this.state.isPopupOpen && (
                    <ImagePopup
                        category={this.categoryNames[firstImageIndex]}
                        imageUrl={images[this.state.currentImageIndex]}
                        onClose={this.closePopup}
                    />
                    )}
                <div className='footer'>
                    Copyright @ Indian Culture. All rights reserved.
                </div>
            </div>
        );
    }
    
   
}

export default Home;
