import { createContext } from "react";

export const UserCtx = createContext({
    token: "",
    user: "",
    setToken: () => {},
    setUser: () => {}
});

export const UserValue = {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user") || "",
    setUser: (id) => {
        console.log(this.user);
        localStorage.setItem("user", id);
    }
}