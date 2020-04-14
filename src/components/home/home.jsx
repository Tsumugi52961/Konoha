import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import './home.css'

export default function Home () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/home"><a className="App-link">Home</a></Link>
        <Link to="/subs" className="App-link">Subscriptions</Link>
      </header>
    </div>
  )
}
