import { DECREASE, DIVISION, INCREASE, MULTIPLICATION, RESET } from "./Actiontype"


export const add = (data) => {
    return {
        type: INCREASE,
        payload: data
    }
}
export const remove = (data) => {
    return {

        type: DECREASE,
        payload: data,
    }
}
export const reset = (data) => {
    return {
        type: RESET,
        payload: data,
    }
}
export const division = (data) => {
    return {
        type: DIVISION,
        payload: data,
    }
}
export const mult = (data) => {
    return {
        type: MULTIPLICATION,
        payload: data,
    }
}