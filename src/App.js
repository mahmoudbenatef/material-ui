import { TextField } from '@material-ui/core';
import './App.css';
import ControllingInputWithState from './components/TextField/ControllingInputWithState';
import PlaceholderAndHelperText from './components/TextField/PlaceholderAndHelperText';
import ValidationAndErrorDisplay from './components/TextField/ValidationAndErrorDisplay';

function App() {
  return (
    <div className="App">
      {/* <ControllingInputWithState /> */}
      {/* <PlaceholderAndHelperText /> */}
      <ValidationAndErrorDisplay />
    </div>
  );
}

export default App;
