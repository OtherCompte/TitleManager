import React from 'react'
import Header from "./layouts/Header";
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Campagnes from "./pages/Campagnes";
import Search from "./pages/Search.js";
import DashboardNavigation from './layouts/DashboardNavigation';

// Personnalised Dashboard
export default function Connected({ id, disUser}) {

    const { users } = useSelector(state => ({
        ...state.UserReducer
    }))

    const connectedUser = users.filter(user => user.id === id)[0]

    return (
        <Router>


            {/* Automatically display Header in ConnectedDashboard 
            Past props in Header - UserId + connectedUser and DiscUser who 
            are method in Parent's Component : App */}
            <Header
            key={id}
            id={id}
            user={connectedUser}
            discUser={disUser}
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 flex-column p-0">
                        <DashboardNavigation />
                    </div>
                    <div className="col-10 p-0">
                        <Switch>

                            <Route exact path="/" component={Home}/>
                            <Route exact path="/profil" component={Profil} />
                            <Route exact path="/search" component={Search} />
                            <Route exact path="/campagnes" component={Campagnes} />

                            {/* Page d'erreur en cas d'url non trouvé */}
                            <Redirect to="/"/>

                        </Switch>

                    </div>
                </div>
            </div>
        </Router>
    )
}
