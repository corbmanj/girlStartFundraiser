import React from "react";
import AddToCalendar from "react-add-to-calendar";
import "react-add-to-calendar/dist/react-add-to-calendar.css";
import bannerImg from "./Girlstart-BannerImage2.png";
import gsLogo from "./GSLogo.png";
import hsLogo from "./HS_Logo_YelowBlue.png";
import wahoo from "./wahoo.png";
import kateChemist from "./kateChemistLogo.png"
import RTRlogo from "./RTRlogo.png"
import NClogo from "./NClogo.png"
import KLClogo from "./KLClogo.png"
import PHlogo from "./PHlogo.png"
import RTElogo from "./RTElogo.png"
import "./App.css";

const event = {
  title: "Hopped Up On Science!",
  description:
    "Join us for a fundraiser benefitting GirlStart! Beer, raffles, auctions, science!",
  location: "Hopsquad Brewing Co, 2307 Kramer Ln, Austin, TX 78758, USA",
  startTime: "2022-09-04T12:00:00-05:00",
  endTime: "2022-09-04T17:00:00-05:00",
};

const icon = { "calendar-plus-o": "left" };

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <div className="banner">
          <img className="banner-img" src={bannerImg} alt="hopped up on science banner" />
        </div>
        <AddToCalendar event={event} buttonTemplate={icon} />
      </header>
      <body>
        <div className="info-boxes">
          <div className="info-box">
            <div className="box-header">WHEN</div>
            <div className="box-body">
              <p className="box-body">Sunday, Sept 4th</p>
              <p className="box-body">Noon - 5pm</p>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">WHERE</div>
            <a href="https://www.hopsquad.com/" target="_blank" rel="noreferrer">
              <img src={hsLogo} alt="HopSquad Brewing Co. Logo" />
            </a>
          </div>
          <div className="info-box">
            <div className="box-header">BENEFITTING</div>
            <a href="https://www.girlstart.org" target="_blank" rel="noreferrer">
              <img src={gsLogo} alt="GirlStart Logo" />
            </a>
          </div>
        </div>
        <div className="details-box">
          <div>Join us for a fundraiser benefitting <a href="https://girlstart.org/" target="_blank" rel="noreferrer">GirlStart</a></div>
          <div>Including raffle prizes, silent auctions and science demonstrations by Kate the Chemist!</div>
        </div>
        <div className="sponsors-box">
          <div className="sponsors-header">Raffle and Auction Items Provided By</div>
          <div className="sponsor-logos">
            <img src={wahoo} alt="Wahoo Fitness Logo" />
            <img src={hsLogo} alt="HopSquad Brewing Co. Logo" />
            <img src={gsLogo} alt="GirlStart Logo" />
            <img src={kateChemist} alt="Kate The Chemist Logo" />
            <img src={NClogo} alt="Nervous Charlie's Logo" />
            <img src={RTRlogo} alt="Ready To Run Logo" />
            <img src={KLClogo} alt="Kerbey Lane Cafe Logo" />
            <img src={PHlogo} alt="Pinthouse Pizza Logo" />
            <img src={RTElogo} alt="Run The Edge Logo" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
