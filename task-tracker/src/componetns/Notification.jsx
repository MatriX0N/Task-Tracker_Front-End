import React, { useState, useRef, useEffect } from 'react';
import "../style/HeaderWithAuth.css"
function Notification() {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotification(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationRef]);

  function toggleNotificationWindow() {
    setShowNotification(!showNotification);
  }

  return (
    <>
      <div className="window-notification" ref={notificationRef} style={{ display: showNotification ? 'block' : 'none' }}>
        <div className="window-notification-rectangle">
          <div className="window-notification-class">
            <div className="window-notification-div">Сповіщення</div>
            <div className="task-tracker">
              <svg
                className="window-notification-user"
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.821817816 41 20.5 41Z"
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
                      xlinkHref="#image0_316_575"
                      transform="translate(0 -0.611111) scale(0.00173611)"
                    />
                  </pattern>
                  <image
                    id="image0_316_575"
                    width="576"
                    height="1280"
                    xlinkHref="../image/6e52c5529ce897d39c81652116f731d7.jpg"
                  />
                </defs>
              </svg>
              <div className="task-tracker-span">
                Володимир Онищук відмітив(ла) вас в завданні
              </div>
              <span className="task-tracker-span2">TaskTracker</span>
            </div>

          </div>
        </div>
      </div>

      <button className="notification" id="showNotificationButton" onClick={toggleNotificationWindow}>
        <svg
          className="user-notification"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20H14V20C14 21.1046 13.1046 22 12 22V22C10.8954 22 10 21.1046 10 20V20Z"
            stroke="black"
          />
          <path
            d="M13.0041 4H10.9954L9.96899 4.36922C7.58774 5.22582 5.99995 7.48439 5.99995 10.015V13.3354C5.99995 14.0691 5.65495 14.7601 5.06849 15.2011C3.02112 16.7405 4.10981 20 6.67133 20H17.3285C19.89 20 20.9787 16.7405 18.9314 15.2011C18.3449 14.7602 18 14.0691 18 13.3354V10.0151C18 7.48444 16.4121 5.22582 14.0307 4.36927L13.0041 4Z"
            stroke="black"
          />
          <path
            d="M11.5 3C11.5 2.72386 11.7239 2.5 12 2.5C12.2761 2.5 12.5 2.72386 12.5 3V3.5H11.5V3Z"
            stroke="black"
          />
        </svg>

        <div className="ellipse-red"></div>
      </button>
    </>
  );
}

export default Notification;