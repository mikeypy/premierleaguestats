import React, { Component } from 'react';
import Nav from './Nav';
import { getFootballData } from './utils/chucknorris-api';




class FootBallData extends Component{

  constructor(){
    super()
    this.state = {seasons : []}
  }


  getFootballStats() {
    getFootballData().then((result) => {
      const entries = Object.entries(result)
      this.setState({seasons : entries[3][1]});
    });
  }

  componentDidMount() {
    this.getFootballStats();
  }

  render() {

    const { seasons }  = this.state;



    return (
      <div>
      <div>
          <Nav />
      </div>
      <hr/>
        { seasons.map((season, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title"> <span className="btn">Winner: { season.score.winner }</span></h3>
                    </div>
                    <div className="panel-body">
                      <p> { season.awayTeam.name } : {season.score.fullTime.awayTeam}<br />
                          { season.homeTeam.name } : {season.score.fullTime.homeTeam}

                      </p><br />
                      <p>Match Day :{ season.matchday }</p>
                    </div>
                  </div>
                </div>
            ))}




      </div>
    );
  }
}


export default FootBallData;
