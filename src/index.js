import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './GlobalStyles'
import ScrollToTop from './services/lib/ScrollToTop'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
