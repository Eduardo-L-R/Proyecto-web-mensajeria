import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import ConversationList from './ConversationList'

function SideBar() {
  return (
    <div>
        <Navbar />
        <SearchBar />
        <ConversationList />
    </div>
  )
}

export default SideBar
