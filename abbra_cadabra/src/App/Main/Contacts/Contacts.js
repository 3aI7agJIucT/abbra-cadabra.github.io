import React from 'react'

import '../Contacts/Contacts.css'

const Contacts = () => {
    return (
        <div className="contacts">
            <h1 id="contacts">Контактная информация и график работы:</h1>
            <div className="cont-info">
                <div className="map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1296657677003!2d30.513589315621!3d50.438685396093746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefea87044b9%3A0x6ede9ef8b749dde5!2sApple%20Genius!5e0!3m2!1sru!2sua!4v1582569082524!5m2!1sru!2sua" width="640" height="480" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                </div>
                <div className="info">
                    <h2><span className="bold">График работы:</span></h2>
                    <h3><img src="images/clock3.png" alt="clock_work" id="clock1"/>Пн-Пт: <span className="bold">10:00-20:00</span></h3>
                    <h3><img src="images/clock4.png" alt="clock_hol" id="clock2"/>Сб-Вс: <span className="bold">11:00-19:00</span></h3>
                    <h2><span className="bold">Адрес:</span></h2>
                    <h3><img src="images/geo.png" alt="map_pointer" id="map_pointer"/>г.Киев, <img src="images/metro1.png" alt="metro" id="metro"/>Площадь Льва Толстого,</h3><h3> ул. Большая Васильковская 28</h3>
                    <h2><span className="bold">На автомобиле:</span>
                        <h3><img src="images/car.png" alt=""/>80м от площади Льва Толстого по ул.Большой Васильковской в сторону ул.Саксаганского, цокольное помещение, вход находится под «Make Up Forever». Парковка стихийная вдоль улицы или на тротуаре</h3>
                    </h2>
                    <h2><span className="bold">Пешком:</span>
                        <h3><img src="images/walk.png" alt=""/>Выход из ст. метро «Площадь Льва Толстого» на ул.Большая Васильковская, 50м вниз в сторону ул.Саксаганского, цокольное помещение, вход находится под «Make Up Forever».</h3>
                    </h2>
                    <h2><span className="bold">E-mail:</span></h2>
                    <h3><img src="images/email.png" alt="email" id="email"/><a href="mailto:abbra-cadabra@gmail.com">abbra-cadabra@gmail.com</a></h3>
                    <h2><span className="bold">Телефоны:</span></h2>
                    <h3><img src="images/lifecell_logo.png" alt="lifecell"/>+38(063)149-26-27</h3>
                    <h3><img src="images/vodafone_logo.png" alt="vodafone"/>+38(066)187-80-30</h3>
                </div>
            </div>
        </div>
    )
}

export default Contacts