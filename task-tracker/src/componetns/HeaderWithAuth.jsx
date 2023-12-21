import React from "react";
import '../style/HeaderWithAuth.css'
import UserInfo from "./UserInfo";
import Notification from "./Notification";
import UserDetails from "./UserDetails";
import PopupWindow from "./PopupWindow";
import RecentWindow from "./RecentWindow";
import CreateWindow from "./CreateWindow";

const HeaderWithAuth = () => {

    return (
        <div className="header">
                  <svg
        className="header2"
        width="1920"
        height="72"
        viewBox="0 0 1920 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1920V72H0V0Z" fill="#F5F5F5" />
      </svg>
      
      <div className="header-task-tracker">TaskTracker</div>
      <div className="site-icon">
        <div className="rectangle-26"></div>
        <div className="rectangle-27"></div>
        <div className="rectangle-28"></div>
      </div>
      <div className="search">
        <input className="search-div" required placeholder="Пошук"></input>
        <svg
          className="search-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_542_189"
            // style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_542_189)">
            <path
              d="M9.5 16.3213C7.68333 16.3213 6.14583 15.6878 4.8875 14.4209C3.62917 13.154 3 11.6059 3 9.77686C3 7.94777 3.62917 6.39976 4.8875 5.13282C6.14583 3.86589 7.68333 3.23242 9.5 3.23242C11.3167 3.23242 12.8542 3.86589 14.1125 5.13282C15.3708 6.39976 16 7.94777 16 9.77686C16 10.5152 15.8833 11.2116 15.65 11.866C15.4167 12.5205 15.1 13.0994 14.7 13.6028L20.3 19.2411C20.4833 19.4257 20.575 19.6606 20.575 19.9459C20.575 20.2312 20.4833 20.4661 20.3 20.6507C20.1167 20.8353 19.8833 20.9276 19.6 20.9276C19.3167 20.9276 19.0833 20.8353 18.9 20.6507L13.3 15.0124C12.8 15.4151 12.225 15.734 11.575 15.9689C10.925 16.2038 10.2333 16.3213 9.5 16.3213ZM9.5 14.3076C10.75 14.3076 11.8125 13.8671 12.6875 12.9861C13.5625 12.1052 14 11.0354 14 9.77686C14 8.51831 13.5625 7.44855 12.6875 6.56757C11.8125 5.68658 10.75 5.24609 9.5 5.24609C8.25 5.24609 7.1875 5.68658 6.3125 6.56757C5.4375 7.44855 5 8.51831 5 9.77686C5 11.0354 5.4375 12.1052 6.3125 12.9861C7.1875 13.8671 8.25 14.3076 9.5 14.3076Z"
              fill="#48454D"
            />
          </g>
        </svg>
      </div>
            <UserInfo />
            <Notification/>
            <UserDetails/>
            <PopupWindow/>
            <RecentWindow/>
            <CreateWindow/>
            
        </div>
    );
}

export default HeaderWithAuth;