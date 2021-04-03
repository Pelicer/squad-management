import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class TeamsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { teams: this.props.teams }
    }

    render() {
        if (this.state.teams !== null) {
            if (this.state.teams.length > 0) {
                return (
                    <tbody>
                        {
                            this.state.teams.map(team => {
                                return (
                                    <tr key={uuidv4()}>
                                        <td>{team.teamName}</td>
                                        <td>
                                            <p>{team.teamName + " Squad"}</p>
                                            <div className="actions"><span className="delete" onClick={() => this.props.deleteTeam(team.teamId)}>
                                                <div className="tooltip" >Delete</div>
                                            </span><span className="share">
                                                    <div className="tooltip">Share</div>
                                                </span><span className="edit" onClick={() => this.props.editTeam(team.teamId)}>
                                                    <div className="tooltip">Edit</div>
                                                </span></div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                );
            } else {
                return (
                    <tbody className="emptyState">
                        <tr>
                            <td colSpan="2">No teams were created yet</td>
                        </tr>
                    </tbody>
                );
            }
        }
        else {
            return (
                <tbody className="emptyState">
                    <tr>
                        <td colSpan="2">No teams were created yet</td>
                    </tr>
                </tbody>
            );
        }
    }
}