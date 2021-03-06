import React, {useState, useRef, useEffect} from 'react';
import "./CanvasPad.scss";

// Contexts
import { useValidation } from "../../contexts/ValidationProvider";
import { useEvaluation } from '../../contexts/EvaluationProvider';

// Dependencies
import SignatureCanvas from 'react-signature-canvas'

function CanvasPad() {
    const { recordDispatch, recordState } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { rangeOfMotion } = recordState;
    const [ drawing, setDrawing ] = useState(rangeOfMotion);
    const sigPad = useRef(drawing);

    // Clears the Signature Pad
    const clear = () => {
        sigPad.current.clear();

        recordDispatch ({
            type: "CLEAR_DRAWING",
            payload: {
                name: "rangeOfMotion",
                drawing: []
            }
        })
    }   
    
    // Adds 
    const upload = () => {
        const file = sigPad.current.getCanvas().toDataURL('image/png');
        const size = file.length * (3/4);

        console.log(file)

        recordDispatch ({
            type: "ADD_DRAWING",
            payload: {
                id: "base64",
                name: "Range Of Motion",
                preview: file,
                meta: {
                    file: file,
                    size: size
                }
            }
        })

        validationDispatch ({
            type: "CHECK_DRAWING",
            payload: {
                name: "rangeOfMotion",
            }
        })
    }

    useEffect(() => {
        setDrawing(sigPad.current.fromData(rangeOfMotion));

        recordDispatch ({
            type: "CAPTURE_DRAWING",
            payload: {
                name: "rangeOfMotion",
                drawing: sigPad.current.toData()
            }
        })
    }, [drawing]);

    return (
        <div className="canvas">
            <div className="canvas__container canvas__container--pad">
                <label className="canvas__label canvas__label--left">Patient Left</label>
                <label className="canvas__label canvas__label--right">Patient Right</label>
                <div className="canvas__overlay canvas__overlay--top"/>
                <div className="canvas__overlay canvas__overlay--divide"/>
                <SignatureCanvas 
                    canvasProps={{
                        className: "canvas__pad"
                    }}
                    clearOnResize
                    velocityFilterWeight="0"
                    ref={sigPad} 
                />
            </div>
            <div className="canvas__actions">
                <button
                    className="canvas__button"
                    type="button"
                    onClick={upload}>
                    Upload
                </button>
                <button
                    className="canvas__button"
                    type="button"
                    onClick={clear}>
                    Clear
                </button>
            </div>
        </div>
    );
}
export default CanvasPad;