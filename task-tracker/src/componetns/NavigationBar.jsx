import React, { useState } from 'react';
import "../style/NavigationBar.css"
import Image from "../image/lm.png";

function NavigationBar() {
  const [practice1DivVisible, setPractice1DivVisible] = useState(true);
  const [practice2DivVisible, setPractice2DivVisible] = useState(true);
  const [showDivsButtonClicked, setShowDivsButtonClicked] = useState(true);

  const toggleDivs = (practiceDivId) => {
    if (practiceDivId === 'practice1Div') {
      setPractice1DivVisible(true);
      setPractice2DivVisible(false);
    } else if (practiceDivId === 'practice2Div') {
      setPractice2DivVisible(true);
      setPractice1DivVisible(false);
    }
  };
  const handleShowDivsButtonClick = () => {
    setShowDivsButtonClicked(true);
    setPractice2DivVisible(true);
    setPractice1DivVisible(true);
  };

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === itemIndex ? null : itemIndex));
  };

  return (
    <div>
      <div className="navigation-bar">
        <div className="navigation-bar-line-3"></div>
        <button id="showDivsButton" className="navigation-bar-button" onClick={handleShowDivsButtonClick}>
          <div className="navigation-bar-rectangle">
            <svg
              class="navigation-bar-leaderboard"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_620_153"
                // style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_620_153)">
                <path
                  d="M4 12.7295V20.7842H8V12.7295H4ZM10 6.68848V20.7842H14V6.68848H10ZM16 14.7432V20.7842H20V14.7432H16ZM20 22.7979H4C3.45 22.7979 2.97917 22.6007 2.5875 22.2063C2.19583 21.812 2 21.3379 2 20.7842V12.7295C2 12.1757 2.19583 11.7017 2.5875 11.3073C2.97917 10.913 3.45 10.7158 4 10.7158H8V6.68848C8 6.13472 8.19583 5.66066 8.5875 5.26632C8.97917 4.87198 9.45 4.6748 10 4.6748H14C14.55 4.6748 15.0208 4.87198 15.4125 5.26632C15.8042 5.66066 16 6.13472 16 6.68848V12.7295H20C20.55 12.7295 21.0208 12.9267 21.4125 13.321C21.8042 13.7154 22 14.1894 22 14.7432V20.7842C22 21.3379 21.8042 21.812 21.4125 22.2063C21.0208 22.6007 20.55 22.7979 20 22.7979Z"
                  fill="#1D192A"
                />
              </g>
            </svg>
            <div className="navigation-bar-div">Дошки</div>
          </div>
        </button>
        <div className="navigation-bar-project">Проекти</div>
        <button className="navigation-bar-practice" onClick={() => handleItemClick(1)}>
          <div className="navigation-practice">Practice</div>
          <svg
            class="expand-more"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_620_229"
              //   style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <rect y="0.00109863" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_620_229)">
              <path
                d="M12.0003 14.951C11.867 14.951 11.742 14.9302 11.6253 14.8885C11.5086 14.8469 11.4003 14.776 11.3003 14.676L6.70029 10.076C6.51696 9.89271 6.42529 9.65938 6.42529 9.37605C6.42529 9.09271 6.51696 8.85938 6.70029 8.67605C6.88363 8.49271 7.11696 8.40105 7.40029 8.40105C7.68363 8.40105 7.91696 8.49271 8.10029 8.67605L12.0003 12.576L15.9003 8.67605C16.0836 8.49271 16.317 8.40105 16.6003 8.40105C16.8836 8.40105 17.117 8.49271 17.3003 8.67605C17.4836 8.85938 17.5753 9.09271 17.5753 9.37605C17.5753 9.65938 17.4836 9.89271 17.3003 10.076L12.7003 14.676C12.6003 14.776 12.492 14.8469 12.3753 14.8885C12.2586 14.9302 12.1336 14.951 12.0003 14.951Z"
                fill="#48454D"
              />
            </g>
          </svg>
        </button>
        {activeItem === 1 && (
          <div style={{ marginRight: '45px' }}>
            <button id="practice1Div" className="navigation-bar-button1" onClick={() => toggleDivs('practice1Div')}>
              <button className="navigation-bar-rectangle" >
                <svg
                  class="navigation-bar-leaderboard"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_620_153"
                    //   style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_620_153)">
                    <path
                      d="M4 12.7295V20.7842H8V12.7295H4ZM10 6.68848V20.7842H14V6.68848H10ZM16 14.7432V20.7842H20V14.7432H16ZM20 22.7979H4C3.45 22.7979 2.97917 22.6007 2.5875 22.2063C2.19583 21.812 2 21.3379 2 20.7842V12.7295C2 12.1757 2.19583 11.7017 2.5875 11.3073C2.97917 10.913 3.45 10.7158 4 10.7158H8V6.68848C8 6.13472 8.19583 5.66066 8.5875 5.26632C8.97917 4.87198 9.45 4.6748 10 4.6748H14C14.55 4.6748 15.0208 4.87198 15.4125 5.26632C15.8042 5.66066 16 6.13472 16 6.68848V12.7295H20C20.55 12.7295 21.0208 12.9267 21.4125 13.321C21.8042 13.7154 22 14.1894 22 14.7432V20.7842C22 21.3379 21.8042 21.812 21.4125 22.2063C21.0208 22.6007 20.55 22.7979 20 22.7979Z"
                      fill="#1D192A"
                    />
                  </g>
                </svg>
                <div className="navigation-bar-div" >Дошки</div>
              </button>

            </button>
            <a href="Parcticipant">
              <button id="participants1Div" className="navigation-bar-participants">
                <div className="navigation-bar-group">
                  <div className="navigation-bar-participants-div">Учасники</div>
                  <svg
                    class="navigation-bar-person"
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_620_408"
                      // style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="27"
                      height="25"
                    >
                      <rect width="26.5846" height="24.51" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_620_408)">
                      <path
                        d="M13.2923 14.475C12.0739 14.475 11.0308 14.0723 10.1631 13.2668C9.2954 12.4614 8.86156 11.4931 8.86156 10.3621C8.86156 9.23102 9.2954 8.26277 10.1631 7.45732C11.0308 6.65187 12.0739 6.24915 13.2923 6.24915C14.5108 6.24915 15.5539 6.65187 16.4216 7.45732C17.2892 8.26277 17.7231 9.23102 17.7231 10.3621C17.7231 11.4931 17.2892 12.4614 16.4216 13.2668C15.5539 14.0723 14.5108 14.475 13.2923 14.475ZM19.9385 22.7008H6.64617C6.03694 22.7008 5.5154 22.4995 5.08156 22.0968C4.64771 21.694 4.43079 21.2099 4.43079 20.6444V19.8218C4.43079 19.2391 4.59232 18.7036 4.9154 18.2152C5.23848 17.7268 5.66771 17.354 6.20309 17.097C7.34771 16.5657 8.51079 16.1673 9.69232 15.9017C10.8739 15.636 12.0739 15.5032 13.2923 15.5032C14.5108 15.5032 15.7108 15.636 16.8923 15.9017C18.0739 16.1673 19.2369 16.5657 20.3816 17.097C20.9169 17.354 21.3462 17.7268 21.6692 18.2152C21.9923 18.7036 22.1539 19.2391 22.1539 19.8218V20.6444C22.1539 21.2099 21.9369 21.694 21.5031 22.0968C21.0692 22.4995 20.5477 22.7008 19.9385 22.7008ZM6.64617 20.6444H19.9385V19.8218C19.9385 19.6333 19.8877 19.4619 19.7862 19.3077C19.6846 19.1534 19.5508 19.0335 19.3846 18.9478C18.3877 18.4851 17.3816 18.1381 16.3662 17.9067C15.3508 17.6754 14.3262 17.5597 13.2923 17.5597C12.2585 17.5597 11.2339 17.6754 10.2185 17.9067C9.20309 18.1381 8.19694 18.4851 7.20002 18.9478C7.03386 19.0335 6.90002 19.1534 6.79848 19.3077C6.69694 19.4619 6.64617 19.6333 6.64617 19.8218V20.6444ZM13.2923 12.4185C13.9016 12.4185 14.4231 12.2172 14.8569 11.8144C15.2908 11.4117 15.5077 10.9276 15.5077 10.3621C15.5077 9.79654 15.2908 9.31242 14.8569 8.90969C14.4231 8.50697 13.9016 8.30561 13.2923 8.30561C12.6831 8.30561 12.1616 8.50697 11.7277 8.90969C11.2939 9.31242 11.0769 9.79654 11.0769 10.3621C11.0769 10.9276 11.2939 11.4117 11.7277 11.8144C12.1616 12.2172 12.6831 12.4185 13.2923 12.4185Z"
                        fill="#48454D"
                      />
                    </g>
                  </svg>
                  <svg
                    class="navigation-bar-add"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_620_411"
                      //   style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="15"
                    >
                      <rect
                        x="0.49231"
                        y="0.106201"
                        width="15.5077"
                        height="14.2975"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_620_411)">
                      <path
                        d="M7.59995 8.44123H4.36918C4.1861 8.44123 4.03264 8.38375 3.90879 8.26879C3.78495 8.15383 3.72302 8.01138 3.72302 7.84143C3.72302 7.67149 3.78495 7.52904 3.90879 7.41407C4.03264 7.29911 4.1861 7.24163 4.36918 7.24163H7.59995V4.24262C7.59995 4.07268 7.66187 3.93023 7.78571 3.81527C7.90956 3.7003 8.06302 3.64282 8.2461 3.64282C8.42918 3.64282 8.58264 3.7003 8.70648 3.81527C8.83033 3.93023 8.89225 4.07268 8.89225 4.24262V7.24163H12.123C12.3061 7.24163 12.4596 7.29911 12.5834 7.41407C12.7073 7.52904 12.7692 7.67149 12.7692 7.84143C12.7692 8.01138 12.7073 8.15383 12.5834 8.26879C12.4596 8.38375 12.3061 8.44123 12.123 8.44123H8.89225V11.4402C8.89225 11.6102 8.83033 11.7526 8.70648 11.8676C8.58264 11.9826 8.42918 12.04 8.2461 12.04C8.06302 12.04 7.90956 11.9826 7.78571 11.8676C7.66187 11.7526 7.59995 11.6102 7.59995 11.4402V8.44123Z"
                        fill="#48454D"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        )}


        <button className="navigation-bar-practice" onClick={() => handleItemClick(2)} >
          <div className="navigation-practice">Practice2</div>
          <svg
            class="expand-more"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_620_229"
              //   style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <rect y="0.00109863" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_620_229)">
              <path
                d="M12.0003 14.951C11.867 14.951 11.742 14.9302 11.6253 14.8885C11.5086 14.8469 11.4003 14.776 11.3003 14.676L6.70029 10.076C6.51696 9.89271 6.42529 9.65938 6.42529 9.37605C6.42529 9.09271 6.51696 8.85938 6.70029 8.67605C6.88363 8.49271 7.11696 8.40105 7.40029 8.40105C7.68363 8.40105 7.91696 8.49271 8.10029 8.67605L12.0003 12.576L15.9003 8.67605C16.0836 8.49271 16.317 8.40105 16.6003 8.40105C16.8836 8.40105 17.117 8.49271 17.3003 8.67605C17.4836 8.85938 17.5753 9.09271 17.5753 9.37605C17.5753 9.65938 17.4836 9.89271 17.3003 10.076L12.7003 14.676C12.6003 14.776 12.492 14.8469 12.3753 14.8885C12.2586 14.9302 12.1336 14.951 12.0003 14.951Z"
                fill="#48454D"
              />
            </g>
          </svg>
        </button>
        {activeItem === 2 && (
          <div>
            <button id="practice2Div" className="navigation-bar-button1" onClick={() => toggleDivs('practice2Div')}>
              <div className="navigation-bar-rectangle">
                <svg
                  class="navigation-bar-leaderboard"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_620_153"
                    //   style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_620_153)">
                    <path
                      d="M4 12.7295V20.7842H8V12.7295H4ZM10 6.68848V20.7842H14V6.68848H10ZM16 14.7432V20.7842H20V14.7432H16ZM20 22.7979H4C3.45 22.7979 2.97917 22.6007 2.5875 22.2063C2.19583 21.812 2 21.3379 2 20.7842V12.7295C2 12.1757 2.19583 11.7017 2.5875 11.3073C2.97917 10.913 3.45 10.7158 4 10.7158H8V6.68848C8 6.13472 8.19583 5.66066 8.5875 5.26632C8.97917 4.87198 9.45 4.6748 10 4.6748H14C14.55 4.6748 15.0208 4.87198 15.4125 5.26632C15.8042 5.66066 16 6.13472 16 6.68848V12.7295H20C20.55 12.7295 21.0208 12.9267 21.4125 13.321C21.8042 13.7154 22 14.1894 22 14.7432V20.7842C22 21.3379 21.8042 21.812 21.4125 22.2063C21.0208 22.6007 20.55 22.7979 20 22.7979Z"
                      fill="#1D192A"
                    />
                  </g>
                </svg>
                <div className="navigation-bar-div">Дошки</div>
              </div>
            </button>
            <a href="Parcticipant">
              <button id="participants2Div" className="navigation-bar-participants">
                <div className="navigation-bar-group">
                  <div className="navigation-bar-participants-div">Учасники</div>
                  <svg
                    class="navigation-bar-person"
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_620_408"
                      // style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="27"
                      height="25"
                    >
                      <rect width="26.5846" height="24.51" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_620_408)">
                      <path
                        d="M13.2923 14.475C12.0739 14.475 11.0308 14.0723 10.1631 13.2668C9.2954 12.4614 8.86156 11.4931 8.86156 10.3621C8.86156 9.23102 9.2954 8.26277 10.1631 7.45732C11.0308 6.65187 12.0739 6.24915 13.2923 6.24915C14.5108 6.24915 15.5539 6.65187 16.4216 7.45732C17.2892 8.26277 17.7231 9.23102 17.7231 10.3621C17.7231 11.4931 17.2892 12.4614 16.4216 13.2668C15.5539 14.0723 14.5108 14.475 13.2923 14.475ZM19.9385 22.7008H6.64617C6.03694 22.7008 5.5154 22.4995 5.08156 22.0968C4.64771 21.694 4.43079 21.2099 4.43079 20.6444V19.8218C4.43079 19.2391 4.59232 18.7036 4.9154 18.2152C5.23848 17.7268 5.66771 17.354 6.20309 17.097C7.34771 16.5657 8.51079 16.1673 9.69232 15.9017C10.8739 15.636 12.0739 15.5032 13.2923 15.5032C14.5108 15.5032 15.7108 15.636 16.8923 15.9017C18.0739 16.1673 19.2369 16.5657 20.3816 17.097C20.9169 17.354 21.3462 17.7268 21.6692 18.2152C21.9923 18.7036 22.1539 19.2391 22.1539 19.8218V20.6444C22.1539 21.2099 21.9369 21.694 21.5031 22.0968C21.0692 22.4995 20.5477 22.7008 19.9385 22.7008ZM6.64617 20.6444H19.9385V19.8218C19.9385 19.6333 19.8877 19.4619 19.7862 19.3077C19.6846 19.1534 19.5508 19.0335 19.3846 18.9478C18.3877 18.4851 17.3816 18.1381 16.3662 17.9067C15.3508 17.6754 14.3262 17.5597 13.2923 17.5597C12.2585 17.5597 11.2339 17.6754 10.2185 17.9067C9.20309 18.1381 8.19694 18.4851 7.20002 18.9478C7.03386 19.0335 6.90002 19.1534 6.79848 19.3077C6.69694 19.4619 6.64617 19.6333 6.64617 19.8218V20.6444ZM13.2923 12.4185C13.9016 12.4185 14.4231 12.2172 14.8569 11.8144C15.2908 11.4117 15.5077 10.9276 15.5077 10.3621C15.5077 9.79654 15.2908 9.31242 14.8569 8.90969C14.4231 8.50697 13.9016 8.30561 13.2923 8.30561C12.6831 8.30561 12.1616 8.50697 11.7277 8.90969C11.2939 9.31242 11.0769 9.79654 11.0769 10.3621C11.0769 10.9276 11.2939 11.4117 11.7277 11.8144C12.1616 12.2172 12.6831 12.4185 13.2923 12.4185Z"
                        fill="#48454D"
                      />
                    </g>
                  </svg>
                </div>
                <svg
                  class="navigation-bar-add"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_620_411"
                    //   style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="15"
                  >
                    <rect
                      x="0.49231"
                      y="0.106201"
                      width="15.5077"
                      height="14.2975"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_620_411)">
                    <path
                      d="M7.59995 8.44123H4.36918C4.1861 8.44123 4.03264 8.38375 3.90879 8.26879C3.78495 8.15383 3.72302 8.01138 3.72302 7.84143C3.72302 7.67149 3.78495 7.52904 3.90879 7.41407C4.03264 7.29911 4.1861 7.24163 4.36918 7.24163H7.59995V4.24262C7.59995 4.07268 7.66187 3.93023 7.78571 3.81527C7.90956 3.7003 8.06302 3.64282 8.2461 3.64282C8.42918 3.64282 8.58264 3.7003 8.70648 3.81527C8.83033 3.93023 8.89225 4.07268 8.89225 4.24262V7.24163H12.123C12.3061 7.24163 12.4596 7.29911 12.5834 7.41407C12.7073 7.52904 12.7692 7.67149 12.7692 7.84143C12.7692 8.01138 12.7073 8.15383 12.5834 8.26879C12.4596 8.38375 12.3061 8.44123 12.123 8.44123H8.89225V11.4402C8.89225 11.6102 8.83033 11.7526 8.70648 11.8676C8.58264 11.9826 8.42918 12.04 8.2461 12.04C8.06302 12.04 7.90956 11.9826 7.78571 11.8676C7.66187 11.7526 7.59995 11.6102 7.59995 11.4402V8.44123Z"
                      fill="#48454D"
                    />
                  </g>
                </svg>
              </button>
            </a>
          </div>
        )}

      </div>

      <div className="main">
        <div className="main-recent" style={{ display: showDivsButtonClicked ? 'block' : 'none' }}>
          <div className="main-div-myproject">Нещодавні</div>
          <div className="main-group-img">
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
          </div>
          <div className="main-line"></div>
        </div>
        <div className="main-div-myproject">Мої Проекти</div>
        <div className="main-recent" id='practice1Div' style={{ display: practice1DivVisible ? 'block' : 'none' }}>

          <div className="main-div-practice">Practice</div>
          <div className="main-group-img">
            <a href="boards.html">
              <div className="main-group">
                <img className="main-rectangle" src={Image} />
                <div className="main-task-tracker">TaskTracker</div>
              </div>
            </a>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
          </div>
        </div>

        <div className="main-recent" id='practice2Div' style={{ display: practice2DivVisible ? 'block' : 'none' }}>
          <div className="main-div-practice">Practice2</div>
          <div className="main-group-img">
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
          </div>
        </div>
        <div className="main-line"></div>

        <div className="main-div-myproject">Гостьові Проекти</div>
        <div className="main-recent" id='practice1Div' style={{ display: practice1DivVisible ? 'block' : 'none' }}>
          
          <div className="main-div-practice">Practice</div>
          <div className="main-group-img">
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
          </div>
        </div>

        <div className="main-recent" id='practice2Div' style={{ display: practice2DivVisible ? 'block' : 'none' }}>
          <div className="main-div-practice">Practice2</div>
          <div className="main-group-img">
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
