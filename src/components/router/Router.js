import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Trainings from "../../pages/Trainings";
const routes = [
    {
        path: '/',
        element: _jsx(Home, {})
    },
    {
        path: '/trainings',
        element: _jsx(Trainings, {})
    }
];
const Router = () => {
    return (_jsx(Routes, { children: routes.map((item) => _createElement(Route, { ...item, key: item.path })) }));
};
export default Router;
