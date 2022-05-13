import React, {useState, useContext} from "react";
import "./index.css";
import pic from "../Logo";
import likeTrue from "../../assets/like_fill.svg";
import likeFalse from "../../assets/like_stroke.svg";
import {useNavigate} from "react-router-dom";
import api from "../../Api";
import { UserCtx } from "../../context/UserContext";
import { FavCtx } from "../../context/FavoritesContext";

const Post = (props) => {
   
    const navigate = useNavigate();
    const {setFavorites} = useContext(FavCtx);
    const {user} = useContext(UserCtx);
    const [like, setLike] = useState(props.likes.includes(user));

    const likeHandler = (e) => {
        e.stopPropagation();
        setLike(!like);
        // console.log(like);
        api.setPostLike(props._id, like)
            .then(ans => {
                console.log(ans);
                setFavorites(ans);
            });
        
    }

    const replaceHandler = (e) => {
        navigate(`/post/${props._id}`);
    }
    return (
         <div className="post" onClick={replaceHandler}>
            <div className="post__hendler">
                <div className="post__name">
                    {props.author.name}
                </div>
                <div className="post__about">
                    {props.author.about}
                </div>
            </div>
            <div className="post__img">
                <img src={props.image} alt="img" />
            </div>
            <div className="post__title">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            
            <img className="post__like" src={like ? likeTrue : likeFalse} onClick={likeHandler}/>
        </div>
    )
}

export default Post;