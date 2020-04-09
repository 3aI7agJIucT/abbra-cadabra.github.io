import React from 'react'

import './Watch.css'

const Watch = () => {
    return (
        <main>
            <h1>Ремонт Apple Watch</h1>
            <h2>для более подробной информации, выберите модель:</h2>
            <div className="repair_apple_watch">
                <div className="watch_5">
                    <a href="watch-5.html">
                        <div className="watch_5_img"></div>
                        Apple Watch series 5
                    </a>
                </div>
                <div className="watch_4">
                    <a href="watch-4.html">
                        <div className="watch_4_img"></div>
                        Apple Watch series 4
                    </a>
                </div>
                <div className="watch_3">
                    <a href="watch-3.html">
                        <div className="watch_3_img"></div>
                        Apple Watch series 3
                    </a>
                </div>
                <div className="watch_2">
                    <a href="watch-2.html">
                        <div className="watch_2_img"></div>
                        Apple Watch series 2
                    </a>
                </div>
                <div className="watch_1">
                    <a href="watch-1.html">
                        <div className="watch_1_img"></div>
                        Apple Watch series 1
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Watch