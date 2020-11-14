import React, { Component } from 'react';
import { convertStateIdToName, fetchJsonFrom } from "../tools.js"
import TicTacToe from "./games/tictactoe.js"

class Game extends Component {
    state = {
        "game": undefined,
    }

    async componentDidMount() {
        const game = await fetchJsonFrom("https://santa-games.azurewebsites.net/api/games/"+this.props.game_id);
        
        const host_user = game.host_user_id !== null ? this.props.users.find(user => user.user_id === game.host_user_id) : null;
        game.host_user = host_user ? host_user.user_name : "-";

        const guest_user = game.guest_user_id !== null ? this.props.users.find(user => user.user_id === game.guest_user_id) : null;
        game.guest_user = guest_user ? guest_user.user_name : "-";
        
        this.setState({ "game": game });
    }

    render(){
        let contents;
        if (this.state.game === undefined) contents = <h5>Loading game data...</h5>
        else
        {
            contents = (
                <div className="container">
                    <h3>Game #{this.state.game.game_id} | Tic-Tac-Toe </h3>
                    <h4>{this.state.game.host_user} vs {this.state.game.guest_user}</h4>
                    <h4>Status: {convertStateIdToName(this.state.game.game_state_id)}</h4>
                    <h5>Stats</h5>
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <td>Started</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Turns</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Ended</td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>Data</h5>
                    <TicTacToe data={this.state.game.data} />
                </div>
            )
        }
        return (<div>{contents}</div>)
    }
}

export default Game;