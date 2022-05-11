import React, {useEffect, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import api from "./Api";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Post from "./components/Post";

import { BannerCtx, BannerValue } from './context/BannerContext';
import { UserCtx, UserValue } from './context/UserContext';
import { FavCtx } from './context/FavoritesContext';
import { ProdCtx } from './context/ProductContext';

const App = () => {
    const [posts, getPosts] = useState([]);
        
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            fetch("https://api.react-learning.ru/posts", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(ans => {
                let mas = ans.reverse()
                console.log(mas);
                getPosts(mas);
            })
        }
    }, []);
    
    const [searchText, changeText] = useState("");
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [favorites, updFav] = useState([]);
   
    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }

    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }

    const setFavorites = (obj) => {
        if (obj.likes.includes(user)) {
            if (!favorites.includes(el => el._id === obj._id)) {
                updFav([...favorites, obj]);
            }
        } else {
            updFav(favorites.filter(el => el._id !== obj._id));
        }
    }

    const searcHandler = () => {
        console.log("123")
        return posts.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase()));
    }  

        
    return (
            <FavCtx.Provider value={{favorites: favorites, setFavorites: setFavorites}}> 
                <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
                    <ProdCtx.Provider value={{
                        // author: author.name,
                        posts: posts,
                        // title: title,
                        text: searchText,
                        // setAuthor: setAuthor,
                        setText: changeText,
                        setPosts: getPosts,
                        // setTitle: setTitle,
                        search: searcHandler
                    }}>
                            <Header likes={favorites.length}/>
                            <Main updFav={updFav}/>
                            <Footer/>
                    </ProdCtx.Provider>
                </UserCtx.Provider>
            </FavCtx.Provider>
    )     
}

export default App;