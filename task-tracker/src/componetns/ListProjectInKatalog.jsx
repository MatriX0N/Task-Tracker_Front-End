import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from '../image/lm.png'

function ListProjectInKatalog({ projectId }) {
    const [boards, setBoards] = useState([]);
    const token = localStorage.getItem('access_token');

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get(
                    `https://vaabr5.pythonanywhere.com/api/tracker/projects/${projectId}/boards/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status !== 200) {
                    throw new Error(`Failed to fetch boards: ${response.status}`);
                }

                const data = response.data; // Axios already parses JSON
                setBoards(data);
                console.log(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchBoards();
    }, [projectId, token]);

    const onClickBoard = (boardID) => {
        localStorage.setItem('boardID', boardID);
        window.location.pathname = '/Boards'
    }

    return (
        <div className="main-group-img">
            {boards.map(board => (
                <div className="main-group" onClick={() => onClickBoard(board.id)}>
                    <img className="main-rectangle" src={Image} alt='' />
                    <div className="main-task-tracker">{board.name}</div>
                </div>
            ))}
        </div>
    );
}

export default ListProjectInKatalog;
