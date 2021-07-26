import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function PasswordField() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <TextField
      type={visible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={toggleVisibility}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={toggleVisibility}>
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          )
      }}
    />
  );
}

export default function InputAdornments() {
  const [password, setPassword] = useState('');

  return (
    <PasswordField
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  );
}