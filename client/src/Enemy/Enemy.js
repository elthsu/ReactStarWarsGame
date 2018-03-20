import React from "react";

var gifTimeout;
var timerBar;
var enemyTimer = "";
var randyEnemyTimer;
var defense = false;

class Enemy extends React.Component {


  state = {
    fighter: 0,
    timer: 90,
    timerStart: false,
    button: true,
    enemyTimer: 0,
    enemyTimerStart: false
  }

  attack = () => {
    clearTimeout(timerBar);
    defense = false;
    this.props.attack();
    this.setState({
      timer: 95,
      button: true,
      timerStart: true
    })
  }

  defend = () => {
    clearTimeout(timerBar);
    defense = true;
    this.props.defend();
    this.setState({
      timer: 0,
      button: true,
      timerStart: true
    })
  }

  fighterLoader(){
    // console.log(this.state.fighter);
    if(this.state.timer === 100) {
      var readyTextStyle = {
        color: 'white',
        lineHeight: '17px',
        fontSize: '9px'}
      var readyProgressBar = {
        width: this.state.timer + '%',
        backgroundColor: 'green'
      }
    }

    else {
      var readyTextStyle = {
        color: 'transparent'
      }
      var readyProgressBar = {
        width: this.state.timer + '%'
      }
    }

    switch (this.state.fighter) {
      case 0:
        break;
      case 1:
          return(

            <div className="positionRelative" style={this.props.displayHud}>
              <img id="lukeGif" src="./luke.png" alt="luke skywalker png"/>
              <div className="progress" id="timerBar">
                <div className="progress-bar active" id="timerBarFill" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={readyProgressBar}>
                  <p id='readyText' style={readyTextStyle}>
                    READY
                  </p>
                </div>
              </div>
              <button type="button" className="btn btn-success commandBtnAttack" onClick={this.attack} disabled={this.state.button}><i className="fas fa-gavel fa-2x"></i></button>
              <button type="button" className="btn btn-danger commandBtnDefend" onClick={this.defend} disabled={this.state.button}><i className="fas fa-shield-alt fa-2x"></i></button>
              <img id="stormTrooper" src="./stormTrooper.png" alt="stormtrooper"/>
              <img id="stormTrooper2" src="./stormTrooper.png" alt="stormtrooper"/>
              <img id="stormTrooper3" src="./stormTrooper.png" alt="stormtrooper"/>
            </div>
          )
          break;
      case 2:
        return(
          <div className="positionRelative" style={this.props.displayHud}>
            <img id="lukeGif" src="./luke.png" alt="luke skywalker png"/>
            <div className="progress" id="timerBar">
              <div className="progress-bar active" id="timerBarFill" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={readyProgressBar}>
                <p id='readyText' style={readyTextStyle}>
                  READY
                </p>
              </div>
            </div>
            <button type="button" className="btn btn-success commandBtnAttack" onClick={this.attack} disabled={this.state.button}><i className="fas fa-gavel fa-2x"></i></button>
            <button type="button" className="btn btn-danger commandBtnDefend" onClick={this.defend} disabled={this.state.button}><i className="fas fa-shield-alt fa-2x"></i></button>
            <img id="maulSprite" src="./maul.png" alt="dooku stand gif"/>
          </div>
        )
        break;
      case 3:
        return(
          <div className="positionRelative" style={this.props.displayHud}>
            <img id="lukeGif" src="./luke.png" alt="luke skywalker png"/>
            {/* <i className="fas fa-gavel commandBtnAttack"></i> */}
            {/* <i className="fas fa-shield-alt commandBtnDefend"></i> */}
            <img id="dookuSprite" src="./dooku_stand.gif" alt="dooku stand gif"/>
          </div>
        )
        break;
      default:
        console.log("loader broke");

    }
  }

  fighterCount(){
    clearTimeout(gifTimeout);
    clearTimeout(enemyTimer);
    clearInterval(timerBar);
    this.setState({
      fighter: this.state.fighter + 1
    });
  }

  gifClear(){
    clearTimeout(gifTimeout);
    clearTimeout(enemyTimer);
    clearTimeout(timerBar);
    this.props.setGifPlayTrue();
    this.props.resetEnemy(this.state.fighter)
  }

  componentWillReceiveProps(newProp){
    // console.log("whatprop", newProp);
    if (newProp.enemy === this.props.enemy) {
      // console.log("cleared");
      clearTimeout(gifTimeout);
      clearTimeout(timerBar);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("update")
    // console.log(this.props)
    // console.log(prevProps)
    // console.log(this.state)
    // console.log(prevState)

    if (this.state.timerStart === true && this.state.timer < 99) {
      clearInterval(timerBar);
      timerBar = setInterval(() => {
        this.setState({
          timer: this.state.timer + 1,
          timerStart: false,
          button: true
        })
        // console.log(this.state.timer)
      }, 100)
    }
    else if (this.state.timer === 99 || this.state.timer > 100) {
      clearInterval(timerBar);
      defense = false;
      this.setState({
        timer: 100,
        button: false,
        timerStart: false
      })
    }

    if (this.state.enemyTimerStart === true && enemyTimer === "") {
      randyEnemyTimer = Math.floor(Math.random() * 14 + 3) * 1000;
      clearTimeout(enemyTimer);
      enemyTimer = setTimeout( () => {
        this.props.enemyAttack(defense);
        if (this.state.timerStart === false && this.state.timer < 99) {
          this.setState({
            timerStart: true
          });
        }
        this.setState({
          enemyTimerStart: true
        });
        clearTimeout(enemyTimer);
        enemyTimer = "";

      }, randyEnemyTimer)
    }
  }

  anotherMethod(){

        switch (this.props.enemy) {
          case 1:
            if (this.props.playingGif){
              gifTimeout = setTimeout(() => {
                document.getElementById("stormTrooperGif").setAttribute("style", "display:none");
                document.getElementById("stormTrooperGif").setAttribute("src", "./palpatine.gif");
                document.getElementById("stormTrooperGif").setAttribute("id", "palpatineGif");
                this.fighterCount();
                this.props.setGifPlayFalse();
                this.setState({
                  timerStart: true,
                  enemyTimerStart: true
                });
              }, 3000);
            }
            return (
              <div>
                <img className="enemyGif" id="stormTrooperGif" src="./stormtrooper.gif" alt="stormtrooper gif"/>
              </div>
            );
            break;
          case 2:
            if (this.props.playingGif){
              gifTimeout = setTimeout(() => {
                console.log(this.state.fighter)
                document.getElementById("maulGif").setAttribute("style", "display:none");
                document.getElementById("maulGif").setAttribute("src", "./palpatine.gif");
                document.getElementById("maulGif").setAttribute("id", "palpatineGif");
                this.fighterCount();
                this.props.setGifPlayFalse();
                this.props.resetHud();
                this.setState({
                  timerStart: true,
                  enemyTimerStart: true
                });
                console.log(this.state.fighter)
              }, 8000);
            }
            return (
              <div>
                <img className="enemyGif" id="maulGif" src="./darthMaul.gif" alt="darth maul gif"/>
              </div>
            );
            break;
          case 3:

            if (this.props.playingGif){
              gifTimeout = setTimeout(() => {
                document.getElementById("dookuGif").remove();
                this.fighterCount();
                this.props.resetHud();
                {this.props.setGifPlayFalse};
              }, 4500);
            }
            return (
              <div>
                <img className="enemyGif" id="dookuGif" src="./countDooku.gif" alt="count dooku gif" style={{display:"inline"}}/>
              </div>
            );
            break;
          case "palpatine":
          console.log("hits palpatine", this.props.playingGif)
              if (this.props.playingGif){
                gifTimeout = setTimeout(() => {
                  document.getElementById("stormTrooperGif").setAttribute("id", "maulGif");
                  document.getElementById("palpatineGif").remove();
                  this.fighterCount();
                  this.props.setGifPlayFalse();
                }, 4500);
              }
              return (
                <div>
                  <img className="enemyGif" id="palpatineGif" src="./palpatine.gif" onClick={() => this.gifClear()} alt="palpatine gif" style={{display:"inline"}}/>
                </div>
              );
            break;
          default:
            console.log("broke");
            break;

      }
  }

  render(){

  return(
    <div className="inlineGif">
      <div className="gifWrapper">
        <img id="battleBackground" src="https://images.propstore.com/176588.jpg" style={{display:"inline"}}></img>
        {this.anotherMethod()}
        {this.fighterLoader()}
      </div>
    </div>
    )
  }
}

export default Enemy;
