import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

import {globalState, GlobalContext, useGlobalContext} from "./context/context";
import Router from "./components/router/Router";
import {BrowserRouter, Link} from "react-router-dom";


function App() {

    const state = globalState()

    return (
        <GlobalContext.Provider value={state}>
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}

export default App
