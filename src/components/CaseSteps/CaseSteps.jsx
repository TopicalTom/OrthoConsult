import React from 'react';
import { useStep } from "../../contexts/StepProvider";

// Components
import CaseType from '../CaseType/CaseType';
import PatientInfo from '../PatientInfo/PatientInfo';
import PatientQualifier from '../PatientQualifier/PatientQualifier';
import ModelLeft from '../Step3/Step3';
import ModelRight from '../Step4/Step4';
import Maloclussion from '../Step5/Step5';
import Step6 from '../Step6/Step6';
import Step7 from '../Step7/Step7';
import Step8 from '../Step8/Step8';
import Step9 from '../Step9/Step9';
import Step10 from '../Step10/Step10';
import Step11 from '../Step11/Step11';
import Step12 from '../Step12/Step12';
import Step13 from '../Step13/Step13';
import Step14 from '../Step14/Step14';
import Step15 from '../Step15/Step15';
import Step16 from '../Step16/Step16';
import Step17 from '../Step17/Step17';
import Step18 from '../Step18/Step18';
import Step19 from '../Step19/Step19';
import Step20 from '../Step20/Step20';
import Step21 from '../Step21/Step21';
import Step22 from '../Step22/Step22';

function CaseSteps() {
    const { currentStep } = useStep();

    switch (currentStep) {
        case 0:
            return <CaseType />;
        case 1:
            return <PatientInfo />;
        case 2:
            return <PatientQualifier />;
        case 3:
            return <ModelLeft />;            
        case 4:
            return <ModelRight />;
        case 5:
            return <Maloclussion />;
        case 6:
            return <Step6 />;
        case 7:
            return <Step7 />;            
        case 8:
            return <Step8 />;
        case 9:
            return <Step9 />;
        case 10:
            return <Step10 />;
        case 11:
            return <Step11 />;            
        case 12:
            return <Step12 />;
        case 13:
            return <Step13 />;
        case 14:
            return <Step14 />;
        case 15:
            return <Step15 />;            
        case 16:
            return <Step16 />;
        case 17:
            return <Step17 />;
        case 18:
            return <Step18 />;
        case 19:
            return <Step19 />;            
        case 20:
            return <Step20 />;
        case 21:
            return <Step21 />;            
        case 22:
            return <Step22 />;
        default:
            return <div className="case__step"></div>;
    }
}
export default CaseSteps;

/*
import React from 'react';
import { useStep } from "../../contexts/StepProvider";

// Components
import Step0 from '../Step0/Step0';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import Step5 from '../Step5/Step5';
import Step6 from '../Step6/Step6';
import Step7 from '../Step7/Step7';
import Step8 from '../Step8/Step8';
import Step9 from '../Step9/Step9';
import Step10 from '../Step10/Step10';
import Step11 from '../Step11/Step11';
import Step12 from '../Step12/Step12';
import Step13 from '../Step13/Step13';
import Step14 from '../Step14/Step14';
import Step15 from '../Step15/Step15';
import Step16 from '../Step16/Step16';
import Step17 from '../Step17/Step17';
import Step18 from '../Step18/Step18';
import Step19 from '../Step19/Step19';
import Step20 from '../Step20/Step20';
import Step21 from '../Step21/Step21';
import Step22 from '../Step22/Step22';
import ProgressBar from '../ProgressBar/ProgressBar';

// Images
import Arrow from "../../assets/icons/back-arrow.svg";

function CaseSteps() {
    const { currentStep, previous, next } = useStep();

    

    return (
        <>
                        {currentStep === 0
                    ?   <></>
                    :   <button 
                            className="case__button case__button--previous" 
                            type="button" 
                            onClick={previous}>
                            <img 
                                className="case__icon case__icon--previous"
                                src={Arrow}
                            />
                            Case Type
                        </button> 
                }
            <Step0 />
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Step6 />
            <Step7 />
            <Step8 />
            <Step9 />
            <Step10 />
            <Step11 />
            <Step12 />
            <Step13 />
            <Step14 />
            <Step15 />
            <Step16 />
            <Step17 />
            <Step18 />
            <Step19 />
            <Step20 />
            <Step21 />
            <Step22 />
            <div className="case__nav">
                <div></div>
                <ProgressBar />
                {currentStep < 22
                    ?   <button 
                            className="case__button case__button--next" 
                            type="button" 
                            onClick={next}>
                            Continue
                        </button> 
                    :   <button 
                            className="case__button case__button--submit" 
                            type="submit">
                            Submit case
                        </button> 
                }
            </div>
        </>
    );
}
export default CaseSteps;

*/