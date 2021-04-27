import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import { store } from './store/store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-variant: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

`

toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ToastContainer position="top-center"/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
