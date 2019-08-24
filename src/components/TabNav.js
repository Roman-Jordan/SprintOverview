import React,{useState,useEffect} from 'react'
import { Tab } from 'semantic-ui-react'
import WelcomePage from './WelcomePage'
import {Link} from 'react-router-dom'
import CharList from './CharList'
const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane><CharList /></Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabNav = props => {
   
    
   
    
    let tab = props.location.pathname === '/CharList' ? 1: props.location.pathname === '/' ? 0:2;
    return (
        <Tab className='TabNav' panes={panes} defaultActiveIndex={tab} />
    )
}

export default TabNav;