import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' 
function Square (props) {
  return (
    <button id={props.id} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function findWinner(squares) {
  // console.log(squares)
  const win_pos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let check,player
  for ( let i = 0; i < win_pos.length; i++ ) {
    check = 0
    player = squares[win_pos[i][0]]
    if ( player === null ) continue
    for ( let j = 0; j < 3; j++ ) {
      if ( squares[win_pos[i][j]] === player ) check++
    }
    if (check===3) break;
  }
  return (check===3)
}

class Board extends React.Component {




  renderSquare(i) {
    const index = `square${i}`
    return (
      <Square key={i} id={index} value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>
    );
  }

  render() {
    const div = '<div className="board-row">'
    let grid = []
    for ( let i = 0; i < 3; i++ ) {
      let row = []
      let idx
      for ( let j = 0; j < 3; j++ ) {
        idx = i*3+j
        row.push(this.renderSquare(idx))
      }
      grid.push(<div key={i} className="board-row">{row}</div>)
    }

    return (
      <div>
        {grid}
      </div>
    );
  }
}

class Game extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      moves: [
        {cell: Array(2).fill(null)}
      ],
      stepNo: 0,
      nextplayer: 'X'
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNo+1)
    const current = history[history.length-1];
    if ( findWinner(current.squares) || current.squares[i] ) return
    // console.log(i)
    const squares = current.squares.slice()
    squares[i] = this.state.nextplayer
    const nextplayer = (this.state.nextplayer==='X') ? 'Y':'X'
    // this.state.history.push({squares:squares})
    // console.log('HIstory',this.state.history)
    const row = Math.floor(i/3)
    const col = i%3;
    const moves = this.state.moves.slice(0,this.state.stepNo+1)
    const cell = [row,col]
    this.setState({
      history: history.concat({squares:squares}),
      moves: moves.concat({cell: cell}),
      stepNo: this.state.stepNo+1,
      nextplayer: nextplayer
    })
  }

  jumpTo(index) {
    
    // exercise 2
    if ( index !== 0 ) {
      const moves_idx = this.state.moves[index].cell[0]*3 + this.state.moves[index].cell[1]
      const id = `square${moves_idx}`
      document.getElementById(id).focus()
    }
    
    
    this.setState({
      stepNo: index,
      nextplayer: (index%2 === 0) ? 'X':'Y'
    })
  }
  
  render() {

    const current = this.state.history[this.state.stepNo];
    const squares = current.squares
    // console.log('Game',squares)

    const moves = this.state.history.map((square,index)=> {
      const choice = index ? `Go to #${index}`: 'Go to start'
      let move = null
      if ( index !== 0 ) {
        move = '|| ' + this.state.moves[index].cell[0] + ' ' + this.state.moves[index].cell[1]
      }
      return(
        <li key={index}>
          <button onClick={()=>this.jumpTo(index)}>{choice} {move}</button>
        </li>
      )
    })

    let status = null,winner = null
    if ( findWinner(squares) === true ) {
      winner = (this.state.nextplayer==='X') ? 'Y':'X'
      status = `Winner is: ${winner}`
    }
    else {
      status = `Next player: ${this.state.nextplayer}`
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
