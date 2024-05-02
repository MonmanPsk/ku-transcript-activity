const API_KEY = import.meta.env.API_KEY
const API_URL = `https://${API_KEY}.mockapi.io/nisit_info`

export default async function fetchUser() {
    console.log(API_KEY);
    
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data[0]
    } catch(err) {
        console.error("Error:", err);
    }
}