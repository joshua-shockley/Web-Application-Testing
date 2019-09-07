import React, {useState} from 'react';


const Display = (props) => {
console.log(props);
    return(
          <div className="the-display" >
            <div className="view-stat" >{props.strikes}</div>
            <div className="view-stat" >{props.balls}</div>
            <div className="view-stat" >{props.fouls}</div>
          </div>
    );
}
export default Display;