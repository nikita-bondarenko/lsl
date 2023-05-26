import {memo, ReactElement, ReactNode, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Contacts from "../../pages/Contacts";

import {useWholeData} from "../../hooks/useWholeData";

const routes: { path: string, element: ReactElement | ReactNode }[] = [
    {
        path: '/',
        element: <Home/>
    }, {
        path: '/contacts',
        element: <Contacts/>
    }
]

const Router = memo(() => {
    useWholeData()
    return (
        <Routes>
            {routes.map((item, index) => <Route {...item} key={index}></Route>)}
        </Routes>
    );
});

export default Router;
