import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../Api";
import { UserCtx } from "../context/UserContext";

export default () => {
    const navigation = useNavigate();
    const {setToken, setUser} = useContext(UserCtx);
    const st = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const logout = (e) => {
        setToken("");
        setUser("");
        navigation("/");
    }

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        api.meProfile().then(data => {
            setName(data.name);
            setAbout(data.about);
        })
    }, []);

    function submitForm(event) {
        event.preventDefault();
        api.changeUserProfile(name, about).then(data => {
            navigation("/profile");
            document.location.reload();
        });
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
                    <input type="text" value={ name } placeholder="Name" name="name" required onInput={ editUser }/>
                    <input type="text" value={ about } placeholder="About" name="about" required onInput={ editAbout }/>
                    <button type="submit">Изменить данные пользователя</button>
                </form>
            </div>
            <span className="logout" onClick={ logout }>Выйти</span>
        </div>
    )
}