import axios from 'axios';
import React, { useState } from 'react';

export default function OneTeam({ team, setAllTeams, deletHendler }) {
  const [rename, setrename] = useState(false);
  const [input, setinput] = useState({ newTeamName: team.theamName });
  const onChange = (e) => {
    e.preventDefault();
    if (rename) {
      axios.patch(`/api/allteam/${team.id}`, input)
        .then((res) => {
          setrename(false);
          setAllTeams((prev) => prev.map((el) => {
            if (el.id === res.data.id) return res.data;
            return el;
          }));
        });
    } else {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          {!rename ? <p className="theamName">{team.theamName}</p>
            : <input value={input.newTeamName} onChange={(e) => setinput({ newTeamName: e.target.value })} />}
          {!rename ? <button type="button" onClick={() => setrename((prev) => !prev)} className="btn btn-outline-primary">Rename</button>
            : <button type="button" onClick={onChange} className="btn btn-outline-primary">Sucses</button>}
          <button type="button" onClick={() => deletHendler(team.id)} className="btn btn-outline-danger">Delet</button>
          <button type="button" onClick={() => window.location.href = '/addplayer'} className="btn btn-outline-danger">Add Player</button>
        </div>
      </div>
    </div>
  );
}
