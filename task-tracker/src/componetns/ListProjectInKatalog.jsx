import React, { useState } from "react";

const ListProjectInKatalog = ({ data }) => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <div>
            {data.map((item) => (
                localStorage.getItem('userID') == item.author && (
                <div>
                    <div className="main-div-practice">{item.name}</div>
                    <div className="main-group-img">
                        <a href="boards.html">
                            <div className="main-group">
                                <img className="main-rectangle" src={Image} alt='' />
                                <div className="main-task-tracker">TaskTracker</div>
                            </div>
                        </a>
                        <div className="main-group">
                            <img className="main-rectangle" src={Image} alt='' />
                            <div className="main-task-tracker">TaskTracker</div>
                        </div>
                        <div className="main-group">
                            <img className="main-rectangle" src={Image} alt='' />
                            <div className="main-task-tracker">TaskTracker</div>
                        </div>
                    </div>
                </div>)
            ))}
        </div>
    );
}

export default ListProjectInKatalog;