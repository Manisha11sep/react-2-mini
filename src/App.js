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
     fontSize: 18,
     fontFamily: 'cursive',
     allowEdit: true
   }
   this.updateColor = this.updateColor.bind(this);
   this.updateSize = this.updateSize.bind(this);
   this.updateFamily = this.updateFamily.bind(this);
   this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  updateColor(val){
    console.log("inside update fun");
    this.setState({fontColor: val})
  }

updateSize(val){
  this.setState({fontSize : val})
}

updateFamily(val)
{
    this.setState({fontFamily :val})
  }
    
updateEditStatus(val){
  this.setState({allowEdit: val})
}

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <EditToggle allowEdit ={this.state.allowEdit}
          update = {this.updateEditStatus}/>
          <ColorChanger allowEdit ={this.state.allowEdit}
          fontColor = {this.state.fontColor} update = {this.updateColor} />
          <SizeChanger allowEdit ={this.state.allowEdit} fontSize = {this.state.fontSize} update = {this.updateSize} />
          <FamilyChanger allowEdit ={this.state.allowEdit}fontFamily = {this.state.fontFamily} update = {this.updateFamily} />
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
