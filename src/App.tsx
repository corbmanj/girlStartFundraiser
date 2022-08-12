import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css'
import flyer from './GSFlyer.png';
import './App.css';

const event = {
  title: 'Hopped Up On Science!',
  description: 'Join us for a fundraiser benefitting GirlStart! Beer, raffles, auctions, science!',
  location: 'Hopsquad Brewing Co, 2307 Kramer Ln, Austin, TX 78758, USA',
  startTime: '2022-09-04T12:00:00-05:00',
  endTime: '2022-09-04T17:00:00-05:00'
};

const icon = { 'calendar-plus-o': 'left' }

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <div className="header">
          <div className="header-title">Save The Date</div>
          <div className="header-row">When: Sunday, September 4th</div>
          <div className="header-row">Where: Hopsquad Brewing Co.</div>
          <div className="header-row">What: Join us for a fundraiser benefitting <a href="https://girlstart.org/" target="_blank" rel="noreferrer">GirlStart</a> including raffle prizes, silent auctions and demonstrations by Kate the Chemist!</div>
        </div>
        <AddToCalendar event={event} buttonTemplate={icon} />
        <img src={flyer} className="flyer" alt="girl start event flyer" />
        <div className="sponsors">
          <div className="sponsor-title">Prizes and Support Provided By</div>
        </div>
      </header>
    </div>
  );
}

export default App;
