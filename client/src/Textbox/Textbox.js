import React from "react";
import Text from "./text.json"

class Textbox extends React.Component {

state = {
  classReset: "textBox",
  idReset: "textBorder"
}

componentWillReceiveProps(newProps){
  if (newProps.path !== this.props.path){
    this.setState({
      classReset: "",
      idReset: ""
    });
    document.getElementById("continueText").textContent = "";
    setTimeout(() => {
      console.log("reset");
      this.setState({
        classReset: "textBox",
        idReset: "textBorder"
      });
      document.getElementById("continueText").textContent = "- Click to Continue -";
    }, 300)

  }
}


render(){

return(
    <div>
      <div className={this.state.classReset} id={this.state.idReset} onClick={this.props.handleTextClick}>
        <h4 id="textMessage">{Text.Path[this.props.path][this.props.progress]}</h4>
        <p id="continueText"> </p>
      </div>
    </div>
  )
}
}

export default Textbox;
