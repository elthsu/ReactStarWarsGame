import React from "react";

var tempEnemy;

class HealthBar extends React.Component {

  state = {}

  componentWillReceiveProps(newProp) {
    if (newProp.enemy !== this.props.enemy && newProp.enemy === "palpatine") {
      tempEnemy = this.props.enemy;
    }
  }

  render() {
    console.log(this.props.enemy);
    if (this.props.enemy !== "palpatine") {
      var enemyHealthBar = parseInt((parseInt(this.props.EnemyStats[this.props.enemy - 1].maxHP) / parseInt(this.props.EnemyStats[this.props.enemy - 1].fullHP)) * 100);

      return (<div>
        <div className="row">

          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="progress progress--sabers">
              <div className="progress-bar progress-bar-danger progress-bar-player1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{
                  width: this.props.LukeStats.maxHP + '%'
                }}><img className="hilt" src="hilt.gif"/></div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="progress progress progress--sabers">
              <div className="progress-bar progress-bar-danger progress-bar-player2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{
                  width: enemyHealthBar + '%'
                }}><img className="vader_hilt" src="vader_hilt.png"/></div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 nameBar" style={{
              textAlign: "left"
            }}>Luke Skywalker
            <p>
              <i className="fas fa-heart nameSpacer" data-fa-transform="up-4"></i>
              <span className="healthBarTextLuke">{this.props.LukeStats.maxHP}</span>
            </p>
            <p>
              <i className="fas fa-gavel" data-fa-transform="up-4"></i>
              <span className="healthBarTextLuke">{this.props.LukeStats.attack}</span>
            </p>
            <p>
              <i className="fas fa-shield-alt" data-fa-transform="up-4"></i>
              <span className="healthBarTextLuke">{this.props.LukeStats.defense}</span>
            </p>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4 nameBar"></div>

          <div className="col-sm-4 col-md-4 col-lg-4 nameBar" style={{
              textAlign: "right"
            }}>{this.props.enemyName[this.props.enemy - 1]}
            <p id="enemyLine1">
              <i className="fas fa-heart nameSpacer" data-fa-transform="up-4"></i>
              <span className="healthBarTextEnemy">{this.props.EnemyStats[this.props.enemy - 1].maxHP}</span>
            </p>
            <p id="enemyLine2">
              <i className="fas fa-gavel" data-fa-transform="up-4"></i>
              <span className="healthBarTextEnemy">{this.props.EnemyStats[this.props.enemy - 1].attack}</span>
            </p>
            <p id="enemyLine3">
              <i className="fas fa-shield-alt" data-fa-transform="up-4"></i>
              <span className="healthBarTextEnemy">{this.props.EnemyStats[this.props.enemy - 1].defense}</span>
            </p>
          </div>

        </div>
      </div>)
    } else {

      return (<div>
        <div className="row">

          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="progress progress--sabers">
              <div className="progress-bar progress-bar-danger progress-bar-player1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{
                  width: this.props.LukeStats.maxHP + '%'
                }}><img className="hilt" src="hilt.gif"/></div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="progress progress progress--sabers">
              <div className="progress-bar progress-bar-danger progress-bar-player2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{
                  width: '0%'
                }}><img className="vader_hilt" src="vader_hilt.png"/></div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 nameBar" style={{
              textAlign: "left"
            }}>Luke Skywalker
            <p>
              <i className="fas fa-heart nameSpacer" data-fa-transform="up-4"></i>
              <span className="healthBarTextLuke">{this.props.LukeStats.maxHP}</span>
            </p>
            <p>
              <i className="fas fa-gavel" data-fa-transform="up-4"></i>
              <span className="healthBarTextLuke">{this.props.LukeStats.attack}</span>
            </p>
            <p>
              <i className="fas fa-shield-alt" data-fa-transform="up-4"></i>
              <span className="healthBarTextLuke">{this.props.LukeStats.defense}</span>
            </p>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4 nameBar"></div>

          <div className="col-sm-4 col-md-4 col-lg-4 nameBar" style={{
              textAlign: "right"
            }}>{this.props.enemyName[tempEnemy - 1]}
            <p id="enemyLine1">
              <i className="fas fa-heart nameSpacer" data-fa-transform="up-4"></i>
              <span className="healthBarTextEnemy">{this.props.EnemyStats[tempEnemy - 1].maxHP}</span>
            </p>
            <p id="enemyLine2">
              <i className="fas fa-gavel" data-fa-transform="up-4"></i>
              <span className="healthBarTextEnemy">{this.props.EnemyStats[tempEnemy - 1].attack}</span>
            </p>
            <p id="enemyLine3">
              <i className="fas fa-shield-alt" data-fa-transform="up-4"></i>
              <span className="healthBarTextEnemy">{this.props.EnemyStats[tempEnemy - 1].defense}</span>
            </p>
          </div>

        </div>
      </div>)
    }
  }
}

export default HealthBar;
