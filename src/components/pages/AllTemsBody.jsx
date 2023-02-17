import axios from 'axios';
import React, { useState } from 'react';
import OneBodyPage from './OneBodyPage';

export default function AllTemsBody({ allTemsBody }) {
  const [body, setbody] = useState(allTemsBody);
  const deleteHandler = (id) => {
    axios.delete(`/api/del/${id}`)
      .then(() => setbody((prev) => prev.filter((el) => el.id !== id)));
  };
  return (
    <div className="row">{body?.map((bodys) => <OneBodyPage deleteHandler={deleteHandler} setbody={setbody} bodys={bodys} key={body.id} />)}</div>
  );
}
