import axios from 'axios';
import React, { useState } from 'react';

export default function PlayerList() {
  const [input, setInput] = useState({ playerName: '', theamId: '' });
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clickHandler = () => {
    axios.post('/api/addplayer', input)
      .then(() => { window.location.href = '/addplayer'; });
  };

  return (
    <div style={{ width: '220px' }}>
      <div className="form-group mt-5">
        <input type="text" value={input.playerName} onChange={changeHandler} name="playerName" className="form-control" placeholder="playerName..." required />
        <input type="text" value={input.theamId} onChange={changeHandler} name="theamId" className="form-control" placeholder="theamId..." required />
        <button type="button" className="btn btn-secondary" onClick={clickHandler}> Add Game_id</button>
      </div>
    </div>
  );
}
