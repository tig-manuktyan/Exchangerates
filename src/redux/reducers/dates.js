const initialState = {
    previousData: [],
    activeSelect: ''
}

export default function dates(state = initialState, { type, payload }) {
    switch (type) {
        case 'SET_ROUTE_LIST':
            let newState = {
                ...state,
                previousData: [...state.previousData, payload]
            };
            if (newState.previousData.length > 5) {
                newState.previousData.shift()
            }
            return newState;
        case 'SET_SELECET':
            return { ...state, activeSelect: payload }
        default:
            return state
    }
}

