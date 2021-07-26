import { makeStyles, Select } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import DropdownIndicator from "./DropdownIndicator"
import ClearIndicator from "./ClearIndicator"
import ValueContainer from "./ValueContainer"
import SingleValue from "./SingleValue"
import Placeholder from "./Placeholder"
import Option from "./Option"
import NoOptionsMessage from "./NoOptionsMessage"
import Menu from "./Menu"
import Control from "./Control"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  }
}));

const IndicatorSeparator = () => null;
export default function Autocomplete(props) {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  return (
    <div className={classes.root}>
      <Select
        value={value}
        onChange={v => setValue(v)}
        textFieldProps={{
          label: 'Team',
          InputLabelProps: {
            shrink: true
          }
        }}
        {...{ ...props, classes }}
      />
    </div>
  );
}

Autocomplete.defaultProps = {
  isClearable: true,
  components: {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
    IndicatorSeparator,
    ClearIndicator,
    DropdownIndicator
  },
  options: [
    { label: 'Boston Bruins', value: 'BOS' },
    { label: 'Buffalo Sabres', value: 'BUF' },
    { label: 'Detroit Red Wings', value: 'DET' },
    { label: 'Florida Panthers', value: 'FLA' },
    { label: 'Montreal Canadiens', value: 'MTL' },
    { label: 'Ottawa Senators', value: 'OTT' },
    { label: 'Tampa Bay Lightning', value: 'TBL' },
    { label: 'Toronto Maple Leafs', value: 'TOR' },
    { label: 'Carolina Hurricanes', value: 'CAR' },
    { label: 'Columbus Blue Jackets', value: 'CBJ' },
    { label: 'New Jersey Devils', value: 'NJD' },
    { label: 'New York Islanders', value: 'NYI' },
    { label: 'New York Rangers', value: 'NYR' },
    { label: 'Philadelphia Flyers', value: 'PHI' },
    { label: 'Pittsburgh Penguins', value: 'PIT' },
    { label: 'Washington Capitals', value: 'WSH' },
    { label: 'Chicago Blackhawks', value: 'CHI' },
    { label: 'Colorado Avalanche', value: 'COL' },
    { label: 'Dallas Stars', value: 'DAL' },
    { label: 'Minnesota Wild', value: 'MIN' },
    { label: 'Nashville Predators', value: 'NSH' },
    { label: 'St. Louis Blues', value: 'STL' },
    { label: 'Winnipeg Jets', value: 'WPG' },
    { label: 'Anaheim Ducks', value: 'ANA' },
    { label: 'Arizona Coyotes', value: 'ARI' },
    { label: 'Calgary Flames', value: 'CGY' },
    { label: 'Edmonton Oilers', value: 'EDM' },
    { label: 'Los Angeles Kings', value: 'LAK' },
    { label: 'San Jose Sharks', value: 'SJS' },
    { label: 'Vancouver Canucks', value: 'VAN' },
    { label: 'Vegas Golden Knights', value: 'VGK' }
  ]
};