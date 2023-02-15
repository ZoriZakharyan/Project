import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AddTeams() {
  const [game, setGame] = useState([]);
  useEffect(() => {
    axios.get('/api/addteam')
      .then((res) => setGame(res.data));
  }, []);
  const teamHandler = (e) => {
    e.preventDefault();
    axios.post('/api/addteam', Object.fromEntries(new FormData(e.target)))
      .then(() => { window.location = '/addteam'; });
  };
  return (
    <form className="signup-form" method="post" onSubmit={teamHandler}>
      <div className="form-group mt-5">
        <input type="text" name="theamName" className="form-control" placeholder="gameName..." required />
        <button type="submit" className="btn btn-secondary">&nbsp; Add Teams &nbsp;</button>
        <select className="form-select" name="game" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {game?.map((games) => <option key={games.id} value={games.id} selected>{games.gameName}</option>)}

        </select>
      </div>
    </form>
  );
}
