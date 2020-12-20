import React, {useState, useRef, useEffect} from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Dependencies
import SignatureCanvas from 'react-signature-canvas'

function RangeOfMotion() {
    const { dispatch, state } = useData();
    const { rangeOfMotion } = state.tmj;
    const [ drawing, setDrawing ] = useState(rangeOfMotion);
    const sigPad = useRef(drawing);

    // Clears the Signature Pad
    const clear = () => {
        sigPad.current.clear();

        dispatch ({
            type: "CLEAR_DRAWING",
            payload: drawing
        })
    }

    // Captures the Signature Pad
    const capture = () => {
        setDrawing(sigPad.current.toData());
        console.log(sigPad.current.toData())

        dispatch ({
            type: "CAPTURE_DRAWING",
            payload: drawing
        })
    }    
    
    // Saves the Signature Pad as an Image
    const save = () => {
        setDrawing(sigPad.current.toData());

        dispatch ({
            type: "SAVE_DRAWING",
            payload: drawing
        })
    }

    useEffect(() => {
        setDrawing(sigPad.current.fromData(rangeOfMotion));

        dispatch ({
            type: "CAPTURE_DRAWING",
            payload: sigPad.current.toData()
        })
    }, [drawing])

    return (
        <div className="case__content case__content--default">
            <div className="case__tester">
                <div className="case__divide"/>
                <SignatureCanvas 
                    canvasProps={{
                        className: "case__draw"
                    }}
                    clearOnResize
                    velocityFilterWeight="0"
                    ref={sigPad} 
                />
            </div>
            <div className="case__column">
                <button
                    className="case__button case__button--capture"
                    type="button"
                    onClick={save}>
                    Save
                </button>
                <button
                    className="case__button case__button--clear"
                    type="button"
                    onClick={clear}>
                    Reset
                </button>
            </div>
        </div>
    );
}
export default RangeOfMotion;