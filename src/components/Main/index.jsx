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
import ChangePost from "../../pages/ChangePost";


const Main = ({updFav}) => {
    let st = {
        height: `${window.innerHeight - 299}px`,
    }

    return (
        <main style={st}>
           <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Posts updFav={updFav} />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="/changepost/:id" element={<ChangePost/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </main>
    )
}

export default Main;