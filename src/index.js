import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

// import Login from './containers/Login'
// import Register from './containers/Register'
import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<AppProvider>
<Routes />
</AppProvider>
<ToastContainer autoClose={2000} theme='colored'/>
<GlobalStyles />
</>

)
