import React from 'react'
import {Link} from 'react-router-dom'

import './RepairApple.css'

const RepairAppleDefault = () => {
    return (
            <div className="repair_apple">
                <div className="repair_iphone">
                    <Link to="/repair_apple/repair_apple_iphone">
                        <div className="repair_iphone_img"></div>
                        iPhone
                    </Link>
                </div>
                <div className="repair_ipad">
                    <Link to="/repair_apple/repair_apple_ipad">
                        <div className="repair_ipad_img"></div>
                        iPad
                    </Link>
                </div>
                <div className="repair_watch">
                    <Link to="/repair_apple/repair_apple_watch">
                        <div className="repair_watch_img"></div>
                        Watch
                    </Link>
                </div>
                <div className="repair_macbook">
                    <Link to="/repair_apple/repair_apple_macbook">
                        <div className="repair_macbook_img"></div>
                        MacBook
                    </Link>
                </div>
            </div>
    )
}

export default RepairAppleDefault