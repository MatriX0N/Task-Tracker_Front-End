import React, { useState } from 'react';
import Img from '../../image/assets/add.png';
import Image from '../../image/assets/vector.png';
import '../../style/Boards/NewList.css';

function NewList() {
  const [isFormVisible, setFormVisibility] = useState(false);

  const showForm = () => {
    setFormVisibility(true);
  };

  const hideForm = () => {
    setFormVisibility(false);
  };

  const handleCreateList = () => {
    // Додайте код для обробки створення списку тут
    hideForm(); // Приховати форму після створення списку
  };

  return (
    <div>
      {isFormVisible && (

            <div className="form-create-description" id="form-create-list">
          <input className="input" type="text" placeholder="Назва списку" />
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
