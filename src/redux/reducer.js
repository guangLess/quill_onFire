import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
//import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//🙈🦁🐺🐳🦍🦌🐕🐿🌍'🐉', '🐲',

const memoryStack = [ '🌳','🌴', '__',
                     '🌲', '🌱', '🍀', 
                     '🌵', '🌿', '️🍃' ] //🌿

const testMemory = ['x','0','x','0','x','0','x','0'];

//action 
const CREATE_BOARD = 'CREATE_BOARD'

//action creator
const createBoard = (memories) => ({
    type: CREATE_BOARD,
    memories
})


//reducer default test = ['x','0','x','0','x','0','x','0']
const memoryReducer = (state = memoryStack, action) => {
    switch (action.type){
        case CREATE_BOARD:
            return action.memories
        default:
            return state
    }
}

export const getMemoryBoard = () => dispatch => {
    dispatch(createBoard(memoryStack))
}

//Helper methods
const swapArrayElements = (arr, indexA, indexB) => {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

const formatArrayToObj = (array) => {
    let tmpObj = {}
    return array.reduce((obj, curr, index) => {
        tmpObj[index] = curr
        return tmpObj
    }, {})
}

export const shiftMemories = (shiftStack, index) => dispatch => {
    swapArrayElements(shiftStack, index, (index+1) % 7)//modular for easier swap
    //console.log("shiftMemories", shiftStack)    
    dispatch(createBoard(shiftStack))
}


const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware
    // createLogger({collapsed: true})
  ))

const store = createStore(memoryReducer, middleware)
export default store
