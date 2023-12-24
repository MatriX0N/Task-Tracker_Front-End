import React, { useState } from "react";
import './style/Auth.css'
import axios from "axios";

function Auth() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();


    const authData = {
      username: formData.email,
      password: formData.password,
    }

    const apiUrl = 'https://vaabr5.pythonanywhere.com/api/user/login/';

    axios.post(apiUrl, authData)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
        localStorage.setItem('userID', response.data.ID)
  
        window.location.pathname = '/Katalog'
      })
      .catch((error) => {
        console.error('Помилка авторизації:', error)

      });

  }

  return (
    <div>
      <div className="desktop-4-1">
        <div className="rectangle-1-1"></div>
        <div className="task-tracker-1">TaskTracker</div>
        <div className="group-56-1">
          <div className="rectangle-26-1"></div>
          <div className="rectangle-27-1"></div>
          <div className="rectangle-28-1"></div>
        </div>
        <div className="authorization-1">
          <svg
            className="rectangle-18-1"
            width="987"
            height="577"
            viewBox="0 0 987 577"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_59_533)">
              <path
                d="M4 30C4 13.4314 17.4315 0 34 0H953C969.569 0 983 13.4315 983 30V539C983 555.569 969.569 569 953 569H34C17.4315 569 4 555.569 4 539V30Z"
                fill="url(#paint0_linear_59_533)"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_59_533"
                x="0"
                y="0"
                width="987"
                height="577"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_59_533"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_59_533"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_59_533"
                x1="493.5"
                y1="0"
                x2="493.5"
                y2="569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F5F5F5" />
                <stop offset="1" stop-color="#F5F5F5" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <form className="frame-22-1">
            <div className="group-67-1">
              <input
                className="rectangle-19-1"
                type="email"
                required placeholder="Введіть email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="group-61-1">
              <input
                className="rectangle-19-1"
                placeholder="Введіть пароль"
                type="password"
                name="password"
                required minlength="6"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
            <div className="forgot-your-password-1">Забули пароль?</div>
            <div className="continue-1">
              <button className="rectangle-20-1" onClick={handleSubmit}><div className="continue2-1">Продовжити</div></button>
            </div>
          </form>
          <div className="frame-23-1">
            <div className="rectangle-22-1"></div>
            <div className="rectangle-23-1"></div>
            <div className="new-to-this-site-1">Новенькі тут?</div>
            <a href="Registration">
              <div className="group-68-1">
                <button className="rectangle-200-1"><div className="create-a-new-account">Зареєструватись</div></button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;