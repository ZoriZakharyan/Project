import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AddGame() {
  const gameHandler = (e) => {
    e.preventDefault();
    axios.post('/api/game', Object.fromEntries(new FormData(e.target)))
      .then(() => { window.location = '/add'; });
  };
  return (
    <form className="signup-form" method="post" onSubmit={gameHandler}>
      <div className="form-group mt-5">
        <input type="text" name="gameName" className="form-control" placeholder="gameName..." required />
        <button type="submit" className="btn btn-secondary">&nbsp; Add Game &nbsp;</button>

      </div>
    </form>
  );
}
