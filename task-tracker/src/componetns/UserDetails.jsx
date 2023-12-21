import React, { useState, useRef, useEffect } from 'react';

const UserDetails = () => {
    const [showDetails, setShowDetails] = useState(false);
    const userInfoDetRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (userInfoDetRef.current && !userInfoDetRef.current.contains(event.target)) {
                setShowDetails(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userInfoDetRef]);

    function toggleDetails() {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <button id="showUserDetailsButton" onClick={toggleDetails}>
                <svg
                    className="user"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20 8.9543 40 20 40Z"
                        fill="url(#pattern0)"
                    />
                    <defs>
                        <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <use
                                xlinkHref="#image0_112_731"
                                transform="translate(0 -0.611111) scale(0.00173611)"
                            />
                        </pattern>
                        <image
                            id="image0_112_731"
                            width="576"
                            height="1280"
                            href="image/6e52c5529ce897d39c81652116f731d7.jpg"
                        />
                    </defs>
                </svg>
            </button>

            {showDetails && (
                <div className="window-user" id="userDetailsWindow" ref={userInfoDetRef}>
                    <div className="rectangle-45"></div>
                    <div className="e-mail-qwerty-qwerty">
                        E-mail:
                        <br />
                        qwerty@qwerty.com
                    </div>
                    <svg
                        className="user-interface-edit"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.71027 2.03804C10.5401 1.20818 11.8856 1.20819 12.7155 2.03805L13.5453 2.86791C14.3752 3.69778 14.3752 5.04326 13.5453 5.87312L13.2508 6.16759L9.41578 2.33252L9.71027 2.03804Z"
                            fill="url(#paint0_linear_314_925)"
                        />
                        <path
                            d="M4.10613 7.64788C4.00892 7.76382 3.93735 7.89949 3.89664 8.04596L2.86432 11.7596C2.70195 12.3437 3.23956 12.8814 3.8237 12.719L7.53735 11.6867C7.68382 11.646 7.81949 11.5744 7.93543 11.4772L4.10613 7.64788Z"
                            fill="url(#paint1_linear_314_925)"
                        />
                        <path
                            d="M13.2509 6.16759L9.41585 2.33252L4.16909 7.57921C4.14708 7.60122 4.12611 7.62413 4.1062 7.64787L7.9355 11.4772C7.95924 11.4573 7.98215 11.4363 8.00415 11.4143L13.2509 6.16759Z"
                            fill="#FF6A3A"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_314_925"
                                x1="13.1611"
                                y1="2.46771"
                                x2="3.01597"
                                y2="12.6129"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.208085" stop-color="#D70000" />
                                <stop offset="0.684316" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_314_925"
                                x1="13.1611"
                                y1="2.46771"
                                x2="3.01597"
                                y2="12.6129"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.208085" stop-color="#D70000" />
                                <stop offset="0.684316" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg
                        className="user-interface-edit2"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.71027 2.03804C10.5401 1.20818 11.8856 1.20819 12.7155 2.03805L13.5453 2.86791C14.3752 3.69778 14.3752 5.04326 13.5453 5.87312L13.2508 6.16759L9.41578 2.33252L9.71027 2.03804Z"
                            fill="url(#paint0_linear_546_426)"
                        />
                        <path
                            d="M4.10613 7.64788C4.00892 7.76382 3.93735 7.89949 3.89664 8.04596L2.86432 11.7596C2.70195 12.3437 3.23956 12.8814 3.8237 12.719L7.53735 11.6867C7.68382 11.646 7.81949 11.5744 7.93543 11.4772L4.10613 7.64788Z"
                            fill="url(#paint1_linear_546_426)"
                        />
                        <path
                            d="M13.2509 6.16759L9.41585 2.33252L4.16909 7.57921C4.14708 7.60122 4.12611 7.62413 4.1062 7.64787L7.9355 11.4772C7.95924 11.4573 7.98215 11.4363 8.00415 11.4143L13.2509 6.16759Z"
                            fill="#FF6A3A"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_546_426"
                                x1="13.1611"
                                y1="2.46771"
                                x2="3.01597"
                                y2="12.6129"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.208085" stop-color="#D70000" />
                                <stop offset="0.684316" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_546_426"
                                x1="13.1611"
                                y1="2.46771"
                                x2="3.01597"
                                y2="12.6129"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.208085" stop-color="#D70000" />
                                <stop offset="0.684316" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg
                        className="window-user1"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                            fill="url(#pattern0)"
                        />
                        <defs>
                            <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlinkHref="#image0_316_1020"
                                    transform="translate(0 -0.611111) scale(0.00173611)"
                                />
                            </pattern>
                            <image
                                id="image0_316_1020"
                                width="576"
                                height="1280"
                                href="../image/6e52c5529ce897d39c81652116f731d7.jpg"
                            />
                        </defs>
                    </svg>

                    <div className="user-565423-admin">
                        <span>
                            <span className="user-565423-admin-span">
                                Володя Онищук
                                <br />
                            </span>
                            <span className="user-565423-admin-span2">@user565423/Admin</span>
                        </span>
                    </div>
                    <button className="button-user">
                        <div className="window-user-div">Вийти</div>
                    </button>
                    <button className="window-user-div2">
                        <div className="window-user-div3">Змінити</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default UserDetails;