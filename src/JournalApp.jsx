import { BrowserRouter, Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};

export default JournalApp;