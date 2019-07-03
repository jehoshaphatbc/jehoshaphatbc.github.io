import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';

function Home() {
  return <h2>Ini Halaman Home</h2>
}

function ListView() {
  return (
    <div>
      <h2>Ini Halaman List User</h2>
      <ul>
        <li><Link to="users/mamat">Mamat</Link></li>
        <li><Link to="users/gofar">Gofar</Link></li>
      </ul>
  </div>
  )
}

function DetailView({ match }) {
  return <h2>Ini Halaman {match.params.name}</h2>
}

function NoMatch() {
  return <h2>404, Page Not Found</h2>
}


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">User</Link></li>
          </nav>
          <main>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/users" exact component={ListView}/>
              <Route path="/users/:name" exact component={DetailView}/>
              <Route component={NoMatch}/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
