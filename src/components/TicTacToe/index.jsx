import { useState } from "react";
import Grid from "./Grid";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default function TicTacToe() {
    let [turn, setTurn] = useState("X")
    let [box, setBox] = useState(Array(9).fill(null))
    console.log(box)

    function handleClick(id) {
        let boxcopy = [...box]
        if (boxcopy[id]) {
            return
        }
        if (turn == 'X') {
            boxcopy[id] = "O"
            setTurn("O")
        } else {
            boxcopy[id] = "X"
            setTurn("X")
        }
        if (calculateWinner(boxcopy)) {
            console.log("Winner")
        }
        setBox(boxcopy)

    }
    return (
        <>
            <div>Turn {turn == "X" ? "O" : "X"}</div>
            <Grid box={box} handleClick={handleClick} />
        </>
    )
}