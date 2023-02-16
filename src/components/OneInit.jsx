import axios from 'axios';
import React from 'react';

export default function OneInit({ inits }) {
  const temsHandler = () => {
    axios.get(`/tems/${inits.id}`);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://proactions.ru/_ipx/f_jpeg,s_1536x1951/https://proactions.ru/media/actions/2015/04/20/h62tpopl.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{inits.initName}</h5>
        <h6 className="card-subtitle mb-2 text-muted"> Инициативы</h6>
        <p className="card-text">Прими участие в жизни сраны</p>
        <a href={`tems/${inits.id}`}>Перейти</a>
      </div>
    </div>
  );
}
