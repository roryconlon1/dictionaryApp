const url = "http://localhost:9000/api/definition/";

export const getFavourites = () => {
    return fetch(url)
    .then (res => res.json())
}

export const postFavourite = (payload) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}