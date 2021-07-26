import { TextField } from "@material-ui/core";

const InputComponent = ({ inputRef, ...props }) => (
    <div ref={inputRef} {...props} />
  );
  
  export default InputComponent;