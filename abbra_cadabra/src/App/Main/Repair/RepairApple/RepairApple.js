import React from 'react'

import {Route} from 'react-router-dom'

import '../RepairApple/RepairApple.css'

import RepairAppleDefault from './RepairAppleDafault'
import iPhone from './iPhone/iPhone'
import iPad from './iPad/iPad'
import Watch from './Watch/Watch'
import MacBook from './MacBook/MacBook'

const RepairApple = () => {
    return (
        <div>
            <Route exact path="/repair_apple" component={RepairAppleDefault}/>
            <Route path="/repair_apple/repair_apple_iphone" component={iPhone}/>
            <Route path="/repair_apple/repair_apple_ipad" component={iPad}/>
            <Route path="/repair_apple/repair_apple_watch" component={Watch}/>
            <Route path="/repair_apple/repair_apple_macbook" component={MacBook}/>
        </div>
    )
}

export default RepairApple