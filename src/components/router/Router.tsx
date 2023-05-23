import {ReactElement, ReactNode} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Trainings from "../../pages/Trainings";

const routes: {path: string, element: ReactElement | ReactNode}[] = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/trainings',
        element: <Trainings/>
    }
]

const Router = () => {
    return (
       <Routes>
           {routes.map((item) => <Route {...item} key={item.path}></Route>)}
       </Routes>
    );
};

export default Router;
