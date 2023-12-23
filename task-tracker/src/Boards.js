import React from "react";
import HeaderWithAuth from "./componetns/HeaderWithAuth";
import SideBar from "./componetns/SideBar";
import NavigationBoard from "./componetns/NavigationBoard";




function Boards(){
    return(
        <div>
            <HeaderWithAuth/>
            <SideBar/>
            <NavigationBoard/>
        </div>
    )
}

export default Boards;