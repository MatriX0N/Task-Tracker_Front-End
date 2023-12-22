import React from "react";
import HeaderWithAuth from "./componetns/HeaderWithAuth";
import SideBar from "./componetns/SideBar";
import WindowToshareBoards from "./componetns/WindowToshareBoards";
import NavigationBoard from "./componetns/NavigationBoard";




function Boards(){
    return(
        <div>
            <HeaderWithAuth/>
            <SideBar/>
            {/* <WindowToshareBoards/> */}
            <NavigationBoard/>
        </div>
    )
}

export default Boards;