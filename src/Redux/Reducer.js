import { DECREASE, DIVISION, INCREASE, MULTIPLICATION, RESET } from "./Actiontype"

export const reducer = (state = 0,{type,payload}) => {
    switch (type) {
        case INCREASE:
            return state+=payload;
        case DECREASE:
            return state-=payload;
        case RESET:
            return state=0;
        case DIVISION:
            return state=payload;
        case MULTIPLICATION:
            return state=payload;         
        default:
            return state;
    }
}