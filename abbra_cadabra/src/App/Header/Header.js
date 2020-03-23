import React from 'react'

import '../Header/header.css'

const Header = () => {
	return ( 
        <header>
          <div className="head">
              <img src="../images/apple_jobs_logo.png" alt="Logo"/>
              <a href="index.html">Apple-Genius</a>
              <ul className="cont-phones">
                  <li><img src="../images/lifecell_logo.png" alt="lifecell"/>+38(063)149-26-27</li>
                  <li><img src="../images/vodafone_logo.png" alt="vodafone"/>+38(066)187-80-30</li>
              </ul>
              <ul className="address">
                  <li><a href="contacts.html">Kyiv, V.Vasylkivska str. 28</a></li>
                  <li><a href="mailto:abbra-cadabra@gmail.com">abbra-cadabra@gmail.com</a></li>
              </ul>
          </div>
          <div className="menu">
              <ul className="main-menu">
                  <li><a href="#">О нас</a></li>
                  <li><span>Ремонт</span>
                      <ul className="sub-menu-repair">
                          <li><a href="#">Apple</a>
                              <ul className="repair-apple">
                                  <li><a href="repair-apple-iphone.html">iPhone</a></li>
                                  <li><a href="#">iPad</a></li>
                                  <li><a href="#">Watch</a></li>
                                  <li><a href="#">MacBook</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Other</a></li>
                      </ul>
                  </li>
                  <li><a href="#">Устройства</a></li>
                  <li><a href="#">Аксессуары</a></li>
                  <li><a href="news.html">Новости и акции</a></li>
                  <li><span>Контакты</span>
                      <ul className="sub-menu-cont">
                          <li>
                              <a href="contacts.html">Карта/График
                              </a>
                          </li>
                          <li>
                              <a href="facebook.com">FB
                                  <img src="../images/facebook_logo.png" alt="facebook"/>
                              </a>
                          </li>
                          <li>
                              <a href="instagram.com">Inst
                                  <img src="../images/instagram_logo.png" alt="instagram"/>
                              </a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </header>
	)
}

export default Header