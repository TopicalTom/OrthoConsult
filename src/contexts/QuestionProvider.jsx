import React, { useContext, useState, createContext, useEffect } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useEvaluation } from "./EvaluationProvider";

// Templates
import allQuestions from '../templates/questions';

// Custom Step Management Hook
const QuestionContext = createContext(0);

export function useQuestion() {
    return useContext(QuestionContext)
}

// Handles Form Step Changes
export function QuestionProvider({ children }) {
    const { dataState } = useEvaluation();
    const { currentUser } = useAuth();
    const questions = allQuestions({dataState, currentUser});
    const length = questions.length;
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ question, setQuestion ] = useState(questions[currentQuestion]);

    useEffect(() => {
        setQuestion(questions[currentQuestion])
    }, [dataState]);

    function next() {
        let current = currentQuestion
        // If the current question is length of questions array, then add one on "next" button click
        current = current >= (length - 1) ? length : current + 1
        setCurrentQuestion(current)
        setQuestion(questions[current])
    }

    function previous() {
        let current = currentQuestion
        // If the current question is 0 or 1, then add one on "next" button click
        current = current <= 0 ? 1 : current - 1
        setCurrentQuestion(current)
        setQuestion(questions[current])
    }
    
    return (
        <QuestionContext.Provider value={{ question, currentQuestion, previous, next, length }}>
            {children}
        </QuestionContext.Provider>
    )
}