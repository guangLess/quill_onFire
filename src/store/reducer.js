import { createStore } from 'react-redux '
//const gemoji = require('gemoji')

//action 
const STOCK_MEMORY = 'STOCK_MEMORY'

//action creator
const stockMemory = (memories) => ({
    type: STOCK_MEMORY,
    memories
})

//reducer
const memoryReducer = (state = [], action) => {
    switch (action.type){
        case STOCK_MEMORY:
            return action.memories
        default:
            return state
    }
}

const tempStore = []

const store = createStore(memoryReducer)
