import React from 'react'
import ChatContainer from './contenedor-chat/ChatContainer'
import SideBar from './sidebar/SideBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexFlow: "row wrap"
  }
})

function PanelDeInicio() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <SideBar />
      <ChatContainer />
    </div>
  )
}

export default PanelDeInicio
