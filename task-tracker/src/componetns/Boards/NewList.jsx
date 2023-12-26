import React, { useState, useRef, useEffect } from 'react';
import Img from '../../image/assets/add.png';
import Image from '../../image/assets/vector.png';
import axios from 'axios';

function NewList() {
  const [isFormVisible, setFormVisibility] = useState(false);
  const formRef = useRef(null);
  const [listName, setListName] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        hideForm();
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

  const handleCreateList = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const boardId = localStorage.getItem('boardID');
      // Make a POST request to create a new list
      const response = await axios.post(
        `https://vaabr5.pythonanywhere.com/api/tracker/projects/boards/${boardId}/lists/create/`,
        {
          name: listName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        hideForm(); 
        window.location.reload();

        console.log('List created successfully');
      } else {
        console.error(`Failed to create list: ${response.status}`);
      }
    } catch (error) {
      console.error('Error creating list:', error.message);
    }
  };

  return (
    <div>
      {isFormVisible && (
        <div className="form-create-description" id="form-create-list" ref={formRef}>
          <input className="input" type="text" placeholder="Назва списку" 
        value={listName}
        onChange={(e) => setListName(e.target.value)} />
          <div className="div">
            <button className="button1" onClick={handleCreateList}>
              Створити
            </button>
            <button onClick={hideForm}>
              <img alt="none" className="close-img2" src={Image} />
            </button>
          </div>
        </div>
      )}
      {!isFormVisible && (
        <button className="create-list" onClick={showForm}>
          <img alt="none" src={Img} />
          <p>Створити новий список</p>
        </button>
      )}
    </div>
  );
}

export default NewList;
