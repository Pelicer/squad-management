import React from 'react';
import './../assets/style/creation.css';
import { v4 as uuidv4 } from 'uuid';

export default class Creation extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.location.search !== "" && this.props.location.search.indexOf("id") !== -1) {
            let id = this.props.location.search.replace("?id=", "");
            let teamsList = JSON.parse(localStorage.getItem("teams"));
            let team = teamsList.filter(function (team) {
                return team.teamId = id;
            })[0];
            this.state = { playersSearchList: [], teamId: id, teamPlayers: team.teamPlayers, teamName: team.teamName, teamDescription: team.teamDescription, teamType: team.teamType, teamTags: team.teamTags, teamWebsite: team.teamWebsite, teamFormation: team.teamFormation };
        } else {
            this.state = { playersSearchList: [], teamId: "", teamPlayers: [], teamName: "", teamDescription: "", teamType: "", teamTags: [], teamWebsite: "", teamFormation: "3 - 2 - 2 - 3" };
        }

        this.getPlayers = this.getPlayers.bind(this);
        this.addPlayerToTeam = this.addPlayerToTeam.bind(this);
        this.removePlayerFromTeam = this.removePlayerFromTeam.bind(this);
        this.clearTeam = this.clearTeam.bind(this);
        this.setTeamDescription = this.setTeamDescription.bind(this);
        this.setTeamName = this.setTeamName.bind(this);
        this.setTeamWebsite = this.setTeamWebsite.bind(this);
        this.setTeamType = this.setTeamType.bind(this);
        this.setTeamTags = this.setTeamTags.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.setTeamFormation = this.setTeamFormation.bind(this);
        this.saveTeam = this.saveTeam.bind(this);

        this.dragPlayer = this.dragPlayer.bind(this);
        this.allowPlayerDrag = this.allowPlayerDrag.bind(this);
        this.playerDrop = this.playerDrop.bind(this);
    }
    getPlayers(playerName) {
        if (playerName.length >= 4) {
            fetch("https://api-football-v1.p.rapidapi.com/v2/players/search/" + playerName, {
                "withCredentials": "false",
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_API_FOOTBALL_KEY,
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then(data => {
                    let playersSearchList = [];
                    data.api.players.forEach(player => {
                        let initials = player.player_name.split(" ");
                        if (initials.length === 1) {
                            initials = initials[0].substring(0, 1) + initials[0].substring(1, 1);
                        } else {
                            initials = initials[0].substring(0, 1) + initials[1].substring(0, 1);
                        }
                        let isOnTeam = this.state.teamPlayers.filter(function (p) {
                            return p.id === player.player_id;
                        })[0]
                        if (isOnTeam === undefined) {
                            playersSearchList.push({
                                id: player.player_id,
                                name: player.player_name,
                                initials: initials,
                                nationality: player.nationality,
                                age: player.age
                            })
                        }
                    });
                    this.setState({ playersSearchList: playersSearchList.slice(0, 10) });
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }

    setTeamName(name) {
        this.setState({ teamName: name });
    }

    setTeamDescription(description) {
        this.setState({ teamDescription: description });
    }

    setTeamWebsite(website) {
        this.setState({ teamWebsite: website });
    }

    setTeamType(type) {
        this.setState({ teamType: type });
    }

    setTeamTags(event) {
        switch (event.keyCode) {
            case 13:
            case 191:
                let tag = event.target.value;
                tag = tag.replace(";", "");
                this.setState((prevState) => {
                    return { teamTags: [...prevState.teamTags, tag] }
                })
                document.getElementById("tagsInput").value = "";
                break;
            case 8:
                console.log(event);
                let tags = this.state.teamTags;
                if (event.target.value.length <= 0) {
                    tags.splice(tags.length - 1, 1);
                    this.setState({ teamTags: tags })
                }
                break;
            default:
                return;
        }
    }

    removeTag(key) {
        let tags = this.state.teamTags;
        tags = tags.filter(function (tag) {
            return tag !== key;
        })
        this.setState({ teamTags: tags })
    }

    setTeamFormation(formation) {
        this.setState({ teamFormation: formation });
        this.clearTeam();
    }

    clearTeam() {
        this.setState({ playersSearchList: [], teamPlayers: [] })
        document.getElementById("playerSearchInput").value = "";
    }

    checkFields(team) {
        let isReady = true;

        if (team.teamName === "") {
            document.getElementById("teamNameField").parentNode.classList.add("incorrectInfo");
            document.getElementById("teamNameField").focus();
            isReady = false;
        } else {
            document.getElementById("teamNameField").parentNode.classList.remove("incorrectInfo");
        }

        let expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
        let regex = new RegExp(expression);

        if (team.teamWebsite === "" || team.teamWebsite.match(regex) === null) {
            document.getElementById("teamWebsiteField").parentNode.classList.add("incorrectInfo");
            document.getElementById("teamWebsiteField").focus();
            isReady = false;
        } else {
            document.getElementById("teamWebsiteField").parentNode.classList.remove("incorrectInfo");
        }

        if (team.teamType === "") {
            document.getElementById("teamTypeField").classList.add("incorrectInfo");
            document.getElementById("teamTypeField").children[1].focus();
            isReady = false;
        } else {
            document.getElementById("teamTypeField").parentNode.classList.remove("incorrectInfo");
        }

        if (team.teamPlayers.length < 11) {
            document.getElementById("formationField").classList.add("incorrectInfo");
            document.getElementById("formationField").focus();
            isReady = false;
        }

        return isReady;
    }

    saveTeam() {
        let teamsList = JSON.parse(localStorage.getItem("teams"))
        if (this.state.teamId == "") {
            if (this.checkFields(this.state)) {
                this.state.teamId = uuidv4();
                delete this.state.playersSearchList;
                teamsList.push(this.state);
                localStorage.setItem("teams", JSON.stringify(teamsList));
                window.location.replace("/");
            }
        } else {
            let team = teamsList.filter((t) => {
                return t.teamId === this.state.teamId;
            })[0]
            team = this.state;
            teamsList.forEach((t) => {
                if (t.teamId === team.teamId) {
                    t.teamName = team.teamName;
                    t.teamDescription = team.teamDescription;
                    t.teamWebsite = team.teamWebsite;
                    t.teamTags = team.teamTags;
                    t.teamType = team.teamType;
                    t.teamFormation = team.teamFormation;
                    t.teamPlayers = team.teamPlayers;
                }
            });
            if (this.checkFields(team)) {
                localStorage.setItem("teams", JSON.stringify(teamsList));
                window.location.replace("/");
            }
        }
    }

    addPlayerToTeam(newPlayer) {
        if (this.state.teamPlayers.length < 11) {
            let isAlreadyIn = this.state.teamPlayers.filter(function (t) {
                return t.id === newPlayer.id;
            })
            if (isAlreadyIn.length === 0) {
                this.setState((prevState) => {
                    return { teamPlayers: [...prevState.teamPlayers, newPlayer] }
                });
                let newSearchList = this.state.playersSearchList.filter(function (player) {
                    return player.id !== newPlayer.id;
                })
                this.setState({ playersSearchList: newSearchList });
            }
        }
    }

    removePlayerFromTeam(playerid) {
        if (playerid !== undefined) {
            let players = this.state.teamPlayers;
            players = players.filter(function (p) {
                return p.id !== playerid;
            })
            this.setState({ teamPlayers: players });
        }
    }

    dragPlayer(ev) {
        ev.dataTransfer.setData("playerId", ev.target.id);
        ev.dataTransfer.dropEffect = "move"
    }

    allowPlayerDrag(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    playerDrop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("playerId");
        let player = this.state.playersSearchList.filter(function (p) {
            return p.id == data;
        })[0];
        player.position = ev.target.id.split("_")[1];
        this.addPlayerToTeam(player);
    }

    render() {
        let playersSearchList = () => {
            if (this.state.playersSearchList.length > 0) {
                return this.state.playersSearchList.map(player => {
                    return (
                        <div draggable="true" id={player.id} onDragStart={(event) => this.dragPlayer(event)} className="player" key={player.id}>
                            <p>Name:<span>{player.name}</span></p>
                            <p>Age:<span>{player.age}</span></p>
                            <p>Nacionality:<span>{player.nationality}</span></p>
                        </div>
                    )
                })
            } else {
                return (<div className="emptyState"><p>Type on the search box to find players. 4 characters minimum for a search</p> </div>)
            }
        }

        let isFantasy = this.state.teamType === "Fantasy" ? true : false;
        let isReal = this.state.teamType === "Real" ? true : false;

        return (
            <section id="creation-content">
                <div className="panel">
                    <div className="head">
                        <div className="wrapper">
                            <p>Create your team</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="team-info">
                            <p className="section-title">Team information</p>
                            <div className="left-pane">
                                <div>
                                    <label htmlFor="teamname">Team name</label>
                                    <input id="teamNameField" name="teamname" placeholder="Insert team name" onChange={(event) => this.setTeamName(event.target.value)} value={this.state.teamName} />
                                </div>
                                <div className="area-wrapper">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="teamDescriptionField" className="textarea" name="description" placeholder="Insert your team description" onChange={(event) => this.setTeamDescription(event.target.value)} value={this.state.teamDescription} />
                                </div>
                            </div>
                            <div className="right-pane">
                                <div>
                                    <label htmlFor="website">Team website</label>
                                    <input id="teamWebsiteField" name="website" placeholder="http://myteam.com" onChange={(event) => this.setTeamWebsite(event.target.value)} value={this.state.teamWebsite} />
                                </div>
                                <div>
                                    <label htmlFor="type">Team type</label>
                                    <div id="teamTypeField" className="team-types">
                                        <label><input type="radio" name="type" value="Real" checked={isReal} onChange={(event) => this.setTeamType(event.target.value)} /><span
                                            className="checkmark" ></span>Real</label>
                                        <label><input type="radio" name="type" value="Fantasy" checked={isFantasy} onChange={(event) => this.setTeamType(event.target.value)} /><span
                                            className="checkmark" ></span>Fantasy</label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="tags">Tags</label>
                                    <div id="tagsField" suppressContentEditableWarning={true} contentEditable="true" className="textarea" name="tags" onFocus={() => document.getElementById("tagsInput").focus()}>
                                        {
                                            this.state.teamTags.map(tag => {
                                                return <span key={tag}>{tag}<b onClick={() => this.removeTag(tag.toString())}>X</b></span>
                                            })
                                        }
                                        <input id="tagsInput" onKeyDown={(event) => this.setTeamTags(event)}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="config-info">
                            <p className="section-title">Configure squad</p>
                            <div id="formationField" className="left-pane">
                                <div className="formation-selection">
                                    <label>Formation</label>
                                    <select onChange={(event) => this.setTeamFormation(event.target.value)}>
                                        <option>3 - 2 - 2 - 3</option>
                                        <option>3 - 2 - 3 - 1</option>
                                        <option>3 - 4 - 3</option>
                                        <option>3 - 5 - 2</option>
                                        <option>4 - 2 - 3 - 1</option>
                                        <option>4 - 3 - 1 - 1</option>
                                        <option>4 - 3 - 2</option>
                                        <option>4 - 4 - 2</option>
                                        <option>4 - 5 - 1</option>
                                        <option>5 - 4 - 1</option>
                                    </select>
                                </div>

                                <div className="formation-field">
                                    {
                                        [...Array(11)].map((o, i) => {
                                            let player = this.state.teamPlayers.filter(function (p) {
                                                return p.position == i;
                                            })[0];
                                            let classes;
                                            switch (i) {
                                                case 3:
                                                case 10:
                                                    classes = "position centered";
                                                    break;
                                                case 5:
                                                    classes = "position middle";
                                                    break;
                                                default:
                                                    classes = "position";
                                                    break;
                                            }
                                            return (
                                                <div onDragOver={(event) => this.allowPlayerDrag(event)} onDrop={(event) => this.playerDrop(event)} key={"player_" + i} id={"player_" + i} className={classes} onClick={() => player !== undefined ? this.removePlayerFromTeam(player.id) : ""}>
                                                    {player === undefined ? "+" : player.initials}
                                                    <div className="tooltip">
                                                        <p>Name:<span>{player === undefined ? "" : player.name}</span></p>
                                                        <p>Age:<span>{player === undefined ? "" : player.age}</span></p>
                                                        <p>Nacionality:<span>{player === undefined ? "" : player.nationality}</span></p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }

                                </div>
                                <button onClick={this.saveTeam}>Save</button>

                            </div>
                            <div className="right-pane">
                                <div>
                                    <label htmlFor="searchbox">Search Players</label>
                                    <input id="playerSearchInput" name="searchbox" onChange={(event) => this.getPlayers(event.target.value)} />
                                </div>
                                <div className="players-list">
                                    {
                                        playersSearchList()
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}