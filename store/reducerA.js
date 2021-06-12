const initialState = {
    grade: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'reducerA/setGrade':
            return {
                ...state,
                grade: action.payload
            }
        default:
            return state
    }
}