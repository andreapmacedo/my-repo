import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/Componentes'
// import UseEffect from '../../views/examples/UseEffect'
import MySideMenu from '../../views/examples/MySideMenu'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import Logica from '../../views/examples/Logica'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/componentes">
                <UseState />
            </Route>
            <Route path="/logica">
                <Logica />
            </Route>
            <Route path="/myMenu">
                <MySideMenu />
            </Route>
            <Route path="/frameworks">
                <UseCallback />
            </Route>
            <Route path="/useMemo">
                <UseMemo />
            </Route>
            <Route path="/useContext">
                <UseContext />
            </Route>
            {/* <Route path="/useReducer">
                <UseReducer />
            </Route> */}
            <Route path="/useCustom">
                <UseCustom />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content