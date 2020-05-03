import React from 'react'
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  bar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#eeeeee"
  },
  input: {
    backgroundColor: "#ffffff",
    border: '1px solid #ccc',
    borderRadius: '4px',
    flex: 1,
    padding: "8px 16px"
  },
  icon: {
    margin: "4px"
  }
})

function MessageEditor() {
  const classes = useStyles();
  return (
    <div>
      <AppBar 
        position="relative" 
        elevation={0}
        className={classes.bar}
      >
        <Toolbar>
          <IconButton className={classes.icon}>            
            <EmojiIcon />
          </IconButton>
          <InputBase className={classes.input} multiline/>
          <IconButton className={classes.icon}>            
            <MicIcon />
          </IconButton>
          <IconButton className={classes.icon}>            
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MessageEditor
