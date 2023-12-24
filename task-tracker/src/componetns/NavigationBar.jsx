import React, { useState, useEffect } from 'react';
import "../style/NavigationBar.css"
import Image from "../image/lm.png";
import axios from 'axios';
import ProjectNameList from './ProjectNameList';

function NavigationBar() {
  const token = localStorage.getItem('access_token')
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(token){
           const response = await axios.get('https://vaabr5.pythonanywhere.com/api/tracker/projects/userProjects/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }); 
        setProjectData(response.data);

        }

      } catch (error) {
        console.error('Помилка при отриманні проектів:', error);
 
      }
    };

    fetchData();
  }, [token]); 

  const [practice1DivVisible, setPractice1DivVisible] = useState(true);
  const [practice2DivVisible, setPractice2DivVisible] = useState(true);
  const [showDivsButtonClicked, setShowDivsButtonClicked] = useState(false);

  const toggleDivs = (practiceDivId) => {
    if (practiceDivId === 'practice1Div') {
      setPractice1DivVisible(true);
      setPractice2DivVisible(false);
      setShowDivsButtonClicked(false);
    } else if (practiceDivId === 'practice2Div') {
      setPractice2DivVisible(true);
      setPractice1DivVisible(false);
      setShowDivsButtonClicked(false);
    }
  };
  const handleShowDivsButtonClick = () => {
    setShowDivsButtonClicked(true);
    setPractice2DivVisible(true);
    setPractice1DivVisible(true);
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

        {projectData && (
          <ProjectNameList data = {projectData} />
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
              <div className="main-task-tracker">TaskTracker2</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracker2</div>
            </div>
            <div className="main-group">
              <img className="main-rectangle" src={Image} />
              <div className="main-task-tracker">TaskTracke2r2</div>
            </div>
          </div>
        </div>

        <div className="main-recent" id='practice1Div' style={{ display: showDivsButtonClicked ? 'block' : 'none' }}>
          <div className="main-line"></div>

          <div className="main-div-myproject">Гостьові Проекти</div>

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

        <div className="main-recent" id='practice2Div' style={{ display: showDivsButtonClicked ? 'block' : 'none' }}>
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
