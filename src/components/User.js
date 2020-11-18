import React, { Component } from 'react';
import { fetchJsonFrom } from '../tools.js'
import DoughnutChart from "./charts/doughnut_chart"
class User extends Component {
    state = {
        "user": undefined,
    }

    async componentDidMount() {
        try {
            const user = await fetchJsonFrom("https://santa-games.azurewebsites.net/api/users/"+this.props.user_id)
            this.setState({ "user": user });
        }
        catch (error) {
            console.log(error)
        }
    }

    render(){
        let contents;
        if (this.state.user === undefined) contents = <h5>Loading user data...</h5>
        else
        {
            let data = [
                { "label" : "Won", "value" : this.state.user.games_won },
                { "label" : "Lost", "value" : this.state.user.games_lost }
            ]

            contents = (
                <div className="container">
                    <h3>{this.state.user.user_name}</h3>
                    <h5>Details</h5>
                    <table class="table table-sm">
                        <tbody>
                            <tr><td>User ID</td><td>{this.state.user.user_id}</td></tr>
                            <tr><td>User Name</td><td>{this.state.user.user_name}</td></tr>
                        </tbody>
                    </table>
                    <h5>Stats</h5>
                    <table class="table table-sm">
                        <tbody>
                            <tr><td>Games Played</td><td>{this.state.user.games_lost + this.state.user.games_won}</td></tr>
                            <tr><td>Games Won</td><td>{this.state.user.games_won}</td></tr>
                            <tr><td>Games Lost</td><td>{this.state.user.games_lost}</td></tr>
                        </tbody>
                    </table>

                <h5>Stats</h5>
                <DoughnutChart
                    data={data}
                    title="Won/Lost"
                    colors={['#2c3e50', '#95a5a6' ]}/>
                </div>
            )
        }
        return (<div>{contents}</div>)
    }
}

export default User;