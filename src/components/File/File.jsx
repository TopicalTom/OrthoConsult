import React, {useState} from 'react';
import { useEvaluation } from '../../contexts/EvaluationProvider';
import './File.scss';

// Assets
import kebab from '../../assets/icons/kebab.svg';

const File = (props) => {
    const { preview, id, name, size } = props;
    const { recordDispatch } = useEvaluation();
    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        if (isOpen !== true) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    const handleRemove = () => {
        recordDispatch ({
            type: "REMOVE_RECORD",
            payload: { id: id }
        })
        setIsOpen(false)
    }

    return (
        <article className="file">
            <img 
                className="file__preview" 
                src={preview}
            />
            <div className="file__details">
                <span 
                    className="file__name">
                    {name}
                </span>
                <span 
                    className="file__size">
                    {size}
                </span>
            </div>
            <div className="file__actions">
                <button
                    className="file__button"
                    onClick={() => handleToggle()}>
                    <img 
                        className="file__kebab" 
                        src={kebab}
                    />
                </button>
                {isOpen &&
                    <ul className="file__dropdown">
                        <li 
                            className="file__option">
                            Edit name
                        </li>
                        <li 
                            className="file__option"
                            onClick={() => handleRemove()}>
                            Remove
                        </li>
                    </ul>
                }
            </div>
        </article>
    );
}

export default File;