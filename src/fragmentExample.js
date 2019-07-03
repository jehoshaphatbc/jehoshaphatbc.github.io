import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';

class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Data 1</td>
        <td>Data 2</td>
      </React.Fragment>
    )
  }
}

class App extends Component {

  render() {

    return (
      <table>
        <tr>
          <Column/>
        </tr>
      </table>
    );
  }
}

export default App;
