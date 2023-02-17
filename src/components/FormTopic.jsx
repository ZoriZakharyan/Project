import axios from 'axios';
import React, { useState } from 'react';

export default function FormTopic() {
  const [input, setInput] = useState({ bodyName: '', temsName: '', post: '' });
  const chandgeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/add', Object.fromEntries(new FormData(e.target)));
    setInput({ bodyName: '', temsName: '', post: '' });
  };
  return (

    <div className="containerForm">

      <form className="formAdd" onSubmit={submitHandler}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><span>Название инициативы</span></label>
          <input
            name="bodyName"
            type="text"
            className="form-control"
            value={input.bodyName}
            onChange={chandgeHandler}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><span>Тема</span></label>
          <input
            type="text"
            className="form-control"
            name="temsName"
            value={input.temsName}
            onChange={chandgeHandler}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><span>Содержание</span></label>
          <div className="form-floating">
            <textarea
              className="form-controlPost"
              placeholder="Опишите свой пост здесь"
              id="floatingTextarea2"
              name="post"
              value={input.post}
              onChange={chandgeHandler}
            />

          </div>
        </div>

        <div className="select">
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="level">
            <option selected>Выберете территориальную пренадлежность вашего поста</option>
            <option value="1">Федеральный</option>
            <option value="2">Муниципальный</option>
            <option value="3">Региональный</option>
          </select>

        </div>
        <button type="submit" className="btn btn-outline-dark">Отправить</button>
      </form>
    </div>

  );
}
