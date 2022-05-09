import React, {useEffect, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import api from "./Api";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Post from "./components/Post";

import { BannerCtx, BannerValue } from './context/BannerContext';
import { UserCtx, UserValue } from './context/UserContext';
// import { FavCtx } from './context/FavoritesContext';
import { ProdCtx } from './context/ProductContext';

// const dataPost = data.map(title => <Post title={title}/>);
const App = (serchText) => {
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
                let arr = ans.reverse()
                console.log(arr);
                getPosts(arr);
            })
        }
    }, []);
    
    const [searchText, changeText] = useState("");
    const [searchCnt, setCnt] = useState(0);
    const [user, setUser] = useState(localStorage.getItem("user") || "");
   

    const searcHandler = () => {
        console.log("Hello")
        return posts.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()));
    }  


        
    return (
        <BannerCtx.Provider value={BannerValue}>
            {/* <FavCtx.Provider value={{favorites: favorites, setFavorites: setFavorites}}> */}
                {/* <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}> */}
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
                        <div className="container">
                            <Header searchText={searchText} changeText={changeText}/>
                            {/* <Main updFav={updFav}/> */}
                            <Main />
                            <div className="wrap">
                                {posts.map(el => <Post text={el.text} key={el._id} image={el.image} title={el.title} />)}
                            </div>
                             <Footer/>
                        </div>
                    </ProdCtx.Provider>
                {/* </UserCtx.Provider> */}
            {/* </FavCtx.Provider> */}
        </BannerCtx.Provider>                   
            // <div className="container">
            //     <Header searchText={searchText} changeText={changeText}/>
            //     <Main searchText={searchText}/>

            //     {posts.map(el => <Post text={el.text} key={el._id} image={el.image} title={el.title} />)}
           
            //     <Footer/>
            // </div>
    )     
}

export default App;