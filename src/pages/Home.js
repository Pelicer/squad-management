import React from 'react';
import ReactDOM from 'react-dom';
import './../assets/style/home.css';

import TeamsList from './../components/TeamsList'
import AgeStatistics from './../components/AgeStatistics';
import PickRatio from '../components/PickRatio';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    let teams = localStorage.getItem("teams");
    this.state = { teams: JSON.parse(teams) }
    this.deleteTeam = this.deleteTeam.bind(this);
    this.editTeam = this.editTeam.bind(this);
    this.sortTable = this.sortTable.bind(this);
  }

  sortTable = (columnIndex) => {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementsByTagName("table")[0];
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[columnIndex];
        y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  deleteTeam = (id) => {
    let teamsList = this.state.teams;
    let index = -1;
    teamsList.forEach(team => {
      if (id === team.team_id) {
        index = teamsList.indexOf(team);
      }
    });
    teamsList.splice(index, 1);
    this.setState({ teams: teamsList });
    localStorage.setItem("teams", JSON.stringify(teamsList));
    ReactDOM.render(
      <AgeStatistics teams={this.state.teams} />,
      document.getElementById("ageWrapper")
    )
  }

  editTeam = (id) => {
    window.location.replace("/creation?id=" + id);
  }

  render() {
    return (
      <section id="content">
        <div id="teamsList" className="panel">
          <div className="head">
            <div className="wrapper">
              <p>My teams</p>
              <a className="link" href="/creation" >+</a>
            </div>
          </div>
          <div className="table-wrapper">
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th onClick={() => this.sortTable(0)}>Name</th>
                  <th onClick={() => this.sortTable(1)}>Description</th>
                </tr>
              </thead>
              <TeamsList teams={this.state.teams} deleteTeam={this.deleteTeam} editTeam={this.editTeam} />
            </table>
          </div>
        </div>

        <div id="ageStats" className="panel">
          <div className="head">
            <p>Top 5</p>
          </div>
          <div id="ageWrapper">
            <AgeStatistics teams={this.state.teams} />
          </div>
        </div>

        <div id="pickedStats" className="panel">
          <PickRatio teams={this.state.teams} />
        </div>

      </section >
    );
  }
}