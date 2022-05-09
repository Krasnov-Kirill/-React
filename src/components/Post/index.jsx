import React from "react";
import "./index.css";
import pic from "../Logo";
import {useNavigate} from "react-router-dom";

const Post = (props) => {
    let st = {
        backgroundImage: `url(${props.image || pic})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        marginBottom: "20px"
    };
    const navigate = useNavigate();

    const replaceHandler = (e) => {
        navigate(`/post/${props._id}`);
    }
    return (
         <div className="post" onClick={replaceHandler}>
            <div className="post__img" style={st}></div>
            <div className="post__title">{props.title}</div>
            <div className="post__text">{props.text}</div>
        </div>
    )
}

export default Post;