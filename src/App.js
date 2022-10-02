import React, { useState } from 'react';
import './App.css';

function App() {
  const [roomLength, setRoomLength] = useState(0);
  const [roomWidth, setRoomWidth] = useState(0);

  const [initialPositionX, setInitialPositionX] = useState(0);
  const [initialPositionY, setInitialPositionY] = useState(0);
  const [initialDirection, setInitialDirection] = useState('');

  const [moves, setMoves] = useState('');
  const [finalPosition, setFinalPosition] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    findFinalPosition();
  };

  const findFinalPosition = () => {
    const cardinalDirections = 'WNES';
    let positionX = initialPositionX;
    let positionY = initialPositionY;
    let direction = initialDirection;

    for (let index = 0; index < moves.length; index++) {
      switch (moves[index]) {
        case 'L':
          if (direction === 'W') {
            direction = 'S';
          } else {
            direction = cardinalDirections[cardinalDirections.indexOf(direction) - 1];
          }
          break;
        case 'R':
          if (direction === 'S') {
            direction = 'W';
          } else {
            direction = cardinalDirections[cardinalDirections.indexOf(direction) + 1];
          }
          break;
        default:
          switch (direction) {
            case 'E':
              if (positionX < roomLength) {
                positionX++;
              }
              break;
            case 'W':
              if (positionX > 0) {
                positionX--;
              }
              break;
            case 'N':
              if (positionY < roomWidth) {
                positionY++;
              }
              break;
            default:
              if (positionY > 0) {
                positionY--;
              }
              break;
          }
          break;
      }
    }
    setFinalPosition(positionX +','+ positionY+','+direction);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="active center"> Robot Final Position Finder</h2>
        <form onSubmit={submitHandler}>
          <label>
            Please provide what should be the length of the room 
            <input
              type="number"
              min="1"
              required
              value={roomLength}
              onChange={(e) => setRoomLength(e.target.value)}
            />
          </label>
          <label>
          Please provide what should be the width of the room 
            <input
              type="number"
              min="1"
              required
              value={roomWidth}
              onChange={(e) => setRoomWidth(e.target.value)}
            />
          </label>
          <label>
            Provide Robot's initial position in X axis
            <input
              type="text"
              required
              value={initialPositionX}
              onChange={(e) => setInitialPositionX(e.target.value)}
            />
          </label>
          <label>
            Provide Robot's initial position in Y axis
            <input
              type="text"
              required
              value={initialPositionY}
              onChange={(e) => setInitialPositionY(e.target.value)}
            />
          </label>
          <label>
            Provide Robot's Direction
            <input
              type="text"
              required
              value={initialDirection}
              onChange={(e) => setInitialDirection(e.target.value)}
            />
          </label>
          <label>
            Add your moves
            <input type="text" required value={moves} onChange={(e) => setMoves(e.target.value)} />
          </label>
<div className='center'>
            <button  type="submit">Submit</button>
            </div>
        </form>
   
      <label >
      <div ><h2 className = 'center'> Final Position of Robot is:
            {'  ('+finalPosition+')'}</h2>
            </div>
      </label>
      </div>
      </div>
  );
}

export default App;
