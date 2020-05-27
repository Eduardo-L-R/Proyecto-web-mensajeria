import React from 'react'
import { Drawer, makeStyles, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchBar from './SearchBar'
import UserList from './UserList'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawerWidth: {
    width: '34%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    color: '#616161',
    backgroundColor: "#eeeeee"
  },
  backButton: {
    marginLeft: '8px',
    marginRight: '8px'
  }
}))

function NewConversation(props) {

  const classes = useStyles();
  return (
    <Drawer
      classes={{
        paper: classes.drawerWidth
      }}
      variant='temporary'
      open={props.open}
      onClose={
        () => props.toggle(false)
        // props.toggle ? props.toggle : null
      }
    >
      <div className={classes.toolbar}>
        <div className={classes.header}>
          <IconButton 
            className={classes.backButton}
            onClick={() => props.toggle(false)}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Chats disponibles</Typography>     
        </div>
      </div>
      <SearchBar />
      <UserList />
    </Drawer>
  )
}

export default NewConversation
