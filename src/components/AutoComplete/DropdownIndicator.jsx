import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
 const DropdownIndicator = props => (
    <IconButton {...props.innerProps}>
    <ArrowDropDownIcon />
  </IconButton>

  );  
  
  export default DropdownIndicator;