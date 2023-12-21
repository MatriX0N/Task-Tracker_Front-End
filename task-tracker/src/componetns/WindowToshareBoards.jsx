import React, { useState, useRef, useEffect } from 'react';
import '../style/Boards.css';

function WindowToshareBoards() {
  const [isPracticeFrameWindowOpen, setPracticeFrameWindowOpen] = useState(false);
  const practiceFrameWindowRef = useRef(null);
  const [emailOrName, setEmailOrName] = useState('');

  const togglePracticeFrameWindow = () => {
    setPracticeFrameWindowOpen(!isPracticeFrameWindowOpen);
  };

  const handleInputChange = (e) => {
    setEmailOrName(e.target.value);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (practiceFrameWindowRef.current && !practiceFrameWindowRef.current.contains(event.target)) {
        setPracticeFrameWindowOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [practiceFrameWindowRef]);



  return (
    <>
      <button className="practice-frame" id="practiceFrameButton" onClick={togglePracticeFrameWindow}>
                  <svg
                    className="person-add"
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 10C18.2167 10 17.9792 9.90417 17.7875 9.7125C17.5958 9.52083 17.5 9.28333 17.5 9V7H15.5C15.2167 7 14.9792 6.90417 14.7875 6.7125C14.5958 6.52083 14.5 6.28333 14.5 6C14.5 5.71667 14.5958 5.47917 14.7875 5.2875C14.9792 5.09583 15.2167 5 15.5 5H17.5V3C17.5 2.71667 17.5958 2.47917 17.7875 2.2875C17.9792 2.09583 18.2167 2 18.5 2C18.7833 2 19.0208 2.09583 19.2125 2.2875C19.4042 2.47917 19.5 2.71667 19.5 3V5H21.5C21.7833 5 22.0208 5.09583 22.2125 5.2875C22.4042 5.47917 22.5 5.71667 22.5 6C22.5 6.28333 22.4042 6.52083 22.2125 6.7125C22.0208 6.90417 21.7833 7 21.5 7H19.5V9C19.5 9.28333 19.4042 9.52083 19.2125 9.7125C19.0208 9.90417 18.7833 10 18.5 10ZM8.5 8C7.4 8 6.45833 7.60833 5.675 6.825C4.89167 6.04167 4.5 5.1 4.5 4C4.5 2.9 4.89167 1.95833 5.675 1.175C6.45833 0.391667 7.4 0 8.5 0C9.6 0 10.5417 0.391667 11.325 1.175C12.1083 1.95833 12.5 2.9 12.5 4C12.5 5.1 12.1083 6.04167 11.325 6.825C10.5417 7.60833 9.6 8 8.5 8ZM1.5 16C1.21667 16 0.979167 15.9042 0.7875 15.7125C0.595833 15.5208 0.5 15.2833 0.5 15V13.2C0.5 12.6333 0.645833 12.1125 0.9375 11.6375C1.22917 11.1625 1.61667 10.8 2.1 10.55C3.13333 10.0333 4.18333 9.64583 5.25 9.3875C6.31667 9.12917 7.4 9 8.5 9C9.6 9 10.6833 9.12917 11.75 9.3875C12.8167 9.64583 13.8667 10.0333 14.9 10.55C15.3833 10.8 15.7708 11.1625 16.0625 11.6375C16.3542 12.1125 16.5 12.6333 16.5 13.2V15C16.5 15.2833 16.4042 15.5208 16.2125 15.7125C16.0208 15.9042 15.7833 16 15.5 16H1.5ZM2.5 14H14.5V13.2C14.5 13.0167 14.4542 12.85 14.3625 12.7C14.2708 12.55 14.15 12.4333 14 12.35C13.1 11.9 12.1917 11.5625 11.275 11.3375C10.3583 11.1125 9.43333 11 8.5 11C7.56667 11 6.64167 11.1125 5.725 11.3375C4.80833 11.5625 3.9 11.9 3 12.35C2.85 12.4333 2.72917 12.55 2.6375 12.7C2.54583 12.85 2.5 13.0167 2.5 13.2V14ZM8.5 6C9.05 6 9.52083 5.80417 9.9125 5.4125C10.3042 5.02083 10.5 4.55 10.5 4C10.5 3.45 10.3042 2.97917 9.9125 2.5875C9.52083 2.19583 9.05 2 8.5 2C7.95 2 7.47917 2.19583 7.0875 2.5875C6.69583 2.97917 6.5 3.45 6.5 4C6.5 4.55 6.69583 5.02083 7.0875 5.4125C7.47917 5.80417 7.95 6 8.5 6Z"
                      fill="white"
                    />
                  </svg>
                
                  <div className="practice-div">Поділитися</div>
      </button>

      {isPracticeFrameWindowOpen && (
        <div className="window-toshare" id="practiceFrameWindow" ref={practiceFrameWindowRef}>
          {
            <div className="window-toshare-rectangle">
        <div className="window-toshare-div">Поділитися Дошкою</div>
        <form>
        <input
                className="window-toshare-frame window-toshare-div2"
                required
                placeholder="Адреса електронної пошти або ім’я..."
                value={emailOrName}
                onChange={handleInputChange}
              />
        <button className="window-toshare-button">
          <div className="window-toshare-div3">Поділитися</div>
        </button>
        </form>
        <div className="window-toshare-main">
        <div className="window-toshare-group">
          <svg
                className="window-toshare-user"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55Z"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_476_752"
                      transform="translate(0 -0.611111) scale(0.00173611)"
                    />
                  </pattern>
                  <image
                    id="image0_476_752"
                    width="576"
                    height="1280"
                    href="./image/6e52c5529ce897d39c81652116f731d7.jpg"
                    />
                </defs>
            </svg>
            <div className="window-toshare-user1">
              <span>
                <span className="window-toshare-user-span">
                  Володимир Онищук
                  <br />
                </span>
                <span className="window-toshare-user-span2">@user565423/Admin</span>
              </span>
            </div>
            <button className="window-toshare-frame2">
              <div className="window-toshare-div4">Адміністратор</div>
            </button>
        </div>
        <div className="window-toshare-group">
          <svg
                className="window-toshare-user"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55Z"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_476_752"
                      transform="translate(0 -0.611111) scale(0.00173611)"
                    />
                  </pattern>
                  <image
                    id="image0_476_752"
                    width="576"
                    height="1280"
                    href="./image/6e52c5529ce897d39c81652116f731d7.jpg"
                    />
                </defs>
            </svg>
            <div className="window-toshare-user1">
              <span>
                <span className="window-toshare-user-span">
                  Володимир Онищук
                  <br />
                </span>
                <span className="window-toshare-user-span2">@user565423/Admin</span>
              </span>
            </div>
            <button className="window-toshare-frame2">
              <div className="window-toshare-div4">Учасник</div>
            </button>
        </div>
        <div className="window-toshare-group">
          <svg
                className="window-toshare-user"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55Z"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_476_752"
                      transform="translate(0 -0.611111) scale(0.00173611)"
                    />
                  </pattern>
                  <image
                    id="image0_476_752"
                    width="576"
                    height="1280"
                    href="./image/6e52c5529ce897d39c81652116f731d7.jpg"
                    />
                </defs>
            </svg>
            <div className="window-toshare-user1">
              <span>
                <span className="window-toshare-user-span">
                  Володимир Онищук
                  <br />
                </span>
                <span className="window-toshare-user-span2">@user565423/Admin</span>
              </span>
            </div>
            <button className="window-toshare-frame2">
              <div className="window-toshare-div4">Учасник</div>
            </button>
        </div>
      </div>
      <button className="window-toshare-button2">
        <div className="window-toshare-div5">Скопіювати посилання</div>
      </button>
      </div>}
        </div>
      )}
    </>
  );
}

export default WindowToshareBoards;
