const responseHandler = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getProductList() {
        return fetch(`${this.path}/products`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSingleProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getPosts() {
        return fetch(`${this.path}/posts/`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSinglePost(id) {
        return fetch(`${this.path}/posts/${id}`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    setPostLike(id, like) {
        return fetch(`${this.path}/posts/likes/${id}`, {
            method: like ? "DELETE" : "PUT",
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    addPost(title, text, image) {
        return fetch(`${this.path}/posts/`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title, // тип данных строка, обязательное
                "text": text, // тип данных строка, обязательное
                "image": image, // тип данных строка
                // "tags": tags //тип данных массив строк
            })
        }).then(responseHandler);
    }
    editPost(title, text, image, id) {
        return fetch(`${this.path}/posts/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title, // тип данных строка, обязательное
                "text": text, // тип данных строка, обязательное
                "image": image, // тип данных строка
                // "tags": tags //тип данных массив строк
            })
        }).then(responseHandler);
    }
    deletePost(id) {
        return fetch(`${this.path}/posts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this.token}`,
            },
        }).then(responseHandler);
    }
    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    meProfile() {
        return fetch(`${this.path}/users/me`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${this.token}`
            },
        }).then(responseHandler);
    }
    changeUserProfile(name, about) {
        return fetch(`${this.path}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(responseHandler);
    }
}

const config = {
    path: "https://api.react-learning.ru",
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac"
    token: localStorage.getItem("token")
}

const api = new Api(config);

export default api;