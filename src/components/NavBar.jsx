import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="nav2">
        <ul className="navbar-nav">

          <li className="nav-item">
            <button type="button" className="btn btn-outline-dark"><a className="but" aria-current="page" href="/">Домой</a></button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-outline-dark"><a className="but" aria-current="page" href="#">Войти</a></button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-outline-dark"><a className="but" aria-current="page" href="#">Зарегистрироваться</a></button>
          </li>

        </ul>
        <ul className="navbar-nav ulMargin">
          <li className="nav-item">
            <button type="button" className="btn btn-outline-dark"><a className="butAdd" aria-current="page" href="/add">+Добавить</a></button>
          </li>

        </ul>
      </div>
      <div className="form">

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Искать..." aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Поиск</button>
        </form>

      </div>

    </nav>
  );
}
