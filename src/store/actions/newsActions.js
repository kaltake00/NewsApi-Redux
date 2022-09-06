import { GET_NEWS, NEWS_ERROR, SEARCH_NEWS } from "../types";
import axios from "axios";

export const getNews = (pageSize) => async dispatch => {
    try{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6bc49a3e325f4fdc95ceeba08d7986cd&pageSize=${pageSize}`)
        dispatch({
            type: GET_NEWS,
            payload: res.data
        })
    }
    catch (e){
        dispatch({
            type: NEWS_ERROR,
            payload: console.log(e)
        })
    }
}




export const searchEverything = (query) => async dispatch => {
    try{
        const res = await axios.get(`https://newsapi.org/v2/everything?apiKey=6bc49a3e325f4fdc95ceeba08d7986cd&q=${query}`)
        dispatch({
            type: SEARCH_NEWS,
            payload: res.data
        })
    }
    catch (e){
        dispatch({
            type: NEWS_ERROR,
            payload: console.log(e)
        })
    }
}

export const searchAndSortBy = (query, sortType) => async dispatch => {
    try{
        const res = await axios.get(`https://newsapi.org/v2/everything?apiKey=6bc49a3e325f4fdc95ceeba08d7986cd&q=${query}&sortBy=${sortType}`)
        dispatch({
            type: SEARCH_NEWS,
            payload: res.data
        })
    }
    catch (e){
        dispatch({
            type: NEWS_ERROR,
            payload: console.log(e)
        })
    }
}