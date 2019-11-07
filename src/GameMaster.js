import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      playerOneName:"" ,
      numbersPlayerOnePlay: 0,
      playerTwoName:"",
      numbersPlayerTwoPlay: 0,
      flag: false 
  }
    this.nameOneChangeHandler = this.nameOneChangeHandler.bind(this);
    this.nameTwoChangeHandler = this.nameTwoChangeHandler.bind(this);
    this.PlayerOneEventHandler = this.PlayerOneEventHandler.bind(this);
    this.PlayerTwoEventHandler = this.PlayerTwoEventHandler.bind(this);
  }
  nameOneChangeHandler(e){
    this.setState({playerOneName: e.target.value})
  }
  nameTwoChangeHandler(e){
    this.setState({playerTwoName: e.target.value})
  }
  PlayerOneEventHandler(e){    
    this.setState((prevState) => ({
        numbersPlayerOnePlay: prevState.numbersPlayerOnePlay + 1,
        flag: !this.state.flag
    }));
}
PlayerTwoEventHandler(e)
{
    this.setState((prevState) => ({
        numbersPlayerTwoPlay: prevState.numbersPlayerTwoPlay + 1,
        flag: !this.state.flag
    }));
}
  render() {
      return (
          <div >
            <div>
              <PlayerOne name= {this.state.playerOneName} numbersPlay = {this.state.numbersPlayerOnePlay} flag={this.state.flag} PlayerOneEventHandler={this.PlayerOneEventHandler}/>
              <br/>
              <PlayerTwo name= {this.state.playerTwoName} numbersPlay = {this.state.numbersPlayerTwoPlay} flag={this.state.flag} PlayerTwoEventHandler={this.PlayerTwoEventHandler}/>
            </div>
            <br/>
            <div>
              <label>Set Player One name</label> <input type="text" onChange={this.nameOneChangeHandler}></input>
              <br/><br/>
              <label>Set Player Two name</label> <input type="text" onChange={this.nameTwoChangeHandler}></input>
            </div>
          </div>
      );
  }
}
export default GameMaster