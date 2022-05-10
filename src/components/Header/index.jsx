import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Search from '../Search';
import Logo from "../Logo";

import icFav from "../../assets/like_stroke.svg";
import icProf from "../../assets/profile.svg";
import { UserCtx } from "../../context/UserContext";
import { ProdCtx } from '../../context/ProductContext';

const Header = ({likes}) => {
    const { user } = useContext(UserCtx);
    const {search, text} = useContext(ProdCtx);
    return (
        <>
            <header>
                <Logo />
                <Search />
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/posts">Каталог постов</Link>
                    <Link to={user ? "/profile" : "/signin"}>
                        <img src={icProf} alt="Войти в личный кабинет"/>
                    </Link>
                    <Link to="/favorites">Лайки<img src={icFav} alt="Избранные товары"/>
                        {likes}</Link>
                </nav>
            </header>
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {text && search().length && search().map((el, i) => <Link key={i} to={"/posts/" + el.id}>{el.title}</Link>)}
            </div>
        </>
    )
}

export default Header;