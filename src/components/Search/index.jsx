import React, {useState, useContext} from "react";
import "./index.css";
// import close from "./img/close.svg";
// import icon from "./img/search.svg";


const Search = (props) => {
    const [val, updateVal] = useState(props.text);
    const changeText = (e) => {
        updateVal(e.target.value);
        props.foo(e.target.value);
    }
    return (
        <form>
            <input type="search" value={val} onInput={changeText} placeholder="Поиск постов"/>
            <button className="search-btn" type="button">
                
            </button>
        </form>
    )
}

export default Search;