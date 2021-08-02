import React, { Fragment, Children, useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing(2)
  }
});

function TabContainer({ children }) {
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
  };

  return (
    <Fragment>
      <Tabs value={value} onChange={onChange}>
        {Children.map(children, child => (
          <Tab label={child.props.label} />
        ))}
      </Tabs>
      {Children.map(children, (child, index) =>
        index === value ? child : null
      )}
    </Fragment>
  );
}
const TabContent = withStyles(styles)(({ classes, children }) => (
  <Typography component="div" className={classes.tabContent}>
    {children}
  </Typography>
));
const AbstractingTabContent = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <TabContainer>
      <TabContent label="Item One">Item One Content</TabContent>
      <TabContent label="Item Two">Item Two Content</TabContent>
      <TabContent label="Item Three">Item 3 Content</TabContent>
    </TabContainer>
  </div>
));
export default AbstractingTabContent;