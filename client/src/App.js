import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/layout/auth/Register";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
