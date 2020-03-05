import React from 'react'
import {Provider} from "react-redux"
import { Route, HashRouter, Switch } from "react-router-dom"
import App from "./app"


const Root = ({store}) => (
    <Provider store = {store} > 
      <HashRouter>
        <Switch>
        <App/>
        
        </Switch>
      </HashRouter>
    </Provider>
)

export default Root