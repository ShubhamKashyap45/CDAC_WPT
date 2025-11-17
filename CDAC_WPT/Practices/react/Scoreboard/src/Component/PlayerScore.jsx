import {useState} from 'react'

const PlayerScore = ()=>{

    const [playerAScore,setPlayerAScore] = useState(0);
    const [playerBScore,setPlayerBScore] = useState(0);

    const incrementPlayerAScore = () => {
        setPlayerAScore(playerAScore + 1);
    }
    const incrementPlayerBScore = () =>{
        setPlayerBScore(playerBScore+1)
    }

    const reset = () => {
        setPlayerAScore(0);
        setPlayerBScore(0);
    }
    return(
        <>
            <h1>PLAYER SCORE BOARD</h1>
            <h3>PLAYER A SCORE : {playerAScore}</h3>
            <button onClick={incrementPlayerAScore}>incrementPlayerAScore</button>
            <h3>PLAYER B SCORE : {playerBScore} </h3>
            <button onClick={incrementPlayerBScore}>incrementPlayerBScore</button>
            <br/><br/><br/>
            <button onClick={reset}>RESET</button>
        </>
    )
}

export default PlayerScore;