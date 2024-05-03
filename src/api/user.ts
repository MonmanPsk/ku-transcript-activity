import { StudentProps } from "../types/TranscriptReport.types"
const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = `https://${API_KEY}.mockapi.io/nisit_info`

export default async function fetchUser() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data[0] as StudentProps
    } catch(err) {
        console.error("Error:", err);
    }
}