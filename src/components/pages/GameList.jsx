import React, { useState } from 'react';
import axios from 'axios';
import OneGamePage from './OneGamePage';

export default function GameList({ allGame }) {
  const [game, setGame] = useState(allGame || []);
  const deletHandler = (id) => {
    axios.delete(`/api/game/${id}`)
      .then(() => setGame((prev) => prev.filter((el) => el.id !== id)));
  };
  return (
    <div>
      {game?.map((games) => <OneGamePage setGame={setGame} games={games} key={games.id} deletHandler={deletHandler} />)}
    </div>
  );
}
