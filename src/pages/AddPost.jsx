import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
// import api from "../../Api";
// import { UserCtx } from "../../context/UserContext";

export default () => {

    const navigation = useNavigate();
    
    
    
    return (
        <div>
            <form className="auth" onSubmit="">
                <input type="text" placeholder="Title" name="title" required onInput="title"/>
                <input type="text" placeholder="Text" name="text" required onInput="text"/>
                <input type="text" placeholder="Img" name="image" required onInput="image"/>
                <input type="text" placeholder="tags" name="tags" required onInput="tags"/>
                <button type="submit">Отправить пост</button>
            </form>
        </div>
    )
}