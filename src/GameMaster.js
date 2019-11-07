import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameMaster extends React.Component {

  render() {
      return (
          <div >
            <div>
              <PlayerOne />
              <br/>
              <PlayerTwo />
            </div>
            <br/>
            <div>
              <label>Set Player One name</label> <input type="text"></input>
              <br/><br/>
              <label>Set Player Two name</label> <input type="text"></input>
            </div>
          </div>
          
      );
  }
}
export default GameMaster