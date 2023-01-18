import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./global.css";
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'

//import reportWebVitals from './reportWebVitals';
import Spinner from "./app/view/Spinner/Spinner";

const queryClient = new QueryClient();

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
    </HashRouter>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
