import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import Main from './mainpage';
import DisplayItems from './itemsPage';
import {
  BrowserRouter,
  Switch,
  Navigate,
  Route,
  Link,
  Routes
} from "react-router-dom";

export class RouteController extends Component {

  render() {
    return <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Navigate to="/list" />}></Route>
        <Route exact path="/list" element={<Main></Main>}> </Route>
        <Route exact path="/list/category/:id" element={<DisplayItems location = {this.props}></DisplayItems>} ></Route>
      </Routes>
    </BrowserRouter>
  }

}

