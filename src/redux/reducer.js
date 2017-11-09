import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

//action 
const CREATE_BOARD = 'CREATE_BOARD'

//action creator
const createBoard = (memories) => ({
    type: CREATE_BOARD,
    memories
})

//reducer
const memoryReducer = (state = [], action) => {
    switch (action.type){
        case CREATE_BOARD:
            return action.memories
        default:
            return state
    }
}

//Thunk 
export const getMemoryBoard = () => dispatch => {
    axios.get('/api/board')
        .then(res => dispatch(
            createBoard(res.data)
        ))
}

export const store = createStore(memoryReducer, applyMiddleware(thunkMiddleware, createLogger))
//export default store
