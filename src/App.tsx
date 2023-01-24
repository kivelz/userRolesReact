import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {baseTheme} from '../src/app/assets/global/Theme-variable'
import Themeroutes from "./routes/Router";
import { Provider } from 'react-redux';
import { store } from "./app/redux/store";

const App = () => {
  const routing = useRoutes(Themeroutes);
  const theme = baseTheme;
  
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
    </Provider>
   
  );
};
export default App;
