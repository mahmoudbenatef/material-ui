import { CssBaseline, TextField, ThemeProvider } from '@material-ui/core';
import './App.css';
import TabAlignment from "./components/Snackbar/Test"
import theme from './components/Theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <TabAlignment />
      </div>
    </ThemeProvider>
  );
}
export default App;