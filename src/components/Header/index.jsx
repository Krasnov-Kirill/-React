import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Search from '../Search';
import Logo from "../Logo";



const Header = ({searchText, changeText}) => {
    const [srch, setSrch] = useState("");
    // const { user } = useContext(UserCtx);
    // const {search, text} = useContext(ProdCtx);
    return (
        <>
            <header>
                <Logo/>
                <Search text={searchText} foo={changeText}/>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/posts">Каталог постов</Link>
                    {/* <Link to="">Личный кабинет</Link>
                    <Link to="">Лайки</Link> */}
                </nav>
            </header>
            {/* <div 
            style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {/*результат поиска */}
            {/* </div> */}
        </>
    )
}

export default Header;