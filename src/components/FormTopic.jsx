import React from 'react';

export default function FormTopic() {
  return (

    <div className="containerForm">

      <form className="formAdd">

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><span>Название инициативы</span></label>
          <input
            name="bodyName"
            type="text"
            className="form-control"
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><span>Тема</span></label>
          <input
            type="text"
            className="form-control"
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><span>Содержание</span></label>
          <div className="form-floating">
            <textarea className="form-controlPost" placeholder="Опишите свой пост здесь" id="floatingTextarea2" />

          </div>
        </div>

        <div className="select">
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Выберете территориальную пренадлежность вашего поста</option>
            <option value="1">Федеральный</option>
            <option value="2">Областной</option>
            <option value="3">Региональный</option>
          </select>

        </div>
        <button type="button" className="btn btn-outline-dark">Отправить</button>
      </form>
    </div>

  );
}
