import React, {useState} from 'react';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [ balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);

  if(strikes > 3){
    setStrikes(0);
  }
  if(balls > 4){
    setBalls(0)
  }
  if(fouls > 2){
    setFouls(2)
  }

  function theFoul(){
    setFouls(fouls +1);
    if(strikes === 0){
      setStrikes(1);
    } 
    if(strikes === 1){
      setStrikes(2);
    }
  }

  function theHit(){
    setStrikes(0);
    setBalls(0);
    setFouls(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Stats</h1>
      </header>
      <div className="the-display label" >
            <div className="view-stat-title" >Strikes</div>
            <div className="view-stat-title" >Balls</div>
            <div className="view-stat-title" >Fouls</div>
          </div>

          <div className="the-display" >
            <div className="view-stat" >{strikes}</div>
            <div className="view-stat" >{balls}</div>
            <div className="view-stat" >{fouls}</div>
          </div>
        <div className="the-dashboard" >
            <button className="clickity" 
            onDoubleClick={theHit}
            onClick={() => setStrikes(strikes + 1)}
            >
            STRIKES</button>
            <button className="clickity" 
            onDoubleClick={theHit}
            onClick={() => setBalls(balls + 1)}
            >
            BALLS</button>
            <button className="clickity" 
            onClick={theFoul}
            onDoubleClick={()=> setFouls(0)}
            >FOULS</button>
            <button className="clickity" onClick={theHit}>HIT</button>
        </div>
    </div>
  );
}

export default App;
