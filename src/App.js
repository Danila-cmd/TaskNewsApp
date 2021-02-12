import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainMenu from "./components/MainMenu";
import AddNew from "./components/AddNew";
import EditNew from "./components/EditNew";
import {GlobalProvider} from "./context/GlobalState";
import NewShow from "./components/News/NewShow";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <div>
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainMenu}/>
                        <Route path="/add" component={AddNew}/>
                        <Route path="/edit:id" component={EditNew}/>
                        <Route path="/show:id" component={NewShow}/>
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
