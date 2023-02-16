import React from 'react';
import OneTemsPage from './OneTemsPage';

export default function TemsPage({ allTems }) {
  return (
    <div className="row">{allTems?.map((tems) => <OneTemsPage tems={tems} key={tems.id} />)}</div>
  );
}
