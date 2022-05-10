import React, {useState, useContext} from "react";
import "./index.css";
import close from "./img/close.svg";
import icon from "./img/search.svg";

import { ProdCtx } from "../../context/ProductContext";

const Search = (props) => {
    const [val, updateVal] = useState(text);
    const {text, setText} = useContext(ProdCtx);
    const changeText = (e) => {
        updateVal(e.target.value);
        setText(e.target.value);
    }

    const clearText = function() {
        updateVal("");
        setText("");
    } 
    
    return (
        <form>
            <input type="text" value={val} onInput={changeText} placeholder="Поиск постов"/>
            <button className="search-btn" type="button">
                {val ? <img src={close} onClick={clearText}/> : <img src={icon}/>}
            </button>
        </form>
    )
}

export default Search;