import React from 'react';
import OneBodyPage from './OneBodyPage';

export default function AllTemsBody({ allTemsBody }) {
  return (
    <div className="row">{allTemsBody?.map((body) => <OneBodyPage body={body} key={body.id} />)}</div>
  );
}
