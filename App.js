import React from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
	return (
		<div>
			<Header/>
		</div>
	)
}

export default App

$('.slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false
  });