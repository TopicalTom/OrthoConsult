// Handles Checking for Question Completion
function validationReducer(validationState, action, values) {
    const { name, value } = action.payload;
    const { currentQuestion, dataState, recordState } = values;
        
    const valid = {
        ...validationState,
            [`step${currentQuestion}`]: {
                ...validationState[`step${currentQuestion}`],
                [name]: true
            }
        };
    const invalid = {
        ...validationState,
        [`step${currentQuestion}`]: {
            ...validationState[`step${currentQuestion}`],
            [name]: false
        }
    };
        
    switch (action.type) {
    
         // Ensures some content is provided
        case "CHECK_TEXT":
            if (value !== "" && value.length !== 0) {
                return valid;
            } else {
                return invalid;
            }                     
            
        // Ensures a non-zero or negative number is provided
        case "CHECK_NUMBER":
            if (value !== null && value !== 0 && value > 0) {
                    return valid;
            } else {
                return invalid;
            }   
            
        // Ensures a non-zero or negative number is provided
        case "CHECK_SELECTION":
            if (value !== "") {
                return valid;
            } else {
                return invalid;
            }   
            
        // Ensures selection value is stored
        case "CHECK_FIELD":
            if (value !== "") {
                return valid;
            } else {
                return invalid;
            }                  
            
        // Determines if object of values has at least one true value
        case "CHECK_FIELDS":
            if (Object.values(dataState[name]).some((val) => val === true)) {
                return valid;
            } else {
                return invalid;
            }  
            
        // Determines if object of values has at least one true value
        case "CHECK_TOGGLE":
            if (value !== false) {
                return valid;
            } else {
                return invalid;
            }  
            
        // Determines if object of values has at least one true value
        case "CHECK_DRAWING":
            if (recordState.records.length !== 0) {
                return valid;
            } else {
                return invalid;
            }  
                
        // Determines if object of values has at least one true value
        case "CHECK_RECORDS":
            if (recordState.records.length > 1) {
                return valid;
            } else {
                return invalid;
            }  

        default:
            return validationState;
    }
}

export default validationReducer;