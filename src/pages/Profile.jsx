import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../Api";
import { UserCtx } from "../context/UserContext";

export default () => {
    const navigate = useNavigate();
    const {setToken, setUser} = useContext(UserCtx);
    const st = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const logout = (e) => {
        setToken("");
        setUser("");
        navigate("/");
    }

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");

    function submitForm(event) {
        event.preventDefault();
        api.changeUserProfile(name, about);
    }

    function editUser(event) {
        setName(event.target.value);
    }
    
    function editAbout(event) {
        setAbout(event.target.value);
    }


    return (
        <div style={st}>
            <h1>Личный кабинет</h1>
            <div>
                 <form className="auth" onSubmit={ submitForm }>
                    <input type="text" placeholder="Name" name="name" required onInput={ editUser }/>
                    <input type="text" placeholder="About" name="about" required onInput={ editAbout }/>
                    <button type="submit">Изменить данные пользователя</button>
                </form>
            </div>
            <span className="logout" onClick={logout}>Выйти</span>
        </div>
    )
}