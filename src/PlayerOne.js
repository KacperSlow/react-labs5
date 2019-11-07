import React from 'react'

function PlayerOne(props) {
    return (
        
        <div style={{border:'3px solid black', position: "relative", padding:"10px"}}>
            <div><b>Player One</b></div>
            <label>Name: </label>
            <br/>
            <label>Played number of times: </label>
            <button style={{position: "absolute", right: "10px", bottom:"5px"}}>
                Play
            </button>
        </div>
    );
}
export default PlayerOne
