import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { OrderContextProvider } from './contexts/OrdersContext'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrderContextProvider>
      <App />
    </OrderContextProvider>
  </React.StrictMode>,
)
