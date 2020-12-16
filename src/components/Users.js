import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

class Users extends Component {
    state = {}

    handleClick(user_id) {
        this.setState({ "redirect": user_id })
    }

    render() {
        if (this.state.redirect !== undefined) return <Redirect to={'/users/' + this.state.redirect} />
        return (
            <div className="container">
                <h3>Leaderboard</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Won</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user) => (
                            <tr key={user.user_id} onClick={() => this.handleClick(user.user_id)}>
                                <td>{user.user_id}</td>
                                <td>{user.user_name}</td>
                                <td>{user.games_won}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users;