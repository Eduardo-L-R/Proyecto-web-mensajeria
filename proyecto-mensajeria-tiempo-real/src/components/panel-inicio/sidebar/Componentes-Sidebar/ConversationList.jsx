import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
    marginRight: theme.spacing(2)
  },
  container: {
    overflow: "auto",
    flex: 1
  }
}))

function ConversationList() {
  const classes = useStyles();
  return (
    <>
      <List className={classes.container}>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
        <ListItem divider>
          <ListItemAvatar className={classes.avatar}>
            <Avatar>B</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary="John Doe"
            secondary="blah blah blah"
          />
          <Typography className={classes.time} color="textSecondary">12:00</Typography>
        </ListItem>
      </List>
    </>
  )
}

export default ConversationList
