import axios from 'axios';
import React, { useState } from 'react';
import OneTeam from './OneTeam';

export default function TeamList({ allTeams }) {
  const [allteam, setAllTeams] = useState(allTeams);
  const deletHendler = (id) => {
    axios.delete(`/api/allteam/${id}`)
      .then(() => setAllTeams((prev) => prev.filter((el) => el.id !== id)));
  };
  return (
    <div>
      {allteam?.map((team) => <OneTeam team={team} key={team.id} setAllTeams={setAllTeams} deletHendler={deletHendler} />)}
    </div>
  );
}
