import React from "react";
import "../../style/Boards/NewList.css"
import NewList from "./NewList";
import NewTask from "./NewTask";

const List = () => {
    return(
        <div  class="lists">
            <NewTask/>
            <NewList/>
            
        </div>
    );
}

export default List;