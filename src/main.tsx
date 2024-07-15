import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import App from './App.tsx'
import './index.css'
import {store} from "./store/store.ts";
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </NextUIProvider>
    </React.StrictMode>,
)
