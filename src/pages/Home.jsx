import React, {useContext} from "react";
import Post from "../components/Post";
import { ProdCtx } from '../context/ProductContext';
import { usePagination } from "../hooks";


const Home = () => {
    const {posts} = useContext(ProdCtx);
    const _data = usePagination(posts, 9);
  
    return (
        <div className="main">
            <h1>Все посты учащихся<br/></h1>
            <p>Интересные и познавательные посты!</p>
            <div className="cards-container">
                {_data.current().map(el => (
                    <Post key={el._id} {...el} />
                ))}
            </div>
            <div className="page-container">
                {_data.setPagination()}
            </div>
        </div>
    );
}

export default Home;
