import React from 'react';
import Navbar from './Componentes-ChatContainer/Navbar';
import MessageList from './Componentes-ChatContainer/MessageList';
import { makeStyles } from '@material-ui/core/styles'
import MessageEditor from './Componentes-ChatContainer/MessageEditor';

const useStyles = makeStyles({
  container: {
    flex: 2,
    height: "100vh",
    backgroundColor: "#fafafa",
    display: "flex",
    flexFlow: "column nowrap"
  }
})

function ChatContainer(){
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <Navbar />
      <MessageList />
      <MessageEditor />
    </div>
 )
};

export default ChatContainer;