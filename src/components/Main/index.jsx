import React from "react";
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Posts from '../../pages/Posts';
import Post from "../../pages/Post";
import Favorites from "../../pages/Favorites";
import Profile from "../../pages/Profile";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import AddPost from "../../pages/AddPost";


const Main = ({updFav}) => {
    return (
        <main>
           <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Posts updFav={updFav} />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </main>
    )
}

export default Main;