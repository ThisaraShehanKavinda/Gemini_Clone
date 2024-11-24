import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Context/Context.jsx'
import ContextProvider from './Context/Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
