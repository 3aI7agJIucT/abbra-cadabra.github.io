import React from 'react'

import './iPhone.css'

const iPhone = () => {
    return (
        <div className="iPhone">
            <h1>Ремонт iPhone</h1>
            <h2>для более подробной информации, выберите модель:</h2>
            <div className="repair_apple_iphone">
                <div className="iphone_11_pro_max">
                    <a href="iphone-11-pro-max.html">
                        <div className="iphone_11_pro_max_img"></div>
                        iPhone 11 Pro Max
                    </a>
                </div>
                <div className="iphone_11_pro">
                    <a href="iphone-11-pro.html">
                        <div className="iphone_11_pro_img"></div>
                        iPhone 11 Pro
                    </a>
                </div>                
                <div className="iphone_11">
                    <a href="iphone-11.html">
                        <div className="iphone_11_img"></div>
                        iPhone 11
                    </a>
                </div>                
                <div className="iphone_xs_max">
                    <a href="iphone-xs-max.html">
                        <div className="iphone_xs_max_img"></div>
                        iPhone XS Max
                    </a>
                </div>
                <div className="iphone_xs">
                    <a href="iphone-xs.html">
                        <div className="iphone_xs_img"></div>
                        iPhone XS
                    </a>
                </div>
                <div className="iphone_xr">
                    <a href="iphone-xr.html">
                        <div className="iphone_xr_img"></div>
                        iPhone XR
                    </a>
                </div>
                <div className="iphone_x">
                    <a href="iphone-x.html">
                        <div className="iphone_x_img"></div>
                        iPhone X
                    </a>
                </div>                
                <div className="iphone_8_plus">
                    <a href="iphone-8-plus.html">
                        <div className="iphone_8_plus_img"></div>
                        iPhone 8 Plus
                    </a>
                </div>                
                <div className="iphone_8">
                    <a href="iphone-8.html">
                        <div className="iphone_8_img"></div>
                        iPhone 8
                    </a>
                </div>
                <div className="iphone_7_plus">
                    <a href="iphone-7-plus.html">
                        <div className="iphone_7_plus_img"></div>
                        iPhone 7 Plus
                    </a>
                </div>
                <div className="iphone_7">
                    <a href="iphone-7.html">
                        <div className="iphone_7_img"></div>
                        iPhone 7
                    </a>
                </div>
                <div className="iphone_se">
                    <a href="iphone-se.html">
                        <div className="iphone_se_img"></div>
                        iPhone SE
                    </a>
                </div>
                <div className="iphone_6s_plus">
                    <a href="iphone-6s-plus.html">
                        <div className="iphone_6s_plus_img"></div>
                        iPhone 6s Plus
                    </a>
                </div>                
                <div className="iphone_6s">
                    <a href="iphone-6s.html">
                        <div className="iphone_6s_img"></div>
                        iPhone 6s
                    </a>
                </div>                
                <div className="iphone_6_plus">
                    <a href="iphone-6-plus.html">
                        <div className="iphone_6_plus_img"></div>
                        iPhone 6 Plus
                    </a>
                </div>
                <div className="iphone_6">
                    <a href="iphone-6.html">
                        <div className="iphone_6_img"></div>
                        iPhone 6
                    </a>
                </div>
                <div className="iphone_5c">
                    <a href="iphone-5c.html">
                        <div className="iphone_5c_img"></div>
                        iPhone 5c
                    </a>
                </div>                
                <div className="iphone_5s">
                    <a href="iphone-5s.html">
                        <div className="iphone_5s_img"></div>
                        iPhone 5s
                    </a>
                </div>                
                <div className="iphone_5">
                    <a href="iphone-5.html">
                        <div className="iphone_5_img"></div>
                        iPhone 5
                    </a>
                </div>
                <div className="iphone_4_4s">
                    <a href="iphone-4-4s.html">
                        <div className="iphone_4_4s_img"></div>
                        iPhone 4/iPhone 4s
                    </a>
                </div>
            </div>
            <div className="popular_breakdowns">
                <h1>Наиболее порулярные неисправности:</h1>
                <h3>со временем, даже самая качественная техника дает сбои и техника Apple не исключение. Вот перечень самых частых поломок и неисправностей:</h3>
                <div className="breakdowns_list">
                    <div className="power_breakdown">
                        <img src="images/brokes/power.png" alt=""/>Не включается
                        <div className="power_description">
                            Если не включается, то...Если не включается, то...
                        </div>
                    </div>
                    <div className="charge_breakdown">
                        <img src="images/brokes/battery1.png" alt=""/>Не заряжается
                        <div className="charge_description">
                            Если не заряжается, то, Если не заряжается, то...
                        </div>
                    </div>
                    <div className="battery_breakdown">
                        <img src="images/brokes/battery.png" alt=""/>Быстро разряжается
                        <div className="battery_description">
                            Если быстро разряжается, то...Если быстро разряжается, то...
                        </div>
                    </div>
                    <div className="water_breakdown">
                        <img src="images/brokes/water.png" alt=""/>Попала вода
                        <div className="water_description">
                            Если попала вода, то...Если попала вода, то...
                        </div>
                    </div>
                    <div className="glass_breakdown">
                        <img src="images/brokes/broken_glass.png" alt=""/>Разбилось стекло
                        <div className="glass_description">
                            Если разбилось стекло, то...Если разбилось стекло, то...
                        </div>
                    </div>
                    <div className="display_breakdown">
                        <img src="images/brokes/display.png" alt=""/>Не работает дисплей
                        <div className="display_description">
                            Если не работает дисплей, то...Если не работает дисплей, то...
                        </div>
                    </div>
                    <div className="touch_breakdown">
                        <img src="images/brokes/touch.png" alt=""/>Не работает touch screen
                        <div className="touch_description">
                            Если Не работает touch screen, то...Если Не работает touch screen, то...
                        </div>
                    </div>
                    <div className="body_breakdown">
                        <img src="images/brokes/body.png" alt=""/>Поцарапался корпус
                        <div className="body_description">
                            Если Поцарапался корпус, то...Если Поцарапался корпус, то...
                        </div>
                    </div>
                    <div className="speaker_breakdown">
                        <img src="images/brokes/speaker.png" alt=""/>Не работает звук
                        <div className="speaker_description">
                            Если Не работает звук, то...Если Не работает звук, то...
                        </div>
                    </div>
                    <div className="mic_breakdown">
                        <img src="images/brokes/mic.png" alt=""/>Не работает микрофон
                        <div className="mic_description">
                            Если Не работает микрофон, то...Если Не работает микрофон, то...
                        </div>
                    </div>
                    <div className="home_breakdown">
                        <img src="images/brokes/home.png" alt=""/>Не работают кнопки
                        <div className="home_description">
                            Если Не работают кнопки, то...Если Не работают кнопки, то...
                        </div>
                    </div>
                    <div className="camera_breakdown">
                        <img src="images/brokes/camera.png" alt=""/>Не рабоает камера
                        <div className="camera_description">
                            Если Не рабоает камера, то...Если Не рабоает камера, то...
                        </div>
                    </div>
                    <div className="cell_breakdown">
                        <img src="images/brokes/cell.png" alt=""/>Не ловит сеть
                        <div className="cell_description">
                            Если Не ловит сеть, то...Если Не ловит сеть, то...
                        </div>
                    </div>
                    <div className="wifi_breakdown">
                        <img src="images/brokes/wifi.png" alt=""/>Не работает Wi-Fi
                        <div className="wifi_description">
                            Если Не работает Wi-Fi, то...Если Не работает Wi-Fi, то...
                        </div>
                    </div>
                    <div className="itunes_breakdown">
                        <img src="images/brokes/itunes.png" alt=""/>Требует iTunes
                        <div className="itunes_description">
                            Если Требует iTunes, то...Если Требует iTunes, то...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default iPhone