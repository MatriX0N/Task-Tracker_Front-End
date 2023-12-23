import React, { useState } from "react";
import axios from 'axios';
import "./style/Registration.css"
function Reg () {
  const[formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    const {name, value} =  e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert('Паролі не співпадають')
      return;
    }

    const registrationData = {
      username: formData.email,
      email: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
    }

    const apiUrl = 'https://vaabr5.pythonanywhere.com/api/user/register/';

    axios.post(apiUrl, registrationData)
      .then((response) => {
        alert('Успішна реєстрація');
        console.log('Успішна реєстрація:', response.data);
        window.location.pathname = '/Authorization'
      })
      .catch((error) => {
        console.error('Помилка реєстрації:', error);
  
      });

  }

    return(
        <div>
            <div className="desktop-5">
      <div className="rectangle-1-2"></div>
      <div className="task-tracker-2">TaskTracker</div>
      <div className="group-56-2">
        <div className="rectangle-26-2"></div>
        <div className="rectangle-27-2"></div>
        <div className="rectangle-28-2"></div>
      </div>
      <div className="registration-2">
        <div className="rectangle-18-2"></div>
        <form className="frame-20-2">
          <div className="passwords-must-be-at-least-6-characters-2">
            Пароль повинен містити мінімум 6 символів.
          </div>
          <div className="enter-first-name-2">
            <input
            className="rectangle-20-2" 
            required placeholder="Введіть своє ім’я" 
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            ></input>
          </div>
          <div className="enter-last-name-2">
            <input 
            className="rectangle-20-2"
            required placeholder="Введіть своє прізвище" 
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            ></input>
          </div>
          <div className="enter-login-2">
            <input 
            className="rectangle-20-2" 
            required placeholder="Введіть email" 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            ></input>
          </div>
          <div className="enter-password-2">
            <div className="group-61-2">
              <input className="rectangle-20-2" 
              required placeholder="Введіть пароль"  
              minlength="6" 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="re-enter-password-2">
            <div className="group-63-2">
              <input
              className="rectangle-20-2" 
              required placeholder="Підтвердіть свій пароль "  
              minlength="6" 
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="continue-2">
            <button className="rectangle-20-2" onClick={handleSubmit}><div className="continue2-2">Продовжити</div></button>
          </div>
        </form>
        <div className="frame-21-2">
          <div className="rectangle-22-2"></div>
          <div className="rectangle-23-2"></div>
          <div className="already-have-an-account-2">Вже зареєстровані?</div>
          <a href="Authorization">
          <div className="group-632-2">
            <button className="rectangle-200-2"><div className="sing-in-2">Увійти</div></button>
          </div>
          </a>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Reg;