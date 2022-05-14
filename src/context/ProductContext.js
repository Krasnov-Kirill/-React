import { createContext } from "react";

export const ProdCtx = createContext({
    posts: [],
    image: "",
    text: "",
    setText: () => {},
    setPosts: () => {},
    search: () => {}
});