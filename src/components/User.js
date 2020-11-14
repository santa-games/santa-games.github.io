import React, { Component } from 'react';
import { fetchJsonFrom } from '../tools.js'

class User extends Component {
    state = {
        "user": undefined,
    }

    async componentDidMount() {
        let user;
        try {
            user = await fetchJsonFrom("https://santa-games.azurewebsites.net/api/users/"+this.props.user_id)
        }
        catch (error) {
            console.log(user)
        }
        this.setState({ "user": user });
    }

    render(){
        let contents;
        if (this.state.user === undefined) contents = <h5>Loading user data...</h5>
        else
        {
            contents = (
                <div className="container">
                    <h3>{this.state.user.user_name}</h3>
                    <h5>Stats</h5>
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <th>Joined</th>
                                <td>...</td>
                            </tr>
                            <tr>
                                <th>Games Played</th>
                                <td>...</td>
                            </tr>
                            <tr>
                                <th>Games Won</th>
                                <td>...</td>
                            </tr>
                            <tr>
                                <th>Games Lost</th>
                                <td>...</td>
                            </tr>
                            <tr>
                                <th>Games Draw</th>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>

                <h5>Games</h5>
                

                </div>
            )
        }
        return (<div>{contents}</div>)
    }
}

export default User;