import React from 'react'

function PlayerTwo(props) {
    
    return (
        <div style={{border:'3px solid black', position: "relative", padding:"10px"}}>
            <div><b>Player Two</b></div>
            <label>Name: {props.name} </label>
            <br/>
            <label>Played number of times:</label>
            <button style={{position: "absolute", right: "10px", bottom:"5px"}}>
                Play
            </button>
            
        </div>
    );
}   
export default PlayerTwo
