import React, {useEffect, useState} from "react";
import NewList from "./NewList";
import '../../style/Boards.css'
import ListWithTask from "./ListWithTask";
import axios from "axios";
const List = () => {

    const [lists, setLists] = useState([]);
    const token = localStorage.getItem('access_token');
    const boardId = localStorage.getItem('boardID');
    useEffect(() => {
      const fetchLists = async () => {
        try {
          const response = await axios.get(
            `https://vaabr5.pythonanywhere.com/api/tracker/projects/boards/${boardId}/lists/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          if (response.status !== 200) {
            throw new Error(`Failed to fetch lists: ${response.status}`);
          }
  
          const data = response.data;
          setLists(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching lists:', error.message);
        }
      };
  
      fetchLists();
    }, [boardId, token]);

    return(


        <div  class="lists">
            {lists.map(list => (
                <ListWithTask data={list}/>
            ))}
            <NewList/>
            
        </div>
    );
}

export default List;