import React, { Component } from "react";
import Sound from "react-sound";
import Textbox from "./../Textbox";
import { Link } from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';

class ThroneRoom extends Component {
  state = {
    sounds: {
      emperor: "sounds/emperor.ogx"
    },
    name: "you",
    path: 0,
    count: 0,
    saberCanBeFound: true
  }

  componentDidMount(){

    document.body.style.cursor = "none";
    document.getElementById('textBorder').style.cursor = 'none';

    document.body.style.backgroundImage = "url('')";
    setTimeout(function(){
      let fx = new Audio();
      fx.src = "sounds/forceStrong.mp3";
      fx.volume = 0.3;
      fx.play();
    },6000)

    setTimeout(function(){
      document.getElementById("throneRoomGif").setAttribute("src", "./throne.gif");
      setTimeout(function(){
        document.getElementById("continueText").textContent = "- Click to Continue -";
        document.body.style.cursor = "default";
        document.getElementById('textBorder').style.cursor = 'pointer';

      },2000)
    },5000)
  }

  componentDidUpdate(){

    console.log("updated");
  }

  responseFacebook = (response) => {
    this.setState({
      name:response.name
    });
  }
  //
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };
  //
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //
  handleSubmit = event => {
    let fx = new Audio();
    fx.src = "sounds/dont_underestimate.wav";
    fx.play();
    setTimeout(function(){
      window.location.href = "/ThroneRoom";
    },3000)
  }

  handleTextClick = event => {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
    // document.getElementById("textMessage").textContent = "what now?";
  }

  handleSecondPath = event => {
    this.setState({
      count: 0,
      path: 1
    });
  }


  handleSaber = event => {
    this.setState({
      saberCanBeFound: false,
      count: 0,
      path: 2
    });
  }

  startBattle = event => {
    // this.setState({
    //   sounds: {
    //     emperor: ""
    //   }
    // });
    let fx = new Audio();
    fx.src = "sounds/SaberOn.wav";
    fx.volume = 0.3;
    fx.play();

    setTimeout(()=>{
      fx.src = "sounds/Hum_2.wav";
      fx.loop = true;
      fx.play();
    }, 2000);
  }


  saberMouseEvent = event => {
    if (this.state.saberCanBeFound) {
      return <div id="lightSaber" onMouseEnter={this.handleSaber} onClick={this.handleSecondPath}></div>
    }
    else {
      return <div id="lightSaber"></div>;
    }
  }

  render() {
    return (
      <div>
        <div className="row text-center">
          <Sound
            url={this.state.sounds.emperor}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            loop={true}
          />
          <div id="throneRoomWrapper">
            <img id="throneRoomGif" src="./throne_still.gif" alt="throne room gif"/>
            {this.saberMouseEvent()}
          </div>
        </div>
        <Textbox
          path={this.state.path}
          progress={this.state.count}
        />
        <Link to={"/Battle"} id="startBattle" onClick={this.startBattle}>Start Battle</Link>
      </div>
    );
  }
}

export default ThroneRoom;
