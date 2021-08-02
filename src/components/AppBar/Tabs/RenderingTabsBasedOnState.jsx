import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "grey"
  },
  tabContent: {
    padding: "2"
  }
}));

export default function RenderingTabsBasedOnState() {
  const classes = useStyles();
  const [tabs, setTabs] = useState([
    {
      active: true,
      label: 'Item One',
      content: 'Item One Content'
    },
    {
      active: false,
      label: 'Item Two',
      content: 'Item Two Content'
    },
    {
      active: false,
      label: 'Item Three',
      content: 'Item Three Content'
    }
  ]);

  const onChange = (e, value) => {
    setTabs(
      tabs
        // .map(tab => ({ ...tab, active: false }))
        .map((tab, index) => ({
          ...tab,
          active: index === value
        }))
    );
  };

  const active = tabs.findIndex(tab => tab.active);
  const content = tabs[active].content;

  return (
    <div className={classes.root}>
      <Tabs value={active} onChange={onChange}>
        {tabs
          .map(tab => (
            <Tab
              key={tab.label}
              label={tab.label}
            />
          ))}
      </Tabs>
      <Typography component="div" className={classes.tabContent}>
        {content}
      </Typography>
    </div>
  );
}
