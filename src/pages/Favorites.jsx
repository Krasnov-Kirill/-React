import React, {useContext} from "react";
import { FavCtx } from "../context/FavoritesContext";
import Post from "../components/Post"

export default () => {
    const {favorites} = useContext(FavCtx)
    return (
        <div>
            <h1>Избранное</h1>
            <div className="posts-container">
                {favorites.map(el => <Post key={el._id} {...el}/>)}
            </div>
        </div>
    )
}