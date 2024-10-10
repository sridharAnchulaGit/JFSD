import React from 'react';
import { NavLink } from 'react-router-dom';
import './about.css';
import { callApi, errorResponse } from './main';
import logouticon from './images/logout.webp';

const HS1 = {"padding-left" : "5px", "font-weight" : "bold"};
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "padding-right" : "10px"};

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            showMoreContent: false,
        };
        this.showMore = this.showMore.bind(this);

        if (this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }

    loadUname(res) {
        try {
            var data = JSON.parse(res);
            if (data && data[0] && data[0].firstname) {
                var HL1 = document.getElementById("HL1");
                HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
            } else {
                console.error('Invalid data format or missing properties');
            }
        } catch (error) {
            console.error('Error parsing response:', error);
        }
    }

    logout() {
        window.location.replace("/");
    }

    showMore() {
        this.setState({
            showMoreContent: true,
        });
    }

    toggleMoreContent = () => {
        this.setState(prevState => ({
            showMoreContent: !prevState.showMoreContent,
        }));
    }

    render() {
        const { showMoreContent } = this.state;

        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>INDIA | Culture Management System</label>
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/states" className="nav-link">States in India</NavLink>
                    <NavLink to="/traditions" className="nav-link">Traditions</NavLink>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content1'>
                    <div className="about-page">
                        <div className='image-container'>
                        </div>
                        <h1>About Indian Culture Management System</h1>
                        <p>Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India, pertaining to the Indian subcontinent until 1947 and the Republic of India post-1947.
                            The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia.
                            India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.
                            Indian culture, often labelled as a combination of several cultures, has been influenced by a history that is several millennia old,
                            beginning with the Indus Valley civilization and other early cultural areas.[1][2] Many elements of Indian culture, such as Indian religions, mathematics, philosophy, cuisine, languages, dance, music and movies have had a profound impact across the Indosphere, Greater India, and the world according to Jean Przyluski,
                            there is evidence for regional influence from Austroasiatic (Mon Khmer) groups on certain cultural and political elements of Ancient India, which may have arrived together with the spread of rice cultivation from Mainland Southeast Asia. An ethnic minority in Eastern India is still speaking Austroasiatic languages, most notably the Munda languages.
                            The British Raj further influenced Indian culture, such as through the widespread introduction of the English language,[5] and a local dialect developed.</p>
                        <button id="learnMoreBtn" onClick={this.toggleMoreContent}>Learn More</button>
                        {showMoreContent && (
                            <div className="additional-content">
                                <p>The word “ethics” has its origin in the Greek word “ethics” meaning character, norms, ideas or morals prevailing in a group or society.
                                 Ethics is concerned with what is right and what is wrong in human behaviour judged on the basis of a standard form conduct/ behaviour of individuals, as approved by society in a particular field of activity.
                                 Ethics may be viewed as the entire body of moral values that society attaches to the actions of human beings.
                                 Ethics can also refer to codes or another system for controlling means so that they serve human ends. 
                                Ethical standards are often enacted into laws. But ethical behaviour is just and fair conduct which goes beyond observing laws and government regulations.
                                It means adhering to moral principles, being guided by particular values, and behaving in a way people ought to act. 
                                The set of principles called ethics may be written or unwritten codes or principles governing a professional or human activity.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='footer'>Copyright © 2024, culture.</div>
            </div>
        );
    }
}

export default About;
