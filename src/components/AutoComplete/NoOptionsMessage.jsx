import { Typography } from "@material-ui/core";
 const NoOptionsMessage = props => (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
  export default NoOptionsMessage;