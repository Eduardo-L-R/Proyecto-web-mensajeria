import React from 'react'
import { InputBase, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  container: { 
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5"
  },
  searchBar: {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff'
  },
  searchInput: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2)
  },
  searchIcon: {
    color: "#000"
  }
}))

function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <InputBase
          className={ classes.searchInput }
          placeholder="Search"
        />
        <IconButton 
          className={classes.searchIcon}
        >
          <SearchIcon fontSize="small"/>
        </IconButton>
      </div>
    </div>  
  )
}

export default SearchBar
