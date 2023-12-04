import {GET_GLOBALDATA} from "./types";

const initialState = {
    globalData: {}
}

export const LayoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GLOBALDATA:
            return {
                ...state,
                globalData: action.payload
            }
        default:
            return state
    }
}