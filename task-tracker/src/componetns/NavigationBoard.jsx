import React from "react";
import  WindowToshareBoards from './WindowToshareBoards'
import "../style/NavigationBoard.css"

const NavigationBoard = () => {
    return (
        <div className="navigation">
            
            <div className="navigation-task-tracker">TaskTracker</div>
            <div className="online">
                <img className="ava-1" src="../image/6e52c5529ce897d39c81652116f731d7.jpg" />
                <img className="ava-2" src="../image/6e52c5529ce897d39c81652116f731d7.jpg" />
                <img className="ava-3" src="../image/6e52c5529ce897d39c81652116f731d7.jpg" />
            </div>
                <WindowToshareBoards/>
            <button className="navigation-group" id="bourd-info1">
                <div className="navigation-ellipse"></div>
                <div className="navigation-ellipse"></div>
                <div className="navigation-ellipse"></div>
            </button>
        </div>
    );
}

export default NavigationBoard;