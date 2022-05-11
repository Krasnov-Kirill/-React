import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import api from "../Api";
import pic from "../components/Logo";

const Post = () => {
    const [title, setTitle] = useState("Post");
    const [post, setPost] = useState({});
    let {id} = useParams();

    useEffect(()=> {
        api.getSinglePost(id).then(data => {
            console.log(data);
            setPost(data);
        })
    }, []);
  
    return (
        <>
            <div className="post_container">
                <button className="button">
                    <Link to="/">Назад</Link>
                </button>
                <div className="postid">
                    <div className="post_img">
                        <img src={ "author" in post ? post.image : "" } alt="img" />
                    </div>
                    <div className="info_post">
                        <div>{ "author" in post ? post.author.name : "" }</div>
                        <div>{ "author" in post ? post.author.about : "" }</div>
                        <div className="post_bodi">
                            <h3>{ "author" in post ? post.title : "" }</h3>
                            <p>{ "author" in post ? post.text : "" }</p>
                            <p>{ "author" in post ? post.tags : "" }</p>
                        </div>
                        {/* <div>{ "author" in post ? post.tags : "" }</div>
                        <div>{ "author" in post ? post.title : "" }</div>
                        <div>{ "author" in post ? post.text : "" }</div> */}
                        {/* <h1>{post.title || "Post"}</h1> */}
                        <p>{id}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Post;