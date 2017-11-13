# 0 to 8

A 3 x 3 board with numbers range from 0 to 8. With one X as an empty space to let its neighbors move. The goal is to position all the grids in order from 0 to 8 (represented in emojis!🌲) I am NOT good at solving it, but the making of this game is not bad! Here is a walk through of the logics. 

**Code break down:**
Reducer - create board, shift board.
Each Square model is  Swift Struct like, a board is a collections of Squares.
```
//Redux State looks like this 
[{baseIndex: 0, part: "🥚"},
{baseIndex: 1, part: "🌲"},
...
{baseIndex: 7, part: "🌿"},
{baseIndex: 8, part: "x"}]
```
```
//Action creators
export const getMemoryBoard = () => dispatch => {
//format board first 
let formated = formatArrayToObj(memoryStack)
shuffle(formated)
dispatch(createBoard(formated))
}

export const shiftMemories = (shiftStack, emptyIndex, nextIndex) => dispatch => {
//check then swap
swapArrayElements(shiftStack, emptyIndex, nextIndex)//modular for easier swap
dispatch(createBoard(shiftStack))
}
```

<Game/> get the emojis, passed them to <Board /> 
<Board /> configures the emojis, pass each emoji with needed props to <Square /> , and handles the click dispatch. 
——
Some important logics in the game:

disable/enable Squares base on the position of “X”
```
renderSquare(ele, index, group) {
let locationOfempty = group.findIndex((each) => each.part === 'x')
let locationOfnext = group.findIndex((each) => each.part === ele.part)
let distance = Math.abs(locationOfempty - locationOfnext) 
let disable = !( distance === 3 || (distance === 1 ))
//check edge cases 
if (locationOfempty % 3 === 0 && (locationOfempty - locationOfnext === 1) ) disable = true
if (locationOfempty % 3 === 2 && ( locationOfnext - locationOfempty  === 1) ) disable = true

return (<Square
part={ele} boardIndex={index} onWine={this.onWine} group={group} updatBoard={this.props.updatBoard}
disable={disable} emptyIndex={locationOfempty} nextIndex={locationOfnext}
/>)
}
```
Check if all the squares are sorted, 
```
let isSorted = this.props.parts.reduce((result, curr, i ) => {
return result && (curr.baseIndex === i)
}, (this.props.parts[0].baseIndex === 0) )
if (isSorted) win = true
console.log('win=', win)
```
Pass each swapped grid index to <PTsChart /> 
https://ptsjs.org/ Library I just learned about.
The drawings in <PTsChart /> is the sample code on the site, that I implemented to this game. 

Button on the left browser, toggle its shape's state from free mouse motion to motion controlled by the board clicked index. 
```
// Board.jsx toggles for <PTsChart />
handleClick() {
this.setState(prevState => ({
pointerState: !prevState.pointerState
}));
}
//in PtsChart.jsx 
this.props.enablePointer
? chartElementPointer()
: chartElement(this)




