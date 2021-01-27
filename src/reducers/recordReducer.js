// Handles Records Logic
function recordReducer(recordState, action) {
    const { drawing } = action.payload;
    switch (action.type) {

        // Stores vector strokes from canvas pad
        case "CAPTURE_DRAWING":
            return {
                ...recordState,
                rangeOfMotion: drawing,
            };  

        // Clears canvas pad of current vector strokes
        case "CLEAR_DRAWING":
            return {
                ...recordState,
                rangeOfMotion: [],
            };   
                
        // Adds drawing to records list (overrides previous)
        case "ADD_DRAWING":
            const removeDuplicate = recordState.records
                .filter(item => item.id !== action.payload.id);

            return {
                ...recordState,
                records: [
                    ...removeDuplicate,
                    action.payload
                ]
            }; 

        // Adds new record to records list
        case "ADD_RECORD":
            return {
                ...recordState,
                records: [
                    ...recordState.records,
                    action.payload
                ]
            };  

        // Returns records of non-matching ID
        case "REMOVE_RECORD":
            const updatedRecords = recordState.records
                .filter(item => item.id !== action.payload.id);

            return {
                ...recordState,
                records: [...updatedRecords]
            };

        default:
            return recordState;
    }
}

export default recordReducer;