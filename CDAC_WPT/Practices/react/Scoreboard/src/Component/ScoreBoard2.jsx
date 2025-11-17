import  {useState} from 'react'

const ScoreBoard2 = () => {
    const [playerAScore,setPlayerAScore]=useState(0);
    const [playerBScore,setPlayerBScore]=useState(0);

    const incrementPlayerAScore = ()=> {
        setPlayerAScore(playerAScore+1)
    };
    const incrementPlayerBScore = ()=> {
      setPlayerBScore(playerBScore+1)
  };
  const reset = ()=>{
    setPlayerAScore(0);
    setPlayerBScore(0);
  }
  return (
    <>
    <h1>PLAYER SCORE BOARD</h1>
    <h2> Player A Score : {playerAScore}</h2>
    <button onClick={incrementPlayerAScore} style={{border:"2px solid black"}}>Increament A</button>
    <h2> Player B Score : {playerBScore}</h2>
    <button onClick={incrementPlayerBScore} style={{border:"2px solid black" , display:"block" } }>Increment B</button>
    <button onClick={reset} style={{border:"2px solid black"}}>reset</button>
    </>
  )
}

export default ScoreBoard2