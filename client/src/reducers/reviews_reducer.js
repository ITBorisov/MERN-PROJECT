export default function(state={}, action){
    switch(action.type){

        case 'GET_REVIEWS':
            return {...state, list:action.payload }
        case 'GET_REVIEW':
            return {...state, review: action.payload}
        case 'GET_REVIEWER':
            return {
                ...state, 
                review: action.payload.review, 
                reviewer: action.payload.reviewer
            }
        case 'ADD_REVIEW':
            return {...state,
                    newReview: action.payload}
        case 'UPDATE_REVIEW':
                return{
                    ...state, 
                    updateReview: action.payload.success,
                    review: action.payload.doc
                }
        case 'DELETE_REVIEW':
                return {...state, reviewDeleted: action.payload}
        case 'CLEAR_REVIEW':
                return{...state, 
                    updateReview: action.payload.updateReview, 
                    review: action.payload.review,
                    reviewDeleted: action.payload.reviewDeleted }
        default:
            return state;
    }
}