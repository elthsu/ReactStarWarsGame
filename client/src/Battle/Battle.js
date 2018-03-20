import React, {Component} from "react";
import Sound from "react-sound";
import Textbox from "./../Textbox";
import Enemy from "./../Enemy";
import HealthBar from "./../HealthBar";
import {Link} from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';

class Battle extends Component {
  state = {
    sounds: {
      emperor: ""
    },
    displayHud: {
      display: "block"
    },
    path: 3,
    count: 0,
    playingGif: true,
    enemy: 1,
    enemyName: [
      "Stormtroopers", "Darth Maul", "Count Dooku"
    ],
    LukeStats: {
      maxHP: 100,
      fullHP: 100,
      attack: 10,
      defense: 10
    },
    EnemyStats: [
      {
        maxHP: 80,
        fullHP: 80,
        attack: 5,
        defense: 5
      },
      {
        maxHP: 100,
        fullHP: 100,
        attack: 15,
        defense: 5
      }, {
        maxHP: 160,
        fullHP: 160,
        attack: 12,
        defense: 12
      }
    ]
  }

  componentDidMount() {
    document.body.style.backgroundImage = "none";
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
  }

  responseFacebook = (response) => {
    this.setState({name: response.name});
  }
  //
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };
  //
  handleGifPlay = event => {
    this.setState({
      enemy: this.state.enemy + 1
    });
  };

  resetEnemy = (fighterProp) => {
    this.setState({
      enemy: parseInt(fighterProp) + 1
    })
  }

  resetHud = () => {
    this.setState({
      displayHud: {
        display: "block"
      }
    });
  }

  setGifPlayFalse = () => {
    if (this.state.playingGif) {
      this.setState({playingGif: false})
    }
  }

  setGifPlayTrue = () => {
    if (!this.state.playingGif) {
      this.setState({playingGif: true})
    }
  }

  attack = () => {
    if (this.state.enemy !== "palpatine") {
      var attackDmg = Math.floor(Math.random() * this.state.LukeStats.attack + (this.state.LukeStats.attack - this.state.EnemyStats[this.state.enemy - 1].defense));
      attackDmg = attackDmg + 5;
      console.log("You attack for " + attackDmg + " damage!");
      if ((this.state.EnemyStats[this.state.enemy - 1].maxHP - attackDmg) > 0) {
        if (this.state.EnemyStats[this.state.enemy - 1].maxHP < 70 && this.state.EnemyStats[this.state.enemy - 1].maxHP > 50) {
          this.setState({path: 3, count: 1})
        } else if (this.state.EnemyStats[this.state.enemy - 1].maxHP < 50 && this.state.EnemyStats[this.state.enemy - 1].maxHP > 30) {
          this.setState({path: 3, count: 2})
        }
        var targetEnemy = this.state.EnemyStats;
        targetEnemy[this.state.enemy - 1] = {
          maxHP: this.state.EnemyStats[this.state.enemy - 1].maxHP - attackDmg,
          fullHP: this.state.EnemyStats[this.state.enemy - 1].fullHP,
          attack: this.state.EnemyStats[this.state.enemy - 1].attack,
          defense: this.state.EnemyStats[this.state.enemy - 1].defense
        }
        this.setState({EnemyStats: targetEnemy})
      } else {
        var targetEnemy = this.state.EnemyStats;
        targetEnemy[this.state.enemy - 1] = {
          maxHP: 0,
          fullHP: this.state.EnemyStats[this.state.enemy - 1].fullHP,
          attack: this.state.EnemyStats[this.state.enemy - 1].attack,
          defense: this.state.EnemyStats[this.state.enemy - 1].defense
        }
        this.setState({
          EnemyStats: targetEnemy,
          path: 3,
          count: 4,
          enemy: "palpatine",
          displayHud: {
            display: "none"
          }
        })
        console.log("You have defeated " + this.state.enemyName[this.state.enemy - 1] + "!")
      }
    }
  }

  defend = () => {
    console.log("DEFEND!")
  }

  enemyAttack = (defense) => {
    console.log(defense)
    if (this.state.enemy !== "palpatine") {
      if (defense) {
        if (Math.floor(Math.random() * 10 + 1) === 1) {
          console.log("You parried the attack and countered for 5 damage!")
          var enemyAttackDmg = 0;

          var targetEnemy = this.state.EnemyStats;
          targetEnemy[this.state.enemy - 1] = {
            maxHP: this.state.EnemyStats[this.state.enemy - 1].maxHP - 5,
            fullHP: this.state.EnemyStats[this.state.enemy - 1].fullHP,
            attack: this.state.EnemyStats[this.state.enemy - 1].attack,
            defense: this.state.EnemyStats[this.state.enemy - 1].defense
          }
          this.setState({EnemyStats: targetEnemy})
        } else {
          var enemyAttackDmg = Math.floor(Math.random() * ((this.state.EnemyStats[this.state.enemy - 1].attack - this.state.LukeStats.defense) / 3) + ((this.state.EnemyStats[this.state.enemy - 1].attack - this.state.LukeStats.defense) / 2));
        }
        defense = "";
      } else {
        var enemyAttackDmg = Math.floor(Math.random() * (this.state.EnemyStats[this.state.enemy - 1].attack - this.state.LukeStats.defense) + (this.state.EnemyStats[this.state.enemy - 1].attack - this.state.LukeStats.defense));
      }

      console.log("Enemy attacks for " + enemyAttackDmg + "!");

      if ((this.state.LukeStats.maxHP - enemyAttackDmg) > 0) {
        this.setState({
          LukeStats: {
            maxHP: this.state.LukeStats.maxHP - enemyAttackDmg,
            fullHP: this.state.LukeStats.fullHP,
            attack: this.state.LukeStats.attack,
            defense: this.state.LukeStats.defense
          }
        })
      } else {
        this.setState({
          LukeStats: {
            maxHP: 0,
            fullHP: this.state.LukeStats.fullHP,
            attack: this.state.LukeStats.attack,
            defense: this.state.LukeStats.defense
          }
        })
      }
    }
  }
  // saberMouseEvent = event => {
  //   if (this.state.saberCanBeFound) {
  //     return <div id="lightSaber" onMouseEnter={this.handleSaber} onClick={this.handleSecondPath}></div>
  //   }
  //   else {
  //     return <div id="lightSaber"></div>;
  //   }
  // }

  render() {
    return (<div className="maxHeight">
      <div className="row text-center" id="battleTextBox">
        <Sound url={this.state.sounds.emperor} playStatus={Sound.status.PLAYING} autoLoad={true} loop={true}/>
        <Textbox path={this.state.path} progress={this.state.count}
          // handleTextClick={this.handleTextClick}
        />

        <div id="BattleWrapper">
          {/* <button onClick={this.hitBtn}>hit</button> */}
          <HealthBar enemy={this.state.enemy} enemyName={this.state.enemyName} LukeStats={this.state.LukeStats} EnemyStats={this.state.EnemyStats}/>

          <Enemy playingGif={this.state.playingGif} handleGifPlay={this.handleGifPlay} enemy={this.state.enemy} enemyName={this.state.enemyName} setGifPlayFalse={this.setGifPlayFalse} setGifPlayTrue={this.setGifPlayTrue} attack={this.attack} defend={this.defend} enemyAttack={this.enemyAttack} displayHud={this.state.displayHud} resetHud={this.resetHud} resetEnemy={this.resetEnemy}/>
        </div>
      </div>
    </div>);
  }
}

export default Battle;
