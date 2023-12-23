import React from "react";
import "../style/headerWithoutAuth.css"

const HeaderWithoutAuth = () => {
    return (
        <div>
            <div class="rectangle-1"></div>
            <div class="task-tracker">TaskTracker</div>
            <div class="group-56">
                <div class="rectangle-26"></div>
                <div class="rectangle-27"></div>
                <div class="rectangle-28"></div>
            </div>
            <button class="frame-18">
                <a href="/Authorization" class="div">Увійти</a>
            </button>
        </div>
    );
}

export default HeaderWithoutAuth;