import React, { useState } from 'react';
import './App.css';




function App() {

  const [moves, setMoves] = useState('');

  const [position, setPosition] = useState('');

  


  const submitHandler = (e) => { 
    e.preventDefault();
    setPosition(moves);
  }

  const findPosition = (position) => { 
    let leftMoves = 0;
    let rightMoves = 0;
    let forwardMoves = 0;

  

    for (let index = 0; index < position.length; index++) {
      switch (position[index]) {
        case 'L':

          leftMoves++;
          break;
          case 'R':

            rightMoves++;
          break;
          case 'F':

            forwardMoves++;
            break;
      
        default:
          break;
      }
      
    }
 
  }

  
  
  
  return (
    <div className="App">
      <div className="vertical">
       
       <h2 className="active"> Robot-Track</h2>
          <form onSubmit={submitHandler}>
      <label>Initial Position
        <input type="text" />
          </label>
          <label>Please enter your Steps:
        <input type="text" required value={moves} onChange = {(e) => setMoves(e.target.value)} />
          </label>
          
          <button type="submit">Submit</button>
    </form>
        
      </div>
      <label>Final Potion is
        <div> {position}</div>
          </label>
    </div>
  );
}

export default App;
