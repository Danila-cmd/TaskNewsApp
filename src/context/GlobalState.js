import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
import App from "../App";

const initialState = {
    news: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('state')
        return localData ? JSON.parse(localData) : initialState
    })

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

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
            news: state.news,
            removeNews,
            addNews,
            editNews
        }}>
            {children}
        </GlobalContext.Provider>
    )
}