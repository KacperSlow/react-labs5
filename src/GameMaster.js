import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      playerOneName:"" ,
      playerTwoName:""
  }
    this.nameOneChangeHandler = this.nameOneChangeHandler.bind(this);
    this.nameTwoChangeHandler = this.nameTwoChangeHandler.bind(this);
  }
  nameOneChangeHandler(e){
    this.setState({playerOneName: e.target.value})
  }
  nameTwoChangeHandler(e){
    this.setState({playerTwoName: e.target.value})
  }
  render() {
      return (
          <div >
            <div>
              <PlayerOne name= {this.state.playerOneName} />
              <br/>
              <PlayerTwo name= {this.state.playerTwoName}/>
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