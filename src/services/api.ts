// const BASE_URL = 'http://IPV4:3333';

export default {
    get: async (url: string) => {
        return fetch(BASE_URL + url, {method: 'GET'})
            .then(resp => resp.json())
            .then(data => data)
            .catch(err => { throw err });
    }
}