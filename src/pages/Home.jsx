import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Post from "../components/Post";
import { ProdCtx } from '../context/ProductContext';
import { usePagination } from "../hooks";
import iconPost from "../components/Logo/img/addpost.svg";


const Home = () => {
    const {posts} = useContext(ProdCtx);
    const _data = usePagination(posts, 10);
  
    return (
        <>
            <div className="home">
                <h1>Все посты учащихся<br/></h1>
                <p>Интересные и познавательные посты!</p>
            </div>
            <div>
                <nav>
                    <Link to="/addpost">
                        <img src={iconPost} alt="Создать пост"/>
                    </Link>
                </nav>
            </div> 
            <div className="posts-container">
                {_data.current().map(el => (
                    <Post key={el._id} {...el} />
                ))}
            </div>
            <div className="page-container">
                    {_data.setPagination()}
            </div>
            
        </>
    );
}

export default Home;
