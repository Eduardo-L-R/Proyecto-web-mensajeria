import React from 'react'
import Navbar from './Componentes-Sidebar/Navbar';
import SearchBar from './Componentes-Sidebar/SearchBar';
import ConversationList from './Componentes-Sidebar/ConversationList';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    flex: 1,
    borderRight: "1px solid #ccc",
    height: "100vh",
    display: "flex",
    flexFlow: "column nowrap"
  }
})

function SideBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <Navbar toggle={props.toggle}/>
        {/* <SearchBar /> */}
        <ConversationList />
    </div>
  )
}

export default SideBar
