import React from 'react';
import "../styles/JoinUs.css"
import PlayerCard from './PlayerCard';

function JoinUs() {
  return (
    <div className="join-us">
      <h1>Join our football team and play with us!</h1>
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
