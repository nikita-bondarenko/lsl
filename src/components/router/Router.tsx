import {memo, ReactElement, ReactNode, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Contacts from "../../pages/Contacts";

import {useWholeData} from "../../hooks/useWholeData";
import Feedbacks from "../../pages/Feedbacks";
import Test from "../../pages/Test";
import Trainings from "../../pages/Trainings";
import History from "../../pages/History";
import Blog from "../../pages/Blog";
import BlogPost from "../../pages/BlogPost";

const routes: { path: string, element: ReactElement | ReactNode }[] = [
    {
        path: '/',
        element: <Home/>
    }, {
        path: '/contacts',
        element: <Contacts/>
    },
    {
        path: '/feedbacks',
        element: <Feedbacks/>
    },
    {
        path: '/history',
        element: <History/>
    },
    {
        path: '/trainings',
        element: <Trainings/>
    },
    {
        path: '/blog',
        element: <Blog/>
    },
    {
        path: '/blog/:id',
        element: <BlogPost/>
    },
    {
        path: '/test',
        element: <Test/>
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
