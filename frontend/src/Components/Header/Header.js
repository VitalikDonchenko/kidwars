import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const { remote } = window.require('electron');
const { app } = remote;

function Header() {
  const status = useSelector((state) => state.user.auth);
  const [auth, setAuth] = useState(status);
  const userState = useSelector((state) => state);
  console.log(userState);

  useEffect(() => {
    setAuth(status);
  }, [status]);

  return (
    <div className="Header">
      <Link to="/task">Добавить задание</Link>
      {!auth ? (
        <>
          <span><Link to="/singin"> Зарегистрироваться</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/login">Войти</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
      ) : (
        <>
          <span><Link to="/logout">Выход</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span><Link to="/config"> Личный кабинет</Link></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
      )}
      <Link to="/">На главную</Link>
      <button onClick={() => { app.quit() }}>Х</button>
      
    </div>
  );
}

export default Header;
