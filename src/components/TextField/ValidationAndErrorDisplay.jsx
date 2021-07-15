import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: { margin:(10) },
  textawy:{
      backgroundColor:"white",
      fontWeight: 500

  }
}));

export default function ValidationAndErrorDisplay() {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
    {
      id: 'email',
      label: 'email',
      placeholder: 'test@gmail.com',
      value: '',
      error: false,
      helperText: 'Any valid email will do',
      type:'text',
      autoComplete:'email',
      getHelperText: error =>
        error
          ? 'Woops. Not a valid email'
          : 'Any valid email will do',
      isValid: value =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
    },
    {
      id: 'password',
      autoComplete:'current-password',
      label: 'password',
      placeholder: 'enter your password',
      value: '',
      error: false,
      type:'password',
      helperText: 'Any valid email password will do',
      getHelperText: error =>
        error
          ? 'Woops. Not a valid password'
          : 'Any valid password will do',
      isValid: value => (value.length>2 )
    }
  ]);   

  const onChange = ({ target: { id, value } }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex(input => input.id === id);
    const input = inputs[index];
    const isValid = input.isValid(value);

    newInputs[index] = {
      ...input,
      value: value,
      error: !isValid,
      helperText: input.getHelperText(!isValid)
    };

    setInputs(newInputs);
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      {inputs.map(input => (
        <Grid item key={input.id}>
          <TextField
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}
            helperText={input.error &&  input.helperText}
            value={input.value}
            type={input.type}
            autoComplete={input.autoComplete}
            InputProps={{
                className: classes.textawy,
                name:input.label
            }}     
                   onChange={onChange}
            error={input.error}
          />
        </Grid>
      ))}
    </Grid>
  );
}