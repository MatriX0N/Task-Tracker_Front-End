import React from "react";
import "./style/Registration.css"

function Reg () {
    return(
        <div>
            <div class="desktop-5">
      <div class="rectangle-1-2"></div>
      <div class="task-tracker-2">TaskTracker</div>
      <div class="group-56-2">
        <div class="rectangle-26-2"></div>
        <div class="rectangle-27-2"></div>
        <div class="rectangle-28-2"></div>
      </div>
      <div class="registration-2">
        <div class="rectangle-18-2"></div>
        <form class="frame-20-2">
          <div class="passwords-must-be-at-least-6-characters-2">
            Пароль повинен містити мінімум 6 символів.
          </div>
          <div class="enter-first-name-2">
            <input class="rectangle-20-2" required placeholder="Введіть своє ім’я" pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+"></input>
          </div>
          <div class="enter-last-name-2">
            <input class="rectangle-20-2" required placeholder="Введіть своє прізвище" pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+"></input>
          </div>
          <div class="enter-login-2">
            <input class="rectangle-20-2" required placeholder="Введіть email" type="email"></input>
          </div>
          <div class="enter-password-2">
            <div class="group-61-2">
              <input class="rectangle-20-2" required placeholder="Введіть пароль"  minlength="6" type="password"></input>
            </div>
          </div>
          <div class="re-enter-password-2">
            <div class="group-63-2">
              <input class="rectangle-20-2" required placeholder="Підтвердіть свій пароль "  minlength="6" type="password"></input>
            </div>
          </div>
          <div class="continue-2">
            <button class="rectangle-20-2"><div class="continue2-2">Продовжити</div></button>
          </div>
        </form>
        <div class="frame-21-2">
          <div class="rectangle-22-2"></div>
          <div class="rectangle-23-2"></div>
          <div class="already-have-an-account-2">Вже зареєстровані?</div>
          <a href="Authorization">
          <div class="group-632-2">
            <button class="rectangle-200-2"><div class="sing-in-2">Увійти</div></button>
          </div>
          </a>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Reg;