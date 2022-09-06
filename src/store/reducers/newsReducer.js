import { GET_NEWS, NEWS_ERROR, SEARCH_NEWS } from "../types";


const initalState = {
    news: [],
    loading: true
}

export default function(state = initalState, action){
    switch(action.type){
        case GET_NEWS:
            return{
                ...state,
                news: action.payload,
                loading: false,
            }
        
        case SEARCH_NEWS:
            return{
                ...state,
                news: action.payload,
                loading: false,
            }
        case NEWS_ERROR:
            return{
                loading: false,
                error: action.payload
            }
    
        default: return state
    }
}