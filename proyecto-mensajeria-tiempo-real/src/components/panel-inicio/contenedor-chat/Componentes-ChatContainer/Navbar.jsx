import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  avatar: {marginRight: theme.spacing(2)},
  grow: {flexGrow: 1},
  icon: {color: "#616161"},
  bar: {
    backgroundColor: "#eeeeee",
  }
}))

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar elevation={0} position='relative' className={classes.bar}>
        <Toolbar >
            <Avatar className={classes.avatar}>B</Avatar>
            <Typography variant="h6" className={classes.icon}>John Doe</Typography>
            <div className={classes.grow} />
            <IconButton aria-label="options">              
              <MoreVertIcon className={classes.icon}/>
            </IconButton>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset} />   */}
    </>
  )
}

export default Navbar