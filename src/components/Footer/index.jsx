import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo';


const Footer = () => {
    return (
        <footer>
            <div>
                <Logo/>
                <p></p>
                <p>Мой блог</p>
            </div>
            <ul>
                <Link to="/posts">Каталог постов</Link>
                <p>&copy;2022</p>
            </ul>
            <div>
                <h4>Мы на связи</h4>
                <p>8 800 555 35 35</p>
                <p>sber.blog@yandex.ru</p>
            </div>
        </footer>
    )
}

export default Footer;