import React, { Fragment } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FormattingPanelHeaders = () => (
  <Fragment>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">Devices</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Devices content...</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">Networks</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Networks content...</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">Storage</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Storage content...</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
);

export default FormattingPanelHeaders;