import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from "../../contexts/ScrollProvider";
import "./ScrollBar.scss";

function ScrollBar() {
    const { currentScroll } = useScroll();

    return (
        <div className={`scrollbar scrollbar--${currentScroll > 50 ? "inactive" : "active"}`}>
            <div className="scrollbar__scroll">
                Scoll
            </div>
        </div>
    );
};

export default ScrollBar;