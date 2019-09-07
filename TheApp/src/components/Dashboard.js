import React, {useState} from 'react';
 const Dashboard = (props) => {

    return(
        <div className="the-dashboard" >
        <button className="clickity" 
        onDoubleClick={props.theHit}
        onClick={() => props.setStrikes(props.strikes + 1)}
        >
        STRIKES</button>
        <button className="clickity" 
        onDoubleClick={props.theHit}
        onClick={() => props.setBalls(props.balls + 1)}
        >
        BALLS</button>
        <button className="clickity" 
        onClick={props.theFoul}
        onDoubleClick={props.theHit}
        >FOULS</button>
        <button 
        className="clickity" 
        onClick={props.theHit}
        >
        HIT</button>
    </div>

    );
}
export default Dashboard;