import React from 'react'

import './repairapple.css'

const Repairapple = () => {
    return (
        <div class="repair_apple">
                <div class="repair_iphone">
                    <a href="repair-apple-iphone.html">
                        <div class="repair_iphone_img"></div>
                        iPhone
                    </a>
                </div>
                <div class="repair_ipad">
                    <a href="#">
                        <div class="repair_ipad_img"></div>
                        iPad
                    </a>
                </div>
                <div class="repair_watch">
                    <a href="#">
                        <div class="repair_watch_img"></div>
                        Watch
                    </a>
                </div>
                <div class="repair_macbook">
                    <a href="#">
                        <div class="repair_macbook_img"></div>
                        MacBook
                    </a>
                </div>
        </div>
    )
}

export  default Repairapple