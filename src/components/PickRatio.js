import React from 'react';

export default class PickRatio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { teams: this.props.teams, most: {}, least: {} };
    }

    componentDidMount() {
        let playersRatio = { players: [], total: 0 };
        this.props.teams.forEach(team => {
            team.teamPlayers.forEach(player => {
                let p = playersRatio.players.filter(pl => {
                    return pl.id === player.id;
                })[0];
                if (p !== undefined) {
                    p.picks++;
                } else {
                    playersRatio.players.push({ id: player.id, name: player.name, initials: player.initials, picks: 1 });
                }
                playersRatio.total++;
            })
        });
        let most = { ratio: 0 }, least = { ratio: 100 };
        playersRatio.players.forEach(player => {
            player.ratio = ((player.picks / playersRatio.total) * 100).toFixed(1);
            if (player.ratio > most.ratio) {
                most = player;
            }
            if (player.ratio < least.ratio) {
                least = player;
            }
        })
        if (most.initials !== undefined && least.initials !== undefined) {
            this.setState({ most: most, least: least });
        }
    }

    render() {
        if (this.state.most.initials !== undefined && this.state.least.initials !== undefined) {
            return (
                <div className="ratioWrapper">
                    <div className="most">
                        <div className="title">Most picked player</div>
                        <div className="player">
                            <div className="initials">
                                {this.state.most.initials}
                                <span>{this.state.most.ratio}%</span>
                            </div>
                        </div>
                    </div>
                    <div className="least">
                        <div className="title">Least picked player</div>
                        <div className="player">
                            <div className="initials">
                                {this.state.least.initials}
                                <span>{this.state.least.ratio}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ratioWrapper">
                    <div className="most">
                        <div className="title">Most picked player</div>
                        <div className="player">
                            <div className="initials">
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                    <div className="least">
                        <div className="title">Least picked player</div>
                        <div className="player">
                            <div className="initials">
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}