const baseURL = 'http://localhost:3000/api/pedals/'

export default {
    async getPedals() {
        const res = await fetch(baseURL)
        return await res.json()
    },

    async postPedal(payload) {
        const res = await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        return await res.json()
    },

    deletePedal(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }

}