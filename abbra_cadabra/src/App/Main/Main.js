import React from 'react'

import {Route} from 'react-router-dom'

import './Main.css'

import Ind from './Ind/Ind'
import RepairApple from './Repair/RepairApple/RepairApple'
import Contacts from './Contacts/Contacts'

const Main = () => {
	return (
        <div>
            <Route exact path="/" component={Ind}/>
            <Route path="/repair_apple" component={RepairApple}/>
            <Route path="/contacts" component={Contacts}/>
        </div>
	)
}

export default Main