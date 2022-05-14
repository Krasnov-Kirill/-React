import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../Api";


export default () => {
    let {id} = useParams();
    const navigation = useNavigate();
    const st = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");

    useEffect(()=> {
        api.getSinglePost(id).then(data => {
           setTitle(data.title);
           setText(data.text);
           setImage(data.image);
        })
    }, []);
    

    function submitForm(event) {
        event.preventDefault();
        api.editPost(title, text, image, id).then(data => {
            navigation("/");
            document.location.reload();
        });
    }

    function editTitle(event) {
        setTitle(event.target.value);
    }
    
    function editText(event) {
        setText(event.target.value);
    }

    function editImage(event) {
        setImage(event.target.value);
    }

    return (
        <div>
            <h3 className="addpostP">Изменить пост</h3>
            <div className="addpostForm">
                
                <form className="auth" onSubmit={ submitForm }>
                    Заголовок<input type="text" value={ title } placeholder="Title" name="title" required onInput={ editTitle } />
                    Текст поста<input type="text" value={ text } placeholder="Text" name="text" required onInput={ editText } />
                    url картинки<input type="text" value={ image } placeholder="Img" name="image" required onInput={ editImage } />
                    <button className="submit-button" type="submit">Отправить пост</button>
                </form>
            </div>
        </div>
    )
}