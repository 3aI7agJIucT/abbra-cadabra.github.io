import React from 'react'

import './MacBook.css'

const MacBook = () => {
    return (
        <main>
            <h1>Ремонт MacBook</h1>
            <h2>для более подробной информации, выберите модель:</h2>
            <div className="repair_apple_macbook">
                <div className="macbook">
                    <a href="macbook.html">
                        <div className="macbook_img"></div>
                        MacBook Air A1466
                    </a>
                </div>
            </div>
        </main>
    )
}

export default MacBook