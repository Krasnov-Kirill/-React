import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import api from "../Api";

const Post = () => {
    let {id} = useParams();
    const [post, setPost] = useState({});
    const navigation = useNavigate();

    useEffect(()=> {
        api.getSinglePost(id).then(data => {
            console.log(data);
            setPost(data);
        })
    }, []);
  
    function delPost() {
        api.deletePost(id).then(data => {
            navigation("/");
            document.location.reload();
        })
    }

    return (
        <>
            <div className="post_container">
                <div className="button">
                    <button>
                        <Link to="/">Назад</Link>
                    </button>
                    <button>
                        <Link to={`/changepost/${id}`}>Изменить пост</Link>
                    </button>
                    <button onClick={delPost}>Удалить пост</button>
                </div>
                <div className="postid">
                    <div className="post_row">
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
                                <p>{id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Post;