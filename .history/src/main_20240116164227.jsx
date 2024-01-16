import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './context/StateProvider.js'
import { initialState } from './reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState}>
    <App />
    </StateProvider>
  </React.StrictMode>,
)
