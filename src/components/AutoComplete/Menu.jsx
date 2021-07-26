import { Paper } from "@material-ui/core";

 const Menu = props => (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
  export default Menu;