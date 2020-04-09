import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.css'

const Footer = () => {
	return ( 
        <footer>
        <div className="footer_wrap">
            <div className="footer_logo">
                <Link to="/"><img src="images/apple_jobs_genius.png" alt="" id="footer_logo"/>
                </Link>
                <a href="https://www.facebook.com/3aI7agJIucT" target="_blank">
                    <img src="images/facebook_logo.png" alt="facebook"/>FaceBook
                </a>
                <a href="https://instagram.com/3ai7agjiuct?igshid=l0a75s0nfc8y" target="_blank">
                    <img src="images/instagram_logo.png" alt="instagram"/>Instagram
                </a>
            </div>
            <div className="footer_menu">
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="repair-apple.html">Ремонт</a></li>
                    <li><a href="#">Устройства</a></li>
                    <li><a href="#">Аксессуары</a></li>
                    <li><a href="news.html">Новости и акции</a></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </div>
            <div className="footer_contacts">
                <div className="connect">
                    <h3><img src="images/lifecell_logo.png" alt="lifecell"/>+38(063)149-26-27</h3>
                    <h3><img src="images/vodafone_logo.png" alt="vodafone"/>+38(066)187-80-30</h3>
                    <h3>г.Киев, <img src="images/metro1.png" alt="metro" id="metro"/>Площадь Льва Толстого,</h3><h3> ул. Большая Васильковская 28</h3>
                    <h3><img src="images/email.png" alt="email" id="email"/><a href="mailto:abbra-cadabra@gmail.com">abbra-cadabra@gmail.com</a></h3>
                </div>
                <div className="worktime">
                    <h3><img src="images/clock3.png" alt="clock_work" id="clock1"/>Пн-Пт: <span className="bold">10:00-20:00</span></h3>
                    <h3><img src="images/clock4.png" alt="clock_hol" id="clock2"/>Сб-Вс: <span className="bold">11:00-19:00</span></h3>
                </div>
            </div>
        </div>
        <div className="copyright">Copyright © 2012—2020 Apple-Genius. Все права защищены.</div>
    </footer>
	)
}

export default Footer