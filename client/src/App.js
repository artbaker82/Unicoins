//FINISH REGISTER REDUCER AND ACTION TO HANDLE ERRORS WITH ALERT
//IMPLEMENT PRIVATE ROUTE

import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className='relative'>
            <Alert />
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              {/* <Route exact path='/dashboard' element={<Dashboard />} /> */}
              <Route
                exact
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
