import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game.jsx'

class Main extends React.Component {
    render() {   
        return (
            <div>
                <h1>Hello 🤣world 🍀</h1>
            </div>
        )
    }
}

const app = document.getElementById('app')
ReactDOM.render(<Game />, app);
