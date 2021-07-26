import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

export default function MultilineInput() {
  const [multiline, setMultiline] = useState('');

  return (
      <>
    <TextField
      multiline
      value={multiline}
      rows={5}
    //   maxRows={6}
      label={"Multi line"}
      onChange={e => setMultiline(e.target.value)}
    />
    </>
  );
}