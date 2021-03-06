import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FETCH_FAILED = 'FETCH_FAILED';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const FRIEND_NOT_SAVED = 'FRIEND_NOT_SAVED';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const FRIEND_NOT_UPDATED = 'FRIEND_NOT_UPDATED';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const FRIEND_NOT_DELETED = 'FRIEND_NOT_DELETED';
export const TOGGLE_FORM = 'TOGGLE_FORM';
export const TOGGLE_INFO = 'TOGGLE_INFO';

export function fetchFriends() {
    return (dispatch) => {
        dispatch({type: FETCH_FRIENDS})
        axios.get('http://localhost:5000/api/friends')
        .then(({data}) => {
            dispatch({type: FRIENDS_FETCHED, payload: data})
        })
        .catch(err => {
            dispatch({type: FETCH_FAILED, error: err})
        })
    }
}

export function addNewFriend(friend) {
    return (dispatch) => {
        dispatch({type: SAVING_FRIEND})
        axios.post('http://localhost:5000/api/friends', friend)
        .then(({data}) => {
            dispatch({type: FRIEND_SAVED,
                payload: data
            })
        })
        .catch(err => {
            dispatch({type: FRIEND_NOT_SAVED, error: err})
        })
    }
}

export function deleteFriend(id) {
    return (dispatch) => {
        dispatch({type: DELETE_FRIEND})
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(({data}) => {
            dispatch({type: FRIEND_DELETED, payload: data})
        })
        .catch(err => {
            dispatch({type: FRIEND_NOT_DELETED, error: err})
        })
    }
}

export function updateFriend(id, updatedFriend) {
    return (dispatch) => {
        dispatch({type: UPDATING_FRIEND})
        console.log(id)
        axios.put(`http://localhost:5000/api/friends/${id}`, updatedFriend)
        .then(({data}) => {
            dispatch({type: FRIEND_UPDATED, payload: data})
        })
        .catch(err => {
            dispatch({type: FRIEND_NOT_UPDATED, error: err})
        })
    }
}

export const toggleForm = (id) => {
    return {
        type: TOGGLE_FORM, 
        id: id
    }
}

export const toggleInfo = (id) => {
    return {
        type: TOGGLE_INFO,
        id: id
    }
}

