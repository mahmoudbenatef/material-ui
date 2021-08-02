import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { Fragment } from "react";

const ListSections = () => (
    <Fragment>
      <List>
        <ListItem>
          <ListItemText primary="First" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Second" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Third" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fourth" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Fifth" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sixth" />
        </ListItem>
      </List>
    </Fragment>
  );
  
  export default ListSections;
  