import React from "react";
import HeaderWithAuth from "./componetns/HeaderWithAuth";
import SideBar from "./componetns/SideBar";
import Participant from "./componetns/Participant";
import WindowToshare from "./componetns/WindowToshare";


function Participants(){
    return(
        <div>
            <HeaderWithAuth/>
            <SideBar/>
            <Participant/>
            <WindowToshare/>
        </div>
    )
}

export default Participants;