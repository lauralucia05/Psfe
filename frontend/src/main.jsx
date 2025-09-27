import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
// import { GoogleOAuthProvider } from '@react-oauth/google'

// const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID || import.meta.env.REACT_APP_GOOGLE_CLIENT_ID;
// console.log('Google OAuth Client ID:', clientId);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  // </GoogleOAuthProvider>,
)

