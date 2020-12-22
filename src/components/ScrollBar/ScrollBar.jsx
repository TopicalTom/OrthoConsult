import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from "../../contexts/ScrollProvider";
import "./ScrollBar.scss";

function ScrollBar() {
    const { position } = useScroll();

    return (
        <div className={`scrollbar scrollbar--${position > 50 ? "inactive" : "active"}`}>
            <div className="scrollbar__scroll">
                Indicator
            </div>
        </div>
    );
};

export default ScrollBar;