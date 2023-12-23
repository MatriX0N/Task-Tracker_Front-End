import React from "react";
import HeaderWithAuth from "./componetns/HeaderWithAuth";
import NavigationBar from "./componetns/NavigationBar";
import axios from "axios";
const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post('https://vaabr5.pythonanywhere.com/api/user/token/refresh/', {
        refresh_token: refreshToken,
      });
  
      const newAccessToken = response.data.access;
      console.log(response.data.access);
      // Збереження нового токену доступу, наприклад, у localStorage або стані компонента
      localStorage.setItem('access_token', newAccessToken);
      console.log('Новий токен доступу:', newAccessToken);
      
      return newAccessToken;
    } catch (error) {
      console.error('Помилка при оновленні токену доступу:', error);
      throw error;
    }
  };

  const refreshToken = localStorage.getItem('refresh_token');
refreshAccessToken(refreshToken);

function Katalog (){
    return(
        <div>
            <HeaderWithAuth/>
            <NavigationBar/>

        </div>
    )
}

export default Katalog;