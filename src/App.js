import { TextField } from '@material-ui/core';
import './App.css';
import ControllingInputWithState from './components/TextField/ControllingInputWithState';
import PlaceholderAndHelperText from './components/TextField/PlaceholderAndHelperText';
import ValidationAndErrorDisplay from './components/TextField/ValidationAndErrorDisplay';
import MultiLineInput from './components/TextField/MultiLineInput';
import InputAdornments from "./components/TextField/InputAdornments"
import InputMasking from './components/TextField/InputMasking';
import AutoComplete from './components/AutoComplete/AutoComplete';
import NewAutoComplete from './components/AutoComplete/NewAutoComplete';
import BreakPoints from "./components/Grid/BreakPoints.jsx"
import ColumnDirection from "./components/Grid/ColumnDirection"
import DrawerItemNavigation from "./components/Drawer/DrawerItemNavigation"
function App() {
  return (
    <div className="App">

      <DrawerItemNavigation />
    </div>
  );
}

export default App;
