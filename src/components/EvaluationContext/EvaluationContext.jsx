import React from 'react';
//import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useQuestion } from '../../contexts/QuestionProvider';

const EvaluationContext = (props) => {
    const { question } = useQuestion();
    const { title } = question;
    const { completion, step, value, number, threshold, range } = props
    
    return (
        <div className="evaluation__context">
            {completion
                ?   <svg 
                        className="evaluation__progress evaluation__progress--completed"
                        aria-hidden="true"
                        viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"/>
                    </svg>
                :   <div 
                        className={`
                        evaluation__progress 
                        evaluation__progress--${threshold ? "current" : "upcoming"}`}>
                        {number}
                    </div>
            }
            <h3 
                className={`
                evaluation__requirement 
                evaluation__requirement--${completion && !range ? "completed" : threshold ? "current" : "upcoming"}`}>
                {completion && !range
                    ?   `${step}: ${value}`
                    :   range
                        ?   title
                        :   step
                }
            </h3>
        </div>
    );
}
export default EvaluationContext;

/*
import React from 'react';
//import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useQuestion } from '../../contexts/QuestionProvider';

const EvaluationContext = (props) => {
    const { question } = useQuestion();
    const { title } = question;
    const { completion, step, value, number, threshold, range } = props
    
    return (
        <div className="evaluation__context">
            {completion
                ?   <>
                        <svg 
                            className="evaluation__progress evaluation__progress--completed"
                            aria-hidden="true"
                            viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"/>
                        </svg>
                        <h3 
                            className={`evaluation__requirement evaluation__requirement--completed`}>
                            {step}: {value}
                        </h3>
                    </>
                :   <>
                        <div 
                            className={`
                            evaluation__progress 
                            evaluation__progress--${threshold ? "current" : "upcoming"}`}>
                            {number}
                        </div>
                        <h3 
                            className={`
                            evaluation__requirement 
                            evaluation__requirement--${threshold ? "current" : "upcoming"}`}>
                            {range
                                ?   title
                                :   step
                            }
                        </h3>
                    </>
            }
        </div>
    );
}
export default EvaluationContext;

*/