import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { UserCtx } from "../context/UserContext";
import api from "../Api";

const Post = () => {
    let {id} = useParams();
    const [name, setName] = useState("Post");
    const [posts, setProduct] = useState({});

    useEffect(()=> {
        api.getSingleProduct(id).then(data => {
            console.log(data);
            setProduct(data);
        })
    }, []);

    return (
        <>
            <h1>{posts.title || "Post"}</h1>
            <p>{id}</p>
        </>
    )
}

export default Post;