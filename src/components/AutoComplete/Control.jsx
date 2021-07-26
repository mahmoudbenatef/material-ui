import { TextField } from "@material-ui/core";
import InputComponent from "./InputComponent"
const Control = props => (
    <TextField
      fullWidth
      InputProps={{
        InputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );

  export default Control;
