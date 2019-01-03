import React, { Component } from "react";
import "./App.css";
//import Radium, { StyleRoot } from 'radium';// is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.
import Person from "./Persons/Person";
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Gezahegn", age: 36 },
      { id: "2", name: "Buze", age: 30 },
      { id: "3", name: "Rose", age: 8 },
      { id: "4", name: "Josh", age: 5 }
    ],
    showPerson: false

  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(findPersonInput => {
      return findPersonInput.id === id;
    });
    const getEachPersonsIndex = {
      ...this.state.persons[personIndex]
    };
    getEachPersonsIndex.name = event.target.value;
    const newPersonArr = [...this.state.persons];
    newPersonArr[personIndex] = getEachPersonsIndex;

    this.setState( { persons: newPersonArr} );
  }
  deletePersonHandler = (mapEachPersonsIndex) => {
   // const updatedPersons = this.state.persons.slice();
   //you can use eather one above or below this both works
   const updatedPersons = [...this.state.persons];
    updatedPersons.splice(mapEachPersonsIndex, 1);//delete one object at each time
    this.setState({persons: updatedPersons}); //this will updated person array
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {
    //*this another way of styling the element 
    const myStyle = {
      backgroundColor: 'green',
      color: "white",
      font: 'inheret',
      border:'2px solid black',
      padding: '8px'
     /* ":hover": {
        backgroundColor: 'lightblue',
        color: 'black'
      }*/
    };
    //here is presons if/condetional statement below
    let newPersons = null;
    if(this.state.showPerson === true) {
      newPersons = (
        <div> 
          {this.state.persons.map((mapEachPersons, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)} //we have click handler in person.js file inside p tag
            name={mapEachPersons.name} 
            age={mapEachPersons.age}
            key={mapEachPersons.id}//this refer the persons.id above
            changed={(event) => this.nameChangeHandler(event, mapEachPersons.id)}
            />
          })}
       
      </div>
       
      );
      //this will change the toggle button color dynamical
      myStyle.backgroundColor = 'red';
     /* myStyle[":hover"] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      };*/
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); ///this aply the classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //this aply the classes = ["red" and also "bold"]
    }
    if (this.state.persons.length <= 0) {
      classes.push("black");
    }
    return (
     // <StyleRoot>
      <div className="App">
        <h1>Hello World this my first react app!</h1>
        <p className={classes.join(" ")}>This is realy working!!!!</p>
        <button
        //this styling that  decleared above this under render method
          style={myStyle}
        onClick={this.togglePersonsHandler}>Toggle Person</button>
      
      {newPersons} {/**this refers the variable that declered above */}
      </div>
     // </StyleRoot>
    );
  }
}

//export default Radium(App);
export default App;
