import React, { Component } from "react";
import Sound from "react-sound";
import { Redirect } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login';
// <FacebookLogin
//   appId="1631031436976440"
//   autoLoad={true}
//   fields="name,email,picture"
//   callback={this.responseFacebook} />

class Landing extends Component {
  state = {
    sounds: {
      duel: "sounds/duel.mp3"
    },
    name: "You",
    redirect: false
  }

  componentDidMount(){

  }

  playTheme = () => {
    console.log("playing theme now");
  }

  responseFacebook = (response) => {
    console.log(response);
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
    setTimeout(() => {
      this.setState({
        redirect: true
      })
    },3000)
  };

  render() {

    if(!this.state.redirect){
      return (
        <div>
          {/* <FacebookLogin
           appId="1631031436976440"
           autoLoad={true}
           fields="name,email,picture"
           callback={this.responseFacebook} /> */}
          <Sound
            url={this.state.sounds.duel}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
          />

          <div className="jumbotron">
              <h5 className="text-center">{this.state.name} have been brought to the Emperor's throne room...</h5>
          </div>


              <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn-group btn-group-justified" role="group" aria-label="...">
                      <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default" id="launchbutton" onClick={this.handleSubmit}>Click to Enter</button>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                  </div>
              </div>
          </div>

      )
    }
    else {
      return <Redirect to="/ThroneRoom"/>
    }
  }
}

export default Landing;
