import React from 'react';
import './state.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './images/menu.jpg';
import andhraPradesh from './images/states/ap.png';
import arunachalPradesh from './images/states/arunachal.gif';
import assam from './images/states/assam.jpg';
import bihar from './images/states/bihar.jpg';
import chhattisgarh from './images/states/chhattisgarh.png';
import goa from './images/states/goa.png';
import gujarat from './images/states/gujarat.jpg';
import haryana from './images/states/haryana.png';
import hima from './images/states/hima.png';
import jhar from './images/states/jhar.png';
import Karnataka from './images/states/Karnataka.jpg';
import kerala from './images/states/kerala.jpg';
import maha from './images/states/maha.png';
import mani from './images/states/mani.jpg';
import megha from './images/states/megha.png';
import mizo from './images/states/mizo.png';
import mp from './images/states/mp.gif';
import nagaland from './images/states/nagaland.png';
import odisha from './images/states/odisha.jpg';
import punjab from './images/states/punjab.png';
import raj from './images/states/raj.jpg';
import sikkim from './images/states/sikkim.jpg';
import tamil from './images/states/tamil.jpg';
import telangana from './images/states/telangana.webp';
import tripura from './images/states/tripura.jpg';
import uk from './images/states/uk.jpg';
import up from './images/states/up.png';
import west from './images/states/west.jpg';
import { NavLink } from 'react-router-dom';
import logouticon from './images/logout.webp';


const HS1 = { "padding-left": "5px", "font-weight": "bold" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "padding-right" : "10px"};


class AndhraPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container" >
                <div className="text-container" style={{ fontSize: '11.5px',textAlign: 'justify'  }}>
                    <h2>Andhra Pradesh Information</h2>
                    <p>
                        The state of Andhra Pradesh, sometimes referred to as the "Rice Bowl of India," serves as a sort of cultural melting pot.
                        A variety of dynasties and empires have ruled over this area. The culture of Andhra Pradesh has been profoundly influenced by
                        this broad exposure to the customs and cultures of the empires. In addition, Rajahmundry, named for Raja Raja Narendra, the
                        head of the Chalukya kingdom in the eleventh century, serves as Andhra Pradesh's cultural hub. Foreign powers have had an
                        impact on literature, music, dancing, and food. The richness and success of the culture have been aided by this variety and diversity.
                    </p>
                    <h2>Music and Dance Forms of Andhra Pradesh</h2>
                    <p>Andhra Pradesh has a rich music heritage. 
                        Some of the most popular Carnatic musicians ever were descendants of Telugus.
                         Even the folk music of the state is incredibly popular.
                          Whenever you arrive in the state on economy or business class flights, do ensure to make time and enjoy some classical music performances held in large auditoriums regularly.
                         The most popular classical dance form of Andhra Pradesh is Kuchipudi. 
                         While men and women can both do this, it is mostly performed by women in the state. 
                         Some of the other traditional dance forms that existed through the fascinating history of the state are Burrakatha, Chenchu Bhagotam, Dappu, Bhamakalapam, Veeranatyam, Dhimsa, Butta Bommalu, Kolattam, and Tappeta Gullu.
                        These are among the most interesting aspects of culture and lifestyle of Andhra Pradesh.</p>
                    <h2>Languages of Andhra Pradesh</h2>
                    <p>A rich language, Telugu is the regional and official language of the state. 
                        An intense language influenced marginally by Sanskrit, there has been several acclaimed prose and poetry done in Telugu. 
                        This globally-known language is an integral part of Andhra Pradesh culture and tradition and its importance to the people cannot be undermined. 
                        Telugu culture and tradition is incomplete without the Telugu language. 
                         Other widely-spoken languages in Andhra Pradesh include English, Hindi, Urdu, and Banjara.
                         Of late, there has also been a rise in other languages such as Tamil, Marathi, Kannada, and Oriya.</p>
                    <h2>Capital of Andhra Pradesh: Amaravati</h2>
                    <p>
                        Amaravati, located on the southern banks of the Krishna River, is the capital city of Andhra Pradesh.
                        The city has historical significance and is known for its ancient Buddhist stupa, Amaravati Stupa, which dates back to 200 BCE.
                        Amaravati was chosen as the capital in 2017, succeeding Hyderabad, and ongoing development projects aim to make it a major center of commerce and culture.
                    </p>
                </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}



class ArunachalPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
                <div className="text-container" style={{ fontSize: '11.5px' ,textAlign: 'justify' }}>
                <h2>Arunachal Pradesh Information</h2>
                <p>The state of Arunachal Pradesh, located in the far northeastern part of India, is a land of diverse tribes and races.
                    These different tribes and communities have unique culture of their own which is manifested in its distinctive dance forms, art and craft forms, food and festivals.
                    The diversity of ethnic groups, languages and religion is seen all over the state. 
                    Let us know more about the culture of Arunachal Pradesh.</p>
                    <h2>Dance and Music of Arunachal</h2>
                    <p>The people of Arunachal Pradesh are patrons of dance and music. They dance and sing on important occasions – during festivals and marriages. Dances are different for different tribal groups. They vary from highly stylized religious dance dramas of the Buddhists to the martial steps and colorful performances of the Noctes and Wanchos.
                        Most of the dances are performed in groups – where both males and females take part. However, in some dances females are not allowed to dance with the male dancers. These dances are Igu dance of the Mishmi priests, war dances of the Adis, Noctes and Wanchos, and ritualistic dances of the Buddhist tribes.</p>
                    <h2>Art and Craft of Arunachal</h2>
                    <p>Arunachal Pradesh is a land of varied art and crafts. Since time immemorial the art of craftsmanship existed in the land.
                         The range of works include weaving, painting, cane and bamboo work, carpet making, wood carving, ornaments, pottery, smithy work, basketry among others. 
                         The womenfolk of the state are expert in handicraft and hand loom. The Buddhist community in the state is good weavers.
                          The Apatani tribe weaves shawls and jackets. 
                          The Adi community is famous for shoulder bag. 
                          The Mishimi coat and shawls are very warm.
                         People of Arunachal Pradesh are divided among three zones based on their art and culture. 
                         The first zone includes Buddhist tribes namely the Sherdukpens and Monpas, the Khowa, Aka and Miji group.
                       These tribes make beautiful masks for mask dances. 
                       The tribes of second zone are skilled in making cane and bamboo objects of utilities. 
                       The Apantanis, Hill Miris and Adis make beautiful articles of these materials. </p>
                    <h2>Capital of Arunachal Pradesh: Itanagar</h2>
                    <p>
                        Itanagar is the capital city of Arunachal Pradesh, situated in the foothills of the Himalayas.
                        The city is known for its picturesque landscapes and is a center of various tribes and cultures.
                        Itanagar hosts historical sites like the Ita Fort, which reflects the region's rich history. The Gompa and the Jawaharlal Nehru Museum are other attractions in the city.
                        As the capital, Itanagar plays a crucial role in the administrative and cultural life of Arunachal Pradesh.
                    </p>
                    </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}

class AssamInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
                <div className="text-container" style={{ fontSize: '11.5px' ,textAlign: 'justify' }}>
                <h2>Assam Information</h2>
                <p>Assam's culture has a rich heritage infused with the various fairs and festivals, dance and music, languages, arts and crafts and delicious cuisines.
                    The Assamese have given a distinguished shape to it by retaining their age old traditions, rituals and celebrations. 
                    There is a cultural intermingling of people of different races and fields living in harmony under one roof in Assam.
                    Assam, known as the ‘Gateway of the Northeast’ is the link connecting India to the other seven northeastern sister states. 
                    The Assamese culture dates back to thousand years earlier when the first cultural intermix happened between the Austro-Asiatic and Tibeto-Burman people.
                     The current original form of the Assamese culture can be said to have its origin roots in the great dynasties of Pragjyotisha and Kamarupa during the first millennium AD. 
                     Later during the year 1228, the Tai Shans entered Assam under the leadership of Sukaphaa and a new cultural assimilation took place. 
                     The Tai Shan people mixed with the local culture and adopted the language along with some elements mixed with their own.</p>
                <h2>Art and Craft of Assam</h2>
                <p>Another important aspect of the culture of Assam is its excellence in art and craft. 
                    The people of Assam are naturally born artisans of handloom and handicraft.
                     Different types of arts and craft, handloom and handicraft items, wooden items, metal items, paintings and jewelry of the state puts it apart from all other cultures of India. 
                     The exquisite silk, bamboo and cane products of Assam helps it stand out among the northeastern states. 
                     The land has given birth to thousands of skilled craftsmen who have retained the state’s rich cultural tradition over the centuries. 
                    The people of Assam have a special skill of crafting.There are several small scale cottage industries and most of the people are engaged in different types of handicraft making in Assam. Bamboo and cane products, handicrafts, metal crafts and other forms craft making are some of the activities in art and craft of Assam.</p>
                    <h2>Capital of Assam: Dispur</h2>
                    <p>
                        Dispur serves as the capital of Assam and is located within the city of Guwahati. It is the seat of the Assam Legislative Assembly and the Assam Secretariat.
                        The city is known for its lush greenery and is an integral part of the greater Guwahati metropolitan area. Dispur plays a crucial role in the governance and administration of the state.
                        Guwahati, with Dispur as its political hub, is a major cultural and economic center in the northeastern region of India.
                    </p>
                </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}
class BiharInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
                <div className="text-container" style={{ fontSize: '11.5px' ,textAlign: 'justify' }}>
                <h2>Bihar Information</h2>
                <p>The cultural life of the traditional Bihar society comprises of art, dance, music, festivals and fairs. 
                    Without considering all these aspects the culture seems to be incomplete. Bihar has a glorious past and a rich cultural heritage. 
                    The people of Bihar have preserved their rich tradition. The folk dances of Bihar are extremely enjoyable. 
                    Folk music is sung by people to remark some of the important occasions. The festivals are also celebrated with joy and happiness.
                    The all-important Pitrapaksha Mela also takes place at Gaya in Bihar. 
                    People of various religions and faith coexist together by maintaining their religious harmony with the philosophy of simple living and high thinking engrossed in their lifestyles. 
                    They are moderate and generous masses maintaining their affinity with the deep rooted culture of regional food habits and dressing senses.</p>
                <h2>Arts and Crafts of Bihar</h2>
                <p>Bihar has attained international recognition through arts and crafts since several centuries. 
                    The famous Madhubani and Mithila painting are at par and renowned on national spectrum and are therefore usually denoted with Indian paintings of global standards from Bihar.
                     Darbhanga and Madhubani districts are famous for such paintings. 
                     They depict various themes related to humans and nature. 
                     Other art forms in the state are Manjusha Art or Manjusha Kala and Angika Art besides the Patna School of Painting or Patna Qalaam that showcase the Mughal Miniature School of Painting features.</p>
                <h2>Folk Songs and Dances of Bihar</h2>
                <p>Bihar is famous for its performing arts culture. The Magahi folk singing besides Hindustani (Indian) classical music is major contributions of this state on national level. 
                    Bharat Ratna Ustad Bismillah Khan was born in Bihar. Likewise, Dhrupad singers Malliks from Darbhanga Gharana, Mishras from Bettiah Gharana and Dagar School of Dhrupad have irrefutable contribution from Bihar into Indian perspective. 
                </p>
                <h2>Capital of Bihar: Patna</h2>
                    <p>
                        Patna, situated on the southern bank of the Ganges River, is the capital city of Bihar.
                        It has a rich historical background, having been the center of power for various empires and dynasties. The city is known for its archaeological sites, including Patna Museum and Golghar.
                        As the capital, Patna plays a pivotal role in the political, cultural, and economic life of Bihar. It is an important educational and administrative hub in the region.
                    </p>
                     </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}
class ChhattisgarhInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Chhattisgarh Information</h2>
                <p>Add your content about Chhattisgarh here.</p>
            </div>
        );
    }
}
class GoaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Goa Information</h2>
                <p>Add your content about Goa here.</p>
            </div>
        );
    }
}
class GujaratInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Gujarat Information</h2>
                <p>Add your content about Gujarat here.</p>
            </div>
        );
    }
}
class HaryanaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Haryana Information</h2>
                <p>Add your content about Haryana here.</p>
            </div>
        );
    }
}

class HimachalPradeshInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Himachal Pradesh Information</h2>
                <p>Add your content about Himachal Pradesh here.</p>
            </div>
        );
    }
}

class JharkhandInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Jharkhand Information</h2>
                <p>Add your content about Jharkhand here.</p>
            </div>
        );
    }
}

class KarnatakaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Karnataka Information</h2>
                <p>Add your content about Karnataka here.</p>
            </div>
        );
    }
}

class KeralaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Kerala Information</h2>
                <p>Add your content about Kerala here.</p>
            </div>
        );
    }
}

class MaharashtraInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Maharashtra Information</h2>
                <p>Add your content about Maharashtra here.</p>
            </div>
        );
    }
}
class ManipurInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Manipur Information</h2>
                <p>Add your content about Manipur here.</p>
            </div>
        );
    }
}

class MeghalayaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Meghalaya Information</h2>
                <p>Add your content about Meghalaya here.</p>
            </div>
        );
    }
}
class MizoramInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Mizoram Information</h2>
                <p>Add your content about Mizoram here.</p>
            </div>
        );
    }
}

class MadhyaPradeshInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Madhya Pradesh Information</h2>
                <p>Add your content about Madhya Pradesh here.</p>
            </div>
        );
    }
}

class NagalandInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Nagaland Information</h2>
                <p>Add your content about Nagaland here.</p>
            </div>
        );
    }
}

class OdishaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Odisha Information</h2>
                <p>Add your content about Odisha here.</p>
            </div>
        );
    }
}

class PunjabInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Punjab Information</h2>
                <p>Add your content about Punjab here.</p>
            </div>
        );
    }
}

class RajasthanInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Rajasthan Information</h2>
                <p>Add your content about Rajasthan here.</p>
            </div>
        );
    }
}

class SikkimInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Sikkim Information</h2>
                <p>Add your content about Sikkim here.</p>
            </div>
        );
    }
}

class TamilNaduInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Tamil Nadu Information</h2>
                <p>Add your content about Tamil Nadu here.</p>
            </div>
        );
    }
}

class TelanganaInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Telangana Information</h2>
                <p>Add your content about Telangana here.</p>
            </div>
        );
    }
}


class TripuraInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Tripura Information</h2>
                <p>Add your content about Tripura here.</p>
            </div>
        );
    }
}

class UttarPradeshInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Uttar Pradesh Information</h2>
                <p>Add your content about Uttar Pradesh here.</p>
            </div>
        );
    }
}

class UttarakhandInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Uttarakhand Information</h2>
                <p>Add your content about Uttarakhand here.</p>
            </div>
        );
    }
}



class WestBengalInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>West Bengal Information</h2>
                <p>Add your content about West Bengal here.</p>
            </div>
        );
    }
}

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            showSubmenus: false,
            selectedStateImage: null,
            displayAndhraInfo: false,
        };
        this.sid = getSession("sid");
        if (this.sid === "") {
            window.location.replace("/");
        }

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        if (HL1) {
            HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
        } else {
            console.error("Element with id 'HL1' not found in the DOM.");
        }
    }

    toggleSubmenus = () => {
        this.setState((prevState) => ({
            showSubmenus: !prevState.showSubmenus,
        }));
    };

    handleStateClick = (state) => {
        switch (state) {
            case "Andhra Pradesh":
                this.setState({ selectedStateImage: andhraPradesh, displayAndhraInfo: true,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Arunachal Pradesh":
                this.setState({ selectedStateImage: arunachalPradesh, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo:true , displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Assam":
                this.setState({ selectedStateImage: assam, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: true,displayChhattisgarhInfo: false  });;
                break;
            case "Bihar":
                this.setState({ selectedStateImage: bihar, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: true,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Chhattisgarh":
                this.setState({ selectedStateImage: chhattisgarh, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: true });;
                break;
                
            case "Goa":
                this.setState({ selectedStateImage: goa, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: true, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            
            case "Gujarat":
                this.setState({ selectedStateImage: gujarat, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: true, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Haryana":
                this.setState({ selectedStateImage: haryana, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: true, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Himachal Pradesh":
                this.setState({ selectedStateImage: hima, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: true, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Jharkhand":
                this.setState({ selectedStateImage: jhar, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: true, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Karnataka":
                this.setState({ selectedStateImage: Karnataka, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: true, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Kerala":
                this.setState({ selectedStateImage: kerala, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: true, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Madhya Pradesh":
                this.setState({ selectedStateImage: mp, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: true, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Maharashtra":
                this.setState({ selectedStateImage: maha, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: true,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Manipur":
                this.setState({ selectedStateImage: mani, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: true,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Meghalaya":
                this.setState({ selectedStateImage: megha, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: true, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Mizoram":
                this.setState({ selectedStateImage: mizo, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: true, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Nagaland":
                this.setState({ selectedStateImage: nagaland, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: true, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Odisha":
                this.setState({ selectedStateImage: odisha, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: true,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Punjab":
                this.setState({ selectedStateImage: punjab, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo:true,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Rajasthan":
                this.setState({ selectedStateImage: raj, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: true, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Sikkim":
                this.setState({ selectedStateImage: sikkim, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: true,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Tamil Nadu":
                this.setState({ selectedStateImage: tamil, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:true, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Telangana":
                this.setState({ selectedStateImage: telangana, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: true, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Tripura":
                this.setState({ selectedStateImage: tripura, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: true, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "UttarPradesh":
                this.setState({ selectedStateImage: up, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: true,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Uttarakhand":
                this.setState({ selectedStateImage: uk, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: true, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "WestBengal":
                this.setState({ selectedStateImage: west, displayAndhraInfo: false,displayWestBengal: true, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;

            default:
                this.setState({ selectedStateImage: null, displayAndhraInfo: false, displayArunachalInfo: false, displayBiharInfo: false });
            
        }
    };

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    renderStatesMenu() {
        const statesInIndia = [
            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
            "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
            "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
            "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
        ];

        return (
            <div>
                <div className='menuheader' onClick={this.toggleSubmenus}>
                    <img src={menuicon} alt='' />
                    <label>VIEW STATES</label>

                </div>
                {this.state.showSubmenus && (
                    <ul className="mlist">
                        {statesInIndia.map((state, index) => (
                            <li key={index} onClick={() => this.handleStateClick(state)}>
                                <label>{state}</label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    render() {
        const { selectedStateImage,
                displayAndhraInfo, 
                displayArunachalInfo,
                displayAssamInfo,
                 displayBiharInfo,
                 displayChhattisgarhInfo,
            displayGoaInfo,
            displayGujaratInfo,
            displayHaryanaInfo,
            displayHimachalPradeshInfo,
            displayJharkhandInfo,
            displayKarnatakaInfo,
            displayKeralaInfo,
            displayMaharashtraInfo,
            displayManipurInfo,
            displayMeghalayaInfo,
            displayMizoramInfo,
            displayMadhyaPradeshInfo,
            displayNagalandInfo,
            displayOdishaInfo,
            displayPunjabInfo,
            displayRajasthanInfo,
            displaySikkimInfo,
            displayTamilNaduInfo,
            displayTelanganaInfo,
            displayTripuraInfo,
            displayUttarPradeshInfo,
            displayUttarakhandInfo,
            displayWestBengalInfo
         } = this.state;
        return (
            <div className='full-height'>
            <div className='header1'>
            <label style={HS1}>INDIA | Culture Management System</label>
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/states" className="nav-link">States in India</NavLink>
                <NavLink to="/traditions" className="nav-link">Traditions</NavLink>
                <label style={HS2} onClick={this.logout}>Logout</label>
                <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                <label id='HL1' style={HS4}></label>
                <div id="header1"></div>
            </div>
                <div className='content'>
                    <div className='menubar'>
                        <div className='menu'>
                            {this.renderStatesMenu()}
                        </div>
                    </div>
                    <div className='outlet'>
                    {selectedStateImage && (
                            <img src={selectedStateImage} alt={selectedStateImage} />
                        )}
                        {displayAndhraInfo && <AndhraPradeshInfo />}
                        {displayArunachalInfo && <ArunachalPradeshInfo />}
                        {displayAssamInfo && <AssamInfo />}
                        {displayBiharInfo && <BiharInfo />}
                        {displayChhattisgarhInfo && <ChhattisgarhInfo />}
                        {displayGoaInfo && <GoaInfo />}
                        {displayGujaratInfo && <GujaratInfo />} 
                        {displayHaryanaInfo && <HaryanaInfo />}
                        {displayHimachalPradeshInfo && <HimachalPradeshInfo />}
                        {displayJharkhandInfo && <JharkhandInfo />}
                        {displayKarnatakaInfo && <KarnatakaInfo />}
                        {displayKeralaInfo && <KeralaInfo />} 
                        {displayMaharashtraInfo && <MaharashtraInfo />} 
                        {displayManipurInfo && <ManipurInfo />} 
                        {displayMeghalayaInfo && <MeghalayaInfo />} 
                        {displayMizoramInfo && <MizoramInfo />} 
                        {displayMadhyaPradeshInfo && <MadhyaPradeshInfo />} 
                        {displayNagalandInfo && <NagalandInfo />} 
                        {displayOdishaInfo && <OdishaInfo />} 
                        {displayPunjabInfo && <PunjabInfo />} 
                        {displayRajasthanInfo && <RajasthanInfo />} 
                        {displaySikkimInfo && <SikkimInfo />} 
                        {displayTamilNaduInfo && <TamilNaduInfo />} 
                        {displayTelanganaInfo && <TelanganaInfo />} 
                        {displayTripuraInfo && <TripuraInfo />} 
                        {displayUttarPradeshInfo && <UttarPradeshInfo />} 
                        {displayUttarakhandInfo && <UttarakhandInfo />} 
                        {displayWestBengalInfo && <WestBengalInfo />} 


                    </div>
                </div>
                <div className='footer1'>
                    Copyright @ Indian Culture. All rights reserved.
                </div>
            </div>
        );
    }
}

export default State;
