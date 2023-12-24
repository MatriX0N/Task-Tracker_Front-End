import axios from 'axios';
import React, { useState, useEffect } from 'react';

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

    return (
        <div className="main-group-img">
            {boards.map(board => (
                <div className="main-group">
                    <img className="main-rectangle" src={board.background_photo} alt='' />
                    <div className="main-task-tracker">{board.name}</div>
                </div>
            ))}
        </div>
    );
}

export default ListProjectInKatalog;
