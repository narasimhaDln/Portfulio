import { useState } from "react";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import "../Styles/TicTacToe.css";

function TicTacToe() {
    const [board,setBoard]=useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const[winner,setWinner]=useState("");
  const[currentPlayer,setCurrentPlayer]=useState("o player")
  const winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const toggle=(num)=>{
    if(lock||board[num]!==""){
        return;
    }
    const newBoard=[...board];
    newBoard[num]=count%2===0?"o":"x"
    setBoard(newBoard)
    setCount(count+1)
    const gameWinner=checkWinner(newBoard)
    if(gameWinner){
        setWinner(gameWinner==="o"?"player o":"player  X")
        setLock(true);
    }
    else if(count===8){
        setWinner("Draw")
    }
    else{
       
        setCurrentPlayer(count%2===0?"player  X":"player o")
    }
    setCount(count+1)
}


const checkWinner=(newBoard)=>{
    for(let combination of winningCombinations){
        const[a,b,c]=combination;
        if(newBoard[a]&&newBoard[a]===newBoard[b]&&newBoard[a]===newBoard[c]){
            return newBoard[a];
        }
    }
    return null
}
const resetGame=()=>{
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCount(0)
    setLock(false)
    setWinner("");
    setCurrentPlayer("o player")
}
return(
    <div className="container">
        <div className="title">
        <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div>
        {winner?(
<h2>{winner==="Draw"?"it's a Draw!":`${winner} wins!`}</h2>
        ):(
            <h2>{currentPlayer} Turn</h2>

        )}
      </div>
      <div className="board">
        {board.map((value,index)=>(
            <div key={index} className="boxes" onClick={()=>toggle(index)}>
                {value==="o"&&<img src={circle_icon} alt="circle"/>}
                {value==="x"&&<img src={cross_icon} alt="cross"/>}
            </div>
        ))}

      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
        </div>

    </div>
)

}

export default TicTacToe;

