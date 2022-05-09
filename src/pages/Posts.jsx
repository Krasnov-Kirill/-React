import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { UserCtx } from "../context/UserContext";
import {Routes, Route, Link} from "react-router-dom";
import api from "../Api";
import Footer from "../components/Footer";
import Post from "../components/Post";
import { usePagination } from "../hooks";

const Posts = ({updFav}) => {
    const [posts, updatePosts] = useState([]);
    const {text, search} = useContext(ProdCtx)
    // const { setFavorites } = useContext(FavCtx);
    const _data = usePagination(search(posts, text), 9);
    const [page, setPage] = useState(1);
    

    function setPagination(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(<div 
                className={(i+1) === page ? "active" : ""} 
                key={i} 
                onClick={() => {setPage(i+1); _data.jump(i+1)}}
                >{i+1}</div>)
        }
        return arr;
    }
    // useEffect(() => {
    //     if (!posts.length) {
    //         api.getPosts().then(data => {
    //             console.log(data);
    //             updatePosts(data.posts);
    //         });
    //     }
    
    // }, []);
    useEffect(() => {
        // let token = localStorage.getItem("token");
        // if (token) {
        //     api.token = token;
        // }
        let user = localStorage.getItem("user");
        if (!posts.length) {
            api.getPosts().then(data => {
                console.log(data);
                updatePosts(data.posts);
                // updFav(data.products.filter(el => el.likes.includes(user)));
                // updFav(data.filter(el => el.likes.includes(user)));
                // updateProducts(data.products.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
                // updateProducts(data.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
            });
        }
    }, []);
     
return (
        <div className='post-container'>
            <h1>Каталог</h1>
            {text && <div className='search__item'>По запросу <strong>{text}</strong> найдено {search(posts, text).length} товаров</div>}
            <div className="page-container" >{setPagination(_data.maxPage)}</div>
            <h2>Страница {page}</h2>
            <div className="cards-container">
                {_data.current().map(el => (
                    // <Link to={"/post/" + el._id} key={el._id}>
                        // <Post key={el._id} {...el} />
                        <Post key={el.id} {...el} />
                    // </Link>
                ))}
            </div>
        </div>     
    )
}

export default Posts;