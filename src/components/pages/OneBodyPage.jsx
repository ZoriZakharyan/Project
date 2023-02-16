import React from 'react';

export default function OneBodyPage({ body }) {
  console.log(body);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://proactions.ru/_ipx/f_jpeg,s_1536x1951/https://proactions.ru/media/actions/2015/04/20/h62tpopl.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{body.bodyName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {' '}
          {body.post}
        </h6>
        <p className="card-text">{body.count}</p>
        <p className="card-text">{body.data}</p>
      </div>
    </div>
  );
}
