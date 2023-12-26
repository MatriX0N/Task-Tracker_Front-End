import React from "react";
import HeaderWithAuth from "./componetns/HeaderWithAuth";
import SideBar from "./componetns/SideBar";
import NavigationBoard from "./componetns/NavigationBoard";
import axios from "axios";
import NewList from "./componetns/Boards/NewList";
import List from "./componetns/Boards/List";

const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post('https://vaabr5.pythonanywhere.com/api/user/token/refresh/', {
        refresh_token: refreshToken,
      });
  
      const newAccessToken = response.data.access;
      // Збереження нового токену доступу, наприклад, у localStorage або стані компонента
      localStorage.setItem('access_token', newAccessToken);
      
      return newAccessToken;
    } catch (error) {
      console.error('Помилка при оновленні токену доступу:', error);
      throw error;
    }
  };

  const refreshToken = localStorage.getItem('refresh_token');
refreshAccessToken(refreshToken);


function Boards(){
    return(
        <div>
            <HeaderWithAuth/>
            <SideBar/>
            <NavigationBoard/>
            <List/>
        </div>
    )
}

export default Boards;