const INITIAL_STATE = [];

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SAVE_PRODUCTS": {
            return action.payload;
        }

        default:
            return state;
    }
};

export default productsReducer;
