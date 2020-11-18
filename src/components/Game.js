import React, { Component } from 'react';
import { convertStateIdToName, fetchJsonFrom } from "../tools.js"
import TicTacToe from "./games/tictactoe.js"
import Connect4 from "./games/connect_4.js"

class Game extends Component {
    state = {
        "game": undefined,
    }

    async componentDidMount() {
        await this.update()
        this.timerID = setInterval(async () => await this.update(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    async update() {
        const game = await fetchJsonFrom("https://santa-games.azurewebsites.net/api/games/"+this.props.game_id);
        this.setState({ "game": game });
    }

    render(){
        let contents;
        if (this.state.game === undefined) contents = <h5>Loading game data...</h5>
        else
        {
            let hostPlaysFirst = this.state.game.host_plays_first === undefined || this.state.game.host_plays_first === null;
            let diagram = null;
            console.log(this.state.game.game_type_id)
            if (this.state.game.game_type_id === "0") diagram = <TicTacToe data={this.state.game.data} />
            else if (this.state.game.game_type_id === "1") diagram = <Connect4 data={this.state.game.data} />

            contents = (
                <div className="container">
                    <h3>Game #{this.state.game.game_id} | Tic-Tac-Toe | {this.state.game.host_user_name} vs {this.state.game.guest_user_name === null ? "[TBD]" : this.state.game.guest_user_name}</h3>
                    <h5>Stats</h5>
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <td>Status</td>
                                <td>{convertStateIdToName(this.state.game.game_state_id)}</td>
                            </tr>
                            <tr>
                                <td>Created</td>
                                <td>{this.state.game.datetime_created}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5>Details</h5>
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <td>Player 1</td>
                                <td>{hostPlaysFirst ? "-" : (this.state.game.host_plays_first ? this.state.game.host_user_name : this.state.game.guest_user_name)}</td>
                            </tr>
                            <tr>
                                <td>Player 2</td>
                                <td>{hostPlaysFirst ? "-" : (!this.state.game.host_plays_first ? this.state.game.host_user_name : this.state.game.guest_user_name)}</td>
                            </tr>
                            <tr>
                                <td>Turns</td>
                                <td>{this.state.game.number_of_turns}</td>
                            </tr>
                            <tr>
                                <td>Next Player</td>
                                <td>{ this.state.game.next_user_id === null ? "-" : (this.state.game.next_user_id === this.state.game.host_user_id ? this.state.game.host_user_name : this.state.game.guest_user_name)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>State</h5>
                    {diagram}
                </div>
            )
        }
        return (<div>{contents}</div>)
    }
}

export default Game;