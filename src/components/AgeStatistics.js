import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class AgeStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = { teams: this.props.teams, highestAvg: [], lowestAvg: [], teamAgeAverages: [] }
    }

    componentDidMount() {
        var i = 0, high = [], low = [];
        this.state.teams.forEach(team => {
            let players = team.teamPlayers;
            let total = 0;
            players.forEach(player => {
                total += player.age;
            });
            var TeamAvarages = { TeamName: team.teamName, AverageAge: (total / players.length) };
            high.push(TeamAvarages);
            low.push(TeamAvarages);

            if (i === this.state.teams.length - 1) {
                high.sort((a, b) => (b.AverageAge > a.AverageAge) ? 1 : ((a.AverageAge > b.AverageAge) ? -1 : 0));
                low.sort((a, b) => (b.AverageAge < a.AverageAge) ? 1 : ((a.AverageAge < b.AverageAge) ? -1 : 0));
                low = low.splice(0, 5);
                low.sort((a, b) => (b.AverageAge > a.AverageAge) ? 1 : ((a.AverageAge > b.AverageAge) ? -1 : 0));
                this.setState({
                    highestAvg: high.splice(0, 5), lowestAvg: low
                });
            }
            i++;
        });
    }

    render() {
        if (this.state.highestAvg.length !== 0 && this.state.lowestAvg.length !== 0) {
            return (
                <div className="ages">
                    <div className="highest">
                        <p>Highest avg age</p>
                        <ul>
                            {
                                this.state.highestAvg.map(avg => {
                                    if (this.state.highestAvg.indexOf(avg) === 0) {
                                        return <li key={uuidv4()} className="highlighted">{avg.TeamName}<span>{avg.AverageAge.toFixed(2)}</span></li>
                                    }
                                    return <li key={uuidv4()}>{avg.TeamName}<span>{avg.AverageAge.toFixed(2)}</span></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="lowest">
                        <p>Lowest avg age</p>
                        <ul>
                            {
                                this.state.lowestAvg.map(avg => {
                                    if (this.state.lowestAvg.indexOf(avg) === this.state.lowestAvg.length - 1) {
                                        return <li key={uuidv4()} className="highlighted">{avg.TeamName}<span>{avg.AverageAge.toFixed(2)}</span></li>
                                    }
                                    return <li key={uuidv4()}>{avg.TeamName}<span>{avg.AverageAge.toFixed(2)}</span></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (<div className="ages emptyState"><p>Begin createing teams to get age avarage statistics</p></div>
            );
        }
    }
}