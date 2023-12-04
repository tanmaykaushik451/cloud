import axios from "axios"
import { getHeaderData } from "./api"
import { GET_GLOBALDATA } from "./types"
const token = process.env.REACT_APP_TOKEN
const apilink = process.env.REACT_APP_BASE_URL

export function setGobalData(data) {
    return {
        type: GET_GLOBALDATA,
        payload: data,
    }
}

export function getHeaderDataAction() {
    return dispatch => {
        getHeaderData()
            .then(({ data }) => {
                console.log(data)
                dispatch(setGobalData(data.data))
            })
            .catch((e) => {
                console.log(e)
            })
    }
}