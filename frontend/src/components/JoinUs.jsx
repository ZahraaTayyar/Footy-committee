import { Link } from 'react-router-dom';
import React from 'react';
import "../styles/JoinUs.css"
import PlayerCard from './PlayerCard';

function JoinUs() {
  return (
    <div className="join-us">
      <div className="join-us-text-container">
        <h1>Join our football team and play with us!</h1>
        <p>
          How it works: Please sign up by clicking on the "join" button and
          filling in the form. We will then get in contact and let you know if
          we have spaces for the week or not
        </p>
        <Link to="/joinform">
          <button>JOIN</button>
        </Link>

        <p>Next game is on Friday 10th April!</p>
      </div>
      <div className="player-cards-container">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  );
}

export default JoinUs
