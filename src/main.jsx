import ReactDOM from 'react-dom/client'
import './index.css'
import './colores.css'
import Router from './router.jsx'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from './store/redux.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </StrictMode>
)
