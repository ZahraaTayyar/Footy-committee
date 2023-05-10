import React from 'react';
import "../styles/PlayerCard.css";

function PlayerCard() {
  return (
    <div className="player-card">
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        alt="silhouette"
      ></img>
      <p>Name, Position</p>
    </div>
  );
}

export default PlayerCard;
