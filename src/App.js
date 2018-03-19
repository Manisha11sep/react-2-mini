import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
   constructor(){
     super();
     this.state = {
     fontColor: 'green',
     fontSize: 22,
     fontFamily: 'cursive',
     allowEdit: true
   }
  }

  // updateColor


  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          <TextContainer 
          fontColor ={this.state.fontColor}
          fontSize ={this.state.fontSize}
          fontFamily = {this.state.fontFamily}
           />

        </div>
      </div>
    )
  }
}

export default App;
