import React from 'react';
import OneInit from './OneInit';

export default function Mainpage({ allInit }) {
  return (
    <div className="row">{allInit?.map((inits) => <OneInit inits={inits} key={inits.id} />)}</div>
  );
}
