import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    this.setState((state, props) => ({
      time : parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div> {this.state.time} Detik</div>
    )
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus : true
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState(state => ({
      toggleStatus : !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleToggle}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>kondisi sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
      </button>
    )
  }
}

function Clicker() {
  function handleClick(e) {
    alert('Berhasil diklik!')
    e.preventDefault()
  }

  return (
    <a href="#" onClick={handleClick}> Klik Bro! </a>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem : '',
      items : []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items     : [...this.state.items, this.state.todoItem],
      todoItem  : ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem : event.target.value
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
