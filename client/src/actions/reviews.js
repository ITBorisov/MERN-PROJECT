import axios from 'axios';


export function getReviews(limit = 10, start = 0, order = 'asc', list = '') {

    const request = axios.get(`/api/reviews?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data
            }
        }
        )


    return {
        type: 'GET_REVIEWS',
        payload: request
    }
}

export function getReviewWithReviewer(id) {

    const request = axios.get(`/api/getReview?id=${id}`)

    return (dispatch) => {
        request.then(({ data }) => {
            let review = data;

            axios.get(`/api/getReviewer?id=${review.ownerId}`)
                .then(({ data }) => {
                    let response = {
                        review,
                        reviewer: data
                    }
                 
                    dispatch({
                        type: 'GET_REVIEWER',
                        payload: response
                    })
                })
        })
    }
}


export function addReview(review){
    const request = axios.post('/api/review', review)
        .then(response => response.data);

    return {
        type:'ADD_REVIEW',
        payload:request
    }
}

export function getReview(id){
    const request = axios.get(`/api/getReview?id=${id}`)
        .then(response => response.data)

    return {
        type: 'GET_REVIEW',
        payload: request
    }
}

export function deleteReview(id){
    const request = axios.delete(`/api/delete_review?id=${id}`)
        .then(response => response.data)

    return {
        type: 'DELETE_REVIEW',
        payload: request
    }
}

export function updateReview(data){
    const request = axios.post(`/api/review_update`, data)
        .then(response => response.data)

    return {
        type: 'UPDATE_REVIEW',
        payload: request
    }
}

export function clearReview(){
    return{
        type: 'CLEAR_REVIEW',
        payload: {
            review:{},
            updateReview: false,
            reviewDeleted: false
        }
    }
}


export function getUserReviews(userId){
    const request = axios.get(`/api/user_reviews?user=${userId}`)
        .then(response => response.data)

    return {
        type: 'GET_USER_REVIEWS',
        payload: request
    }
}