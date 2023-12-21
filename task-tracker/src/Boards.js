import React from "react";
import HeaderWithAuth from "./componetns/HeaderWithAuth";
import SideBar from "./componetns/SideBar";
import WindowToshareBoards from "./componetns/WindowToshareBoards";




function Boards(){
    return(
        <div>
            <HeaderWithAuth/>
            <SideBar/>
            <WindowToshareBoards/>
        </div>
    )
}

export default Boards;