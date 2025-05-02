import React, { Component } from 'react';
import './Exercise.css'; 

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>This is a heading</h1>
        <p className="para">This is a styled paragraph using CSS class.</p>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          Visit Google
        </a>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=220"
          alt="Sample"
          style={{ display: 'block', marginTop: '10px' }}
        />
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;