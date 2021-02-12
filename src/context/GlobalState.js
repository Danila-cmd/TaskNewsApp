import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

// const initialState = {
//     news: []
// }

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [news, dispatch] = useReducer(AppReducer, [], () => {
        const localData = localStorage.getItem('news')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('news', JSON.stringify(news))
    }, [news])

    const removeNews = (id) => {
        dispatch({
            type: 'REMOVE_NEWS',
            payload: id
        })
    }

    const addNews = (article) => {
        dispatch({
            type: 'ADD_NEWS',
            payload: article
        })
    }

    const editNews = (article) => {
        dispatch({
            type: 'EDIT_USER',
            payload: article
        })
    }

    return (
        <GlobalContext.Provider value={{
            news: news,
            removeNews,
            addNews,
            editNews
        }}>
            {children}
        </GlobalContext.Provider>
    )
}