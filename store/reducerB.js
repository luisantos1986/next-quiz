const initialState = {
    questions: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'reducerB/addToList':
            return {
                ...state,
                questions: [...state.questions, action.payload]
            }
        default:
            return state
    }
}