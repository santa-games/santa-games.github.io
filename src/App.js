import React, { Component } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from './components/Users';
import User from './components/User';
import Games from './components/Games';
import Game from './components/Game';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './App.css';
import { convertStateIdToName, fetchJsonFrom } from "./tools.js"

class App extends Component {
    state = {
        "users": [],
    }

    async componentDidMount() {
        try {
            const users = await fetchJsonFrom("https://santa-games.azurewebsites.net/api/users")
            const games = await fetchJsonFrom('https://santa-games.azurewebsites.net/api/games');

            users.sort(function (a, b) { return b.games_won - a.games_won; })
            games.sort(function (a, b) { return b.game_id - a.game_id; })

            for(let game of games) {
                game.game_state = convertStateIdToName(game.game_state_id);
                game.host_user = game.host_user_id !== null ? users.find(user => user.user_id === game.host_user_id).user_name : "-"
                game.guest_user = game.guest_user_id !== null ? users.find(user => user.user_id === game.guest_user_id).user_name : "-"
                game.next_user = game.next_user_id !== null ? users.find(user => user.user_id === game.next_user_id).user_name : "-"
                game.win_user = game.win_user_id !== null ? users.find(user => user.user_id === game.win_user_id).user_name : "-"
            }
            
            this.setState({ "users": users, "games" : games });
        }
        catch (error) {
            console.log(error)
        }
    }



    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="/">Santa-Games</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link class="nav-link" to="/">Leaderboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/games">Games</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <Switch>
                            <Route path="/users/:user_id" render={(props) => (<User user_id={parseInt(props.match.params.user_id)} />)}/>
                            <Route path="/games/:game_id" render={(props) => (<Game game_id={parseInt(props.match.params.game_id)} />)}/>
                            <Route path="/games"><Games games={this.state.games} /></Route>
                            <Route path="/"><Users users={this.state.users} /></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
