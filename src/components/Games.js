import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

class Games extends Component {
    state = {}

    handleClick(game_id) {
        this.setState({ "redirect": game_id })
    }

    render() {
        if (this.state.redirect !== undefined) return <Redirect to={'/games/' + this.state.redirect} />

        let tableContents;
        if (this.props.games === undefined) tableContents = (<p>No games to display</p>)
        else {
            tableContents = this.props.games.map((game) => (
                <tr key={game.game_id} onClick={() => this.handleClick(game.game_id)}>
                    <td>{game.game_id}</td>
                    <td>{game.game_state}</td>
                    <td>{game.host_user}</td>
                    <td>{game.guest_user}</td>
                    <td>{game.win_user}</td>
                    <td>{game.next_user}</td>
                </tr>
            ))
        }
        return (
            <div class="container">
                <h3>Games</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">State</th>
                            <th scope="col">Host</th>
                            <th scope="col">Guest</th>
                            <th scope="col">Winner</th>
                            <th scope="col">Next</th>
                        </tr>
                    </thead>
                    <tbody>{tableContents}</tbody>
                </table>
            </div>
        )
    }
}

export default Games;