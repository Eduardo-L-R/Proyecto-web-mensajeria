import React from 'react'
import { 
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Avatar
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  btn: {
    padding: theme.spacing(1.5)
  },
  text: {
    textAlign: "left",
  },
  item: {
    margin: 0,
    padding: 0
  },
  container: {
    overflow: "auto",
    flex: 1,
    padding: 0,
    margin: 0
  }
}))

function UserList() {
  const classes = useStyles();
  return (
    <List className={classes.container}>
      <ListItem divider className={classes.item}> 
        <Button
          className={classes.btn}
          fullWidth
        >
          <ListItemAvatar>
            <Avatar>J</Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary= 'John Doe'
            className={classes.text}
          />
        </Button>
      </ListItem>
    </List>
  )
}

export default UserList
