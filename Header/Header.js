import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

const Header = () => {
	return ( 
		<div className="header">
			<div className="head">
				<img src="logo.svg" alt="Logo"/>>
				<a href="/">Abbra-Cadabra</a>
				<ul className="cont-phones">
					<li><img src="lifecell_logo.png" alt="lifecell"/>>+38(063)149-26-27</li>
					<li><img src="vodafone_logo.png" alt="vodafone"/>>+38(066)187-80-30</li>
				</ul>
				<ul className="address">
					<li>Kyiv, V.Vasylkivska str. 28</li>
					<li><a href="mailto:abbra-cadabra@gmail.com">abbra-cadabra@gmail.com</a></li>
				</ul>
			</div>
			<div className="menu">
				<ul className="main-menu">
					<li><a href="/">О нас</a></li>
					<li><a href="/">Ремонт</a>
						<ul className="sub-menu-repair">
							<li><a href="/">Apple</a>
								<ul className="repair-apple">
									<li>iPhone</li>
									<li>iPad</li>
									<li>iPod</li>
									<li>Watch</li>
									<li>MacBook</li>
								</ul>
							</li>
							<li><a href="/">Other</a></li>
						</ul>
					</li>
					<li><a href="/">Устройства</a></li>
					<li><a href="/">Аксессуары</a></li>
					<li><a href="/">Новости и акции</a></li>
					<li>Контакты
						<ul className="sub-menu-cont">
							<li><a href="contacts.html">Карта/График</a></li>
							<li>
								<a href="instagram.com">
									<img src="instagram_logo.png" alt="instagram"/>
								</a>
								<a href="facebook.com">
									<img src="facebook_logo.png" alt="facebook"/>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header