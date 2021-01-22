// Handles Data Logic
function dataReducer(dataState, action) {
    const { name, value, group, path } = action.payload;
    switch (action.type) {

        // Stores Data at the top level of state
        case "STORE_DATA":
            return {
                ...dataState,
                [name]: value
            };

        // Stores Data within an object of state
        case "STORE_AS_NESTED_DATA":            
            return {
                ...dataState,
                [group]: {
                    ...path,
                    [name]: value
                }
            }; 

        // Stores Data & clears None Value within an object of state
        case "STORE_AS_NESTED_COLLECTION_DATA":
            return {
                ...dataState,
                [group]: {
                    ...path,
                    none: false,
                    [name]: value
                }
            };       
            
        // Sets Data as None Value within an object of state
        case "STORE_AS_EMPTY_NESTED_COLLECTION_DATA":
            return {
                ...dataState,
                [group]: {
                    [name !== "none"]: false,
                    none: true
                }
            };

        default:
            return dataState;
    }
}

export default dataReducer;