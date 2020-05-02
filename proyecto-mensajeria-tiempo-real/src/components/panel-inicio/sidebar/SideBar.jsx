import React from 'react'
import Navbar from './Componentes-Sidebar/Navbar';
import SearchBar from './Componentes-Sidebar/SearchBar';
import ConversationList from './Componentes-Sidebar/ConversationList';

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
