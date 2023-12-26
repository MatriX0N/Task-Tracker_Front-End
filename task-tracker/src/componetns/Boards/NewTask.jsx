import React, { useState } from "react";
import AddImg from '../../image/assets/add.png'
import ListImg from '../../image/assets/3.png'
import Image from '../../image/assets/vector.png';
import '../../style/Boards/NewList.css'

const NewTask = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const showForm = () => {
    setFormVisibility(true);
  };

  const hideForm = () => {
    setFormVisibility(false);
  };

  const handleCreateCard = () => {
    // Логіка для обробки створення картки
    hideForm(); // Приховати форму після створення картки
  };

  return (
    <div>
      <div className="list">
        <div className="list-name">
          <p>Doing</p>
          <img className="img-actions-list" src={ListImg} alt="List Actions" />
        </div>

        <button className="create-card" id="create-card" onClick={showForm}>
          <img className="add-img" alt="Add Card" src={AddImg} />
          <p className="create-card-txt">Додати картку</p>
        </button>
      </div>

      {isFormVisible && (
        <div className="beak" id="form-create-card">
          <div className="form-create-card">
            <div className="list-name">
              <p>Doing</p>
            </div>

            <input className="input" type="text" placeholder="Увести назву для цієї картки..." />
            <div className="div1">
              <button className="button" onClick={handleCreateCard}>
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
};

export default NewTask;
