import { Typography } from "@material-ui/core";

 const Placeholder = props => (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
  export default Placeholder;