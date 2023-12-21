import React, { useState, useRef, useEffect } from 'react';

const CreateWindow = () => {
  const [createWindowVisible, setCreateWindowVisible] = useState(false);
  const [createBoardsWindowVisible, setCreateBoardsWindowVisible] = useState(false);
  const [createProjectWindowVisible, setCreateProjectWindowVisible] = useState(false);

  const showCreateButtonRef = useRef(null);
  const createBoardsButtonRef = useRef(null);
  const createProjectButtonRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const createWindows = [
        { ref: showCreateButtonRef, isVisible: createWindowVisible, setVisible: setCreateWindowVisible },
        { ref: createBoardsButtonRef, isVisible: createBoardsWindowVisible, setVisible: setCreateBoardsWindowVisible },
        { ref: createProjectButtonRef, isVisible: createProjectWindowVisible, setVisible: setCreateProjectWindowVisible },
      ];

      createWindows.forEach((window) => {
        if (window.ref.current && !window.ref.current.contains(event.target)) {
          window.setVisible(false);
        }
      });
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [createWindowVisible, createBoardsWindowVisible, createProjectWindowVisible]);

  const toggleCreateWindow = () => {
    setCreateWindowVisible((prevVisible) => !prevVisible);
  };

  const toggleCreateBoardsWindow = (e) => {
    e.stopPropagation();
    setCreateBoardsWindowVisible((prevVisible) => !prevVisible);
  };

  const closeCreateBoardsWindow = () => {
    setCreateBoardsWindowVisible(false);
  };

  const toggleCreateProjectWindow = (e) => {
    e.stopPropagation();
    setCreateProjectWindowVisible((prevVisible) => !prevVisible);
  };

  const closeCreateProjectWindow = () => {
    setCreateProjectWindowVisible(false);
  };

  return (
    <>
      <button className="button-create" id="showCreateButton" ref={showCreateButtonRef} onClick={toggleCreateWindow}>
        <div className="button-create-div">Створити</div>
      </button>

      <div className="create-window" id="createWindow" style={{ display: createWindowVisible ? 'block' : 'none' }}>
        <div className="create-window-rectangle"></div>
        <div className="create-boards">
          <button className="create-window-div1" id="createBoardsButton" onClick={toggleCreateBoardsWindow}>
            Створити дошку
          </button>
          <div className="icon-boards">
            <div className="rectangle-29"></div>
            <div className="rectangle-30"></div>
            <div className="rectangle-31"></div>
          </div>
        </div>
        <div className="create-project">
          <div className="create-project1">
            <button className="create-project-div" id="showCreateProjectButton" onClick={toggleCreateProjectWindow}>
              Створити проект
            </button>
          </div>
        </div>
        <svg
          className="view-list"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_182_560" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_182_560)">
            <path
              d="M3 18.0283V7.95996C3 7.4062 3.19583 6.93215 3.5875 6.53781C3.97917 6.14346 4.45 5.94629 5 5.94629H19C19.55 5.94629 20.0208 6.14346 20.4125 6.53781C20.8042 6.93215 21 7.4062 21 7.95996V18.0283C21 18.5821 20.8042 19.0561 20.4125 19.4505C20.0208 19.8448 19.55 20.042 19 20.042H5C4.45 20.042 3.97917 19.8448 3.5875 19.4505C3.19583 19.0561 3 18.5821 3 18.0283ZM5 9.97363H7V7.95996H5V9.97363ZM9 9.97363H19V7.95996H9V9.97363ZM9 14.001H19V11.9873H9V14.001ZM9 18.0283H19V16.0146H9V18.0283ZM5 18.0283H7V16.0146H5V18.0283ZM5 14.001H7V11.9873H5V14.001Z"
              fill="#C0C0C0"
            />
          </g>
        </svg>
      </div>

      <div className="window-create-boards" id="createBoardsWindow" style={{ display: createBoardsWindowVisible ? 'block' : 'none' }}>
        <div className="window-create-boards-rectangle"></div>
        <form>
          <input
            className="window-create-boards-input window-create-boards-div"
            required
            placeholder="Назва дошки"
          ></input>

          <button>
            <svg
              className="window-create-boards-vector"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1014 9.5L18.5029 4.09849C19.1657 3.43565 19.1657 2.36097 18.5029 1.69758L17.3024 0.497131C16.6396 -0.16571 15.5649 -0.16571 14.9015 0.497131L9.5 5.89864L4.09849 0.497131C3.43565 -0.16571 2.36097 -0.16571 1.69759 0.497131L0.497131 1.69758C-0.16571 2.36043 -0.16571 3.43511 0.497131 4.09849L5.89864 9.5L0.497131 14.9015C-0.16571 15.5643 -0.16571 16.639 0.497131 17.3024L1.69759 18.5029C2.36043 19.1657 3.43565 19.1657 4.09849 18.5029L9.5 13.1014L14.9015 18.5029C15.5643 19.1657 16.6396 19.1657 17.3024 18.5029L18.5029 17.3024C19.1657 16.6396 19.1657 15.5649 18.5029 14.9015L13.1014 9.5Z"
                fill="#797575"
              />
            </svg>
          </button>

          <div className="window-create-boards-div2">Створити дошку</div>
          <div className="window-create-boards-div3">Оберіть проект</div>
          <button className="window-create-boards-button">
            <div className="window-create-boards-div4">Створити</div>
          </button>
          <select className="window-create-boards-select">
            <option>Practice</option>
            <option>Practice2.0</option>
          </select>
        </form>
      </div>

      <div className="window-create-project" id="createProjectWindow" style={{ display: createProjectWindowVisible ? 'block' : 'none' }}>
        <div className="window-create-project-rectangle"></div>
        <form>
          <input
            className="window-create-project-input window-create-project-div"
            required
            placeholder="Назва дошки"
          ></input>
          <svg
            className="window-create-project-vector"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1014 9.5L18.5029 4.09849C19.1657 3.43565 19.1657 2.36097 18.5029 1.69758L17.3024 0.497131C16.6396 -0.16571 15.5649 -0.16571 14.9015 0.497131L9.5 5.89864L4.09849 0.497131C3.43565 -0.16571 2.36097 -0.16571 1.69759 0.497131L0.497131 1.69758C-0.16571 2.36043 -0.16571 3.43511 0.497131 4.09849L5.89864 9.5L0.497131 14.9015C-0.16571 15.5643 -0.16571 16.639 0.497131 17.3024L1.69759 18.5029C2.36043 19.1657 3.43565 19.1657 4.09849 18.5029L9.5 13.1014L14.9015 18.5029C15.5643 19.1657 16.6396 19.1657 17.3024 18.5029L18.5029 17.3024C19.1657 16.6396 19.1657 15.5649 18.5029 14.9015L13.1014 9.5Z"
              fill="#797575"
            />
          </svg>

          <div className="window-create-project-div2">Створити проект</div>
          <div className="window-create-project-div3">Опис проекту</div>
          <button className="window-create-project-button">
            <div className="window-create-project-div4">Створити</div>
          </button>
          <input
            className="window-create-project-input2 window-create-project-div5"
            required
            placeholder="Додайте опис проекту"
          ></input>
        </form>
      </div>
    </>
  );
};

export default CreateWindow;
