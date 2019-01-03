import React from "react";
//import Radium from 'radium'
import './PersonStyle.css';

const person = props => {
 /* const myOtherStyle = {
    '@media (min-width: 500px)': {//this radium future for media query
      width: '450px'
    }
  };
  */
  return (
    <div className="person"> {/* style={myOtherStyle}>{/*this is styling file injected from preson.css file and one way of styling page */}
      <p>
        {/*this event handler is from app.js person componenet*/}I am{" "}
        {props.name} and i am really a person and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} /><br/>
      <button onClick={props.click}>Delete</button>
    </div>
  );
  
};

//export default Radium(person);
export default person;
