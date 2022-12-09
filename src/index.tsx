import React, {Provider} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App, {appPropsType} from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./redux/StoreContext";



const rerenderEntireTree = () => {
    ReactDOM.render(
        //<React.StrictMode>
        <BrowserRouter>
            <StoreContext.Provider value={store}>

                <App store={store}/>
            </StoreContext.Provider>

        </BrowserRouter>,
        document.getElementById("root")
    );

}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()


// rerenderEntireTree(store.getState())

// store.subscribe(()=> {
//     let state = store.getState()
//     rerenderEntireTree(state);
// })


//нужно посмотреть по компоненте(функции) store, нужно удалить

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );


// // ReactDOM.render (
// <BrowserRouter>
//   <App state={state}/>
// </BrowserRouter>, document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

