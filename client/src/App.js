//FINISH REGISTER REDUCER AND ACTION TO HANDLE ERRORS WITH ALERT
//IMPLEMENT PRIVATE ROUTE

import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/layout/routing/PrivateRoute";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
