import { IconButton } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
 const ClearIndicator = props => (
    <IconButton {...props.innerProps}>
      <CancelIcon />
    </IconButton>
  );
  export default ClearIndicator;