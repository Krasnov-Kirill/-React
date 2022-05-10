import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import pic from "../components/Logo";

const Post = () => {

    useEffect(()=> {
        api.getSinglePost(id).then(data => {
            console.log(data);
            setPost(data);
        })
    }, []);
  

    let {id} = useParams();
    const [title, setTitle] = useState("Post");
    const [post, setPost] = useState({});
    
    let st = {
        backgroundImage: `url(${post.image || pic})`,
        
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        marginBottom: "20px"
        };
    
    console.log(post.image);
  
    return (
        <>
            <div className="" style={st}></div>
            <div>{ "author" in post ? post.author.about : "" }</div>
            <div></div>
            <h1>{post.title || "Post"}</h1>
            <p>{id}</p>
        </>
    )
}

export default Post;