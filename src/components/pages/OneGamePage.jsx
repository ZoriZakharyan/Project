import axios from 'axios';
import React, { useState } from 'react';

export default function OneGamePage({ games, deletHandler, setGame }) {
  const [rename, setRename] = useState(false);
  const [input, setInput] = useState({ newGameName: games.gameName });
  const onChange = (e) => {
    e.preventDefault();
    if (rename) {
      axios.patch(`/api/game/${games.id}`, input)
        .then((res) => {
          setRename(false);
          setGame((prev) => prev.map((el) => {
            if (el.id === res.data.id) return res.data;
            return el;
          }));
        });
    } else {
      console.log(error);
    }
  };

  return (
    <form className="row">
      <div className="card" style={{ width: '18rem' }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          {!rename ? <p className="gameName">{games.gameName}</p>
            : <input value={input.newGameName} onChange={(e) => setInput({ newGameName: e.target.value })} />}
          {!rename ? <button type="button" onClick={() => setRename((prev) => !prev)} className="btn btn-outline-primary"> Rename</button>
            : <button type="button" onClick={onChange} className="btn btn-outline-primary">Sucses</button>}
          <button type="button" onClick={() => deletHandler(games.id)} className="btn btn-outline-danger"> Delete</button>
          <button type="button" onClick={() => window.location.href = '/addteam'} className="btn btn-outline-primary"> Add Taems</button>
        </div>
      </div>
    </form>
  );
}
