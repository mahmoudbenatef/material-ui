import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function ListIcons() {
  const [items, setItems] = useState([
    { name: 'First User' },
    { name: 'Second User' },
    { name: 'Third User' }
  ]);

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={item.name} secondary={"hahahahah"} />
        </ListItem>
      ))}
    </List>
  );
}
