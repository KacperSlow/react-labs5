import React from 'react'

function PlayerTwo(props) {
    let buttonText;
    if(props.flag)
        buttonText="This user is playing now"
    else
        buttonText="Play"
    return (
        <div style={{border:'3px solid black', position: "relative", padding:"10px"}}>
            <div><b>Player Two</b></div>
            <label>Name: {props.name} </label>
            <br/>
            <label>Played number of times: {props.numbersPlay}</label>
            <button style={{position: "absolute", right: "10px", bottom:"5px"}} onClick={(e) => props.PlayerTwoEventHandler(e)}disabled={props.flag}>
                {buttonText}
            </button>
            
        </div>
    );
}   
export default PlayerTwo
