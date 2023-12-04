import axios from "axios"

export const getHeaderData = ()=>{
    return axios.get(`https://api.coingecko.com/api/v3/global`)
}