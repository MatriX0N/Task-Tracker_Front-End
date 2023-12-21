import React, { useState, useRef, useEffect } from 'react';

const RecentWindow = () => {
  const [recentWindowVisible, setRecentWindowVisible] = useState(false);
  const showRecentButtonRef = useRef(null);
  const recentWindowRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        recentWindowRef.current &&
        !recentWindowRef.current.contains(event.target) &&
        showRecentButtonRef.current !== event.target
      ) {
        setRecentWindowVisible(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleRecentWindow = () => {
    setRecentWindowVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <button className="recent recent-div" id="showRecentButton" ref={showRecentButtonRef} onClick={toggleRecentWindow}>
      Нещодавні
    <svg
      class="arrow2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_542_297"
        // style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_542_297)">
        <path
          d="M12 14.95C11.8667 14.95 11.7417 14.9292 11.625 14.8875C11.5084 14.8458 11.4 14.775 11.3 14.675L6.70005 10.075C6.51672 9.89166 6.42505 9.65833 6.42505 9.37499C6.42505 9.09166 6.51672 8.85833 6.70005 8.67499C6.88338 8.49166 7.11672 8.39999 7.40005 8.39999C7.68338 8.39999 7.91672 8.49166 8.10005 8.67499L12 12.575L15.9 8.67499C16.0834 8.49166 16.3167 8.39999 16.6 8.39999C16.8834 8.39999 17.1167 8.49166 17.3 8.67499C17.4834 8.85833 17.575 9.09166 17.575 9.37499C17.575 9.65833 17.4834 9.89166 17.3 10.075L12.7 14.675C12.6 14.775 12.4917 14.8458 12.375 14.8875C12.2584 14.9292 12.1334 14.95 12 14.95Z"
          fill="#48454D"
        />
      </g>
    </svg>
      </button>

      <div className="recent-window" id="recentWindow" ref={recentWindowRef} style={{ display: recentWindowVisible ? 'block' : 'none' }}>
        <div className="recent-window-rectangle">
          <div className="recent-window-div">Нещодавні</div>
          <button className="recent-window-project">Practice</button>
          <button className="recent-window-project">Practice 2.0</button>
        </div>
      </div>
    </>
  );
};

export default RecentWindow;
