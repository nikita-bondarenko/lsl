import { jsx as _jsx } from "react/jsx-runtime";
import { globalState, GlobalContext } from "./context/context";
import Router from "./components/router/Router";
import { BrowserRouter } from "react-router-dom";
function App() {
    const state = globalState();
    return (_jsx(GlobalContext.Provider, { value: state, children: _jsx(BrowserRouter, { children: _jsx(Router, {}) }) }));
}
export default App;
