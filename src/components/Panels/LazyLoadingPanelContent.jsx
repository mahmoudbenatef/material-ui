import React, { useState, Fragment } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    panelDetails: { flexDirection: 'column' }
  }));

  const MaybeProgress = ({ loading }) =>
  loading ? <LinearProgress /> : null;

 
const fetchPanelContent = index =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          [
            'First panel content...',
            'Second panel content...',
            'Third panel content...',
            'Fourth panel content...'
          ][index]
        ),
      1000
    )
  );

export default function LazyLoadingPanelContent() {
  const [panels, setPanels] = useState([
    { title: 'First Panel Title' },
    { title: 'Second Panel Title' },
    { title: 'Third Panel Title' },
    { title: 'Fourth Panel Title' }
  ]);

  const onChange = index => e => {
    if (!panels[index].content) {
      fetchPanelContent(index).then(content => {
        const newPanels = [...panels];
        newPanels[index] = { ...newPanels[index], content };
        setPanels(newPanels);
      });
    }
  };
  const classes= useStyles();

  return (
    <Fragment>
      {panels.map((panel, index) => (
        <ExpansionPanel key={index} onChange={onChange(index)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{panel.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panelDetails}>
          <MaybeProgress loading={!panel.content} />
            <Typography>{panel.content}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Fragment>
  );
}