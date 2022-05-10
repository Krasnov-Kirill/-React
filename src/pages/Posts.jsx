import React, { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import api from "../Api";

import { usePagination } from "../hooks";
import { ProdCtx } from "../context/ProductContext";
import { FavCtx } from "../context/FavoritesContext";

const Posts = ({updFav}) => {
     
    const {posts, text, search} = useContext(ProdCtx);
    const { setFavorites } = useContext(FavCtx);
    const _data = usePagination(search(posts, text),9);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            api.token = token;
        }
        let user = localStorage.getItem("user");
            api.getPosts().then(data => {
                updatePostsAll(data.posts);
                updFav(data.posts.filter(el => el.likes.includes(user)));
                updatePostsFilter(data.posts.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
            });
    }, []);
     
return (
        <div className='post-container'>
            <h1>Посты</h1>
            {text && <div className='search__item'>По запросу <strong>{text}</strong> найдено {search(posts, text).length} постов</div>}
            <h2>Страница {currentPage}</h2>
            <div className="page-container" >
                    {_data.setPagination()}
            </div>
            <div className="cards-container">
                {_data.current().map(el => (
             
                        <Post key={el._id} {...el} />
                
                ))}
            </div>
        </div>     
    )
}

export default Posts;