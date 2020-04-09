import React from 'react'
import {Link} from 'react-router-dom'

import '../Header/Header.css'

const Header = () => {
	return ( 
        <header>
          <div className="head">
              <Link to="/"><img src="../images/apple_jobs_logo.png" alt="Logo"/></Link>
              <Link to="/">Apple-Genius</Link>
              <ul className="cont-phones">
                  <li><img src="../images/lifecell_logo.png" alt="lifecell"/>+38(063)149-26-27</li>
                  <li><img src="../images/vodafone_logo.png" alt="vodafone"/>+38(066)187-80-30</li>
              </ul>
              <ul className="address">
                  <li><Link to="/contacts">Kyiv, V.Vasylkivska str. 28</Link></li>
                  <li><a href="mailto:abbra-cadabra@gmail.com">abbra-cadabra@gmail.com</a></li>
              </ul>
          </div>
          <div className="menu">
              <ul className="main-menu">
                  <li><a href="#">О нас</a></li>
                  <li><span>Ремонт</span>
                      <ul className="sub-menu-repair">
                          <li><Link to="/repair_apple">Apple</Link>
                              <ul className="repair-apple">
                                  <li><Link to="/repair_apple/repair_apple_iphone">iPhone</Link></li>
                                  <li><Link to="/repair_apple/repair_apple_ipad">iPad</Link></li>
                                  <li><Link to="/repair_apple/repair_apple_watch">Watch</Link></li>
                                  <li><Link to="/repair_apple/repair_apple_macbook">MacBook</Link></li>
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
                              <Link to="/contacts">Карта/График
                              </Link>
                          </li>
                          <li>
                              <a href="https://www.facebook.com/3aI7agJIucT">FB
                                  <img src="../images/facebook_logo.png" alt="facebook"/>
                              </a>
                          </li>
                          <li>
                              <a href="https://instagram.com/3ai7agjiuct?igshid=l0a75s0nfc8y">Inst
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