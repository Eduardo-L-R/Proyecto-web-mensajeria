import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  grow: {flexGrow: 1},
  icon: {color: "#fff"}
}))

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar >
            <Avatar>A</Avatar>
            <div className={classes.grow} />
            <IconButton aria-label="new chat">  
              <ChatIcon className={classes.icon}/>
            </IconButton>
            <IconButton aria-label="options">              
              <MoreVertIcon className={classes.icon}/>
            </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />  
    </>
  )
}

export default Navbar
