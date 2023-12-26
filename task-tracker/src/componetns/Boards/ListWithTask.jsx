import React, { useState, useEffect, useRef } from "react";
import Image1 from '../../image/assets/3.png'
import Image2 from '../../image/assets/calendartoday.png'
import Image3 from '../../image/assets/schedule.png'
import Image4 from '../../image/assets/add.png'
import Image from '../../image/assets/vector.png';
import axios from "axios";



const ListWithTask = ({ data }) => {


    const [isFormVisible, setFormVisibility] = useState(false);
    const [isFormVisible1, setFormVisibility1] = useState(false);
    const formRef = useRef(null);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric' };

        const formattedDate = dateTime.toLocaleDateString('uk-UA', dateOptions);
        const formattedTime = dateTime.toLocaleTimeString('uk-UA', timeOptions);

        return { formattedDate, formattedTime };
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                hideForm();
                hideForm1();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [formRef]);

    const showForm = () => {
        setFormVisibility(true);
    };

    const hideForm = () => {
        setFormVisibility(false);
    };
    const showForm1 = () => {
        setFormVisibility1(true);
    };

    const hideForm1 = () => {
        setFormVisibility1(false);
    };


    useEffect(() => {
        const fetchTasks = async () => {
            const listId = data.id;  // Замініть на реальний ідентифікатор списку
            const accessToken = localStorage.getItem('access_token');  // Замініть на реальний токен доступу

            const url = `https://vaabr5.pythonanywhere.com/api/tracker/projects/boards/lists/${listId}/tasks/`;

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.status}`);
                }


                const data = await response.json();
                setTasks(data);
                setError(null);
            } catch (error) {
                console.error('Error fetching tasks:', error.message);
                setError(error.message);
            }
        };

        fetchTasks();
    }, []);

    const [taskData, setTaskData] = useState({
        title: '',
        description: 'description',
        priority: 'medium',
        due_date: '2023-12-31T23:59:59',
        assignee: 2,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('access_token');

        try {
            const response = await axios.post(
                `https://vaabr5.pythonanywhere.com/api/tracker/projects/boards/lists/${data.id}/tasks/create/`,
                taskData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            window.location.reload();


            hideForm()
        } catch (error) {
            console.error('Error creating task:', error.message);
        }
    }

    const handleDelete = async () => {
        const listId = data.id;
        const accessToken = localStorage.getItem('access_token');
        try {
          const response = await axios.delete(
            `https://vaabr5.pythonanywhere.com/api/tracker/projects/boards/lists/${listId}/delete/`,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
              },
            }
          );
    
          if (response.ok) {
            console.log('List deleted successfully.');
          } else {
            console.error('Failed to delete list:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error during delete request:', error.message);
        }
        window.location.reload();

      };

    return (
        <div className="list">

            {isFormVisible1 && (
                <div className="beak" id="form-actions-list">
                    <div className="form-actions-list" ref={formRef}>
                        <p>Дії над списком</p>
                        <button href="#" id="close4">
                            <img className="close-img" src="./assets/vector.png" />
                        </button>
                        <button className="edit-title">Редагувати назву</button>
                        <button className="create-a-task ">Створити завдання</button>
                        <button onClick={() => handleDelete()} className="delete-list">Видалити список</button>
                    </div>
                </div>
            )}



            <div className="list-name">
                <p>{data.name}</p>
                <img alt="none" className="img-actions-list" src={Image1} onClick={showForm1} />
            </div>

            {tasks.map(task => (
                <div className="card" key={task.id}>
                    <div className="card-priority">{task.priority}</div>
                    <p className="card-txt">{task.description}</p>
                    <div className="card-footer">
                        <div className="date-time">
                            <img alt="none" className="img-calendar" src={Image2} />
                            <p className="date">{formatDateTime(task.due_date).formattedDate} </p>
                            <img alt="none" className="img-clock" src={Image3} />
                            <p className="time">{formatDateTime(task.due_date).formattedTime}</p>
                        </div>
                        <button href="#" className="a-card-info">
                            <img alt="none" src={Image1} />
                        </button>
                    </div>
                </div>
            ))}


            <button className="create-card" id="create-card" onClick={showForm}>
                <img className="add-img" alt="Add Card" src={Image4} />
                <p className="create-card-txt">Додати завдання</p>
            </button>
            {isFormVisible && (
                <div className="beak" id="form-create-card" >
                    <div className="form-create-card" ref={formRef}>
                        <div className="list-name">
                            <p>Doing</p>
                        </div>

                        <input
                            className="input"
                            type="text"
                            placeholder="Увести назву для цієї картки..."
                            value={taskData.title}
                            name="title"
                            onChange={handleChange} />
                        <div className="div1">
                            <button className="button" onClick={handleSubmit}>
                                Додати картку
                            </button>
                            <button href="#" id="close3" onClick={hideForm}>
                                <img className="close-img1" src={Image} alt="Close Form" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListWithTask;