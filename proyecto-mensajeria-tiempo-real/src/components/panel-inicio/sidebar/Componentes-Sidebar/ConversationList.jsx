import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  avatar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2) 
  },
  time: {
    color: "#9e9e9e",
    marginRight: theme.spacing(2)
  }
}))

function ConversationList() {
  const classes = useStyles();
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time}>12:00</Typography>
        </ListItem>
      </List>
      <Divider />
    </>
  )
}

export default ConversationList
