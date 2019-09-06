import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display.js";
import Dashboard from './components/Dashboard';

export const add = (a,b)=> a+b;


export default function App() {
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
          <Display 
          strikes={strikes}
          fouls={fouls}
          balls={balls}
          />
          <Dashboard 
          theHit={theHit}
          strikes={strikes}
          balls={balls}
          theFoul={theFoul}
          setStrikes={setStrikes}
          setBalls={setBalls}
          setFouls={setFouls}
          />
    </div>
  );
}


