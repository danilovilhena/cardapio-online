const getItems = () => {
    let headers = new Headers();
    headers.append("X-API-Key", process.env.REACT_APP_DETA_KEY!);
    headers.append("Content-Type", "application/json");
    
    let options: RequestInit = {
        method: 'POST',
        headers: headers,
        redirect: 'follow'
    };
    
    return fetch(`https://database.deta.sh/v1/${process.env.REACT_APP_DETA_ID}/simone/query`, options)
        .then(response => response.json())
        .then(result => result.items)
}

// eslint-disable-next-line
export default {
    getItems
}