import React, { useState } from 'react'
import './Toggle.scss'

const Toggle = (props) => {
    const {id, label, data} = props
    const [selected, setSelected] = useState(data);

    function toggle() {
        {selected !== true ? setSelected(true) : setSelected(false)}
    }

    return (
        <div className="toggle">
            <input
                className="switch"
                id={id}
                type="checkbox"
                onChange={toggle}
                value={selected}
                checked={selected === true ? true : false}
            />
            <label
                className="switch__label"
                htmlFor={id}
            >
                <span className="switch__button" />
            </label>
            <p className="toggle__type">{label}</p>
        </div>
    )
};

export default Toggle;