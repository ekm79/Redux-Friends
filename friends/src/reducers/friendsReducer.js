import { FETCH_FRIENDS, 
    FETCH_FAILED, 
    FRIENDS_FETCHED,
    SAVING_FRIEND,
    FRIEND_SAVED,
    FRIEND_NOT_SAVED,
    TOGGLE_INFO,
    TOGGLE_FORM } from './../actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    savingFriend: false,
    friendSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendsDeleted: false,
    error: null,
    showForm: false, 
    showInfo: false 
}

export const friendsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_FRIENDS:
            return Object.assign({}, state, {fetching: true})
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {fetching: false, fetched: true, friends: payload})
        case FETCH_FAILED:
            return Object.assign({}, state, {fetching: false, error: payload})
        case TOGGLE_INFO: 
            return {...state, showInfo: !state.showInfo}
        case TOGGLE_FORM:
            return Object.assign({}, state, {showForm: !state.showForm});
        default: 
            return state
    }
}

export const newFriendReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SAVING_FRIEND:
            return Object.assign({}, state, {savingFriend: true})
        case FRIEND_SAVED:
            return Object.assign({}, state, {savingFriend: false, friendSaved: true, friends: payload})
        case FRIEND_NOT_SAVED:
        return Object.assign({}, state, {savingFriend: false, error: payload})
        default: 
            return state
    }
}