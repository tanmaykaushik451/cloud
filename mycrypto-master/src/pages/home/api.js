import axios from "axios"
// import {token,apilink} from "../config"
const token = process.env.REACT_APP_TOKEN
const apilink = process.env.REACT_APP_BASE_URL

export const getTableData = ()=>{
    return axios.get(`http://localhost:3001/api/data`)
}



