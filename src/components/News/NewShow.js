import React, {useContext, useEffect, useState} from 'react'
import './news_show.css'
import Header from "../Header";
import {GlobalContext} from "../../context/GlobalState";
import {Link} from "react-router-dom";

const NewShow = (props) => {
    const {news} = useContext(GlobalContext)
    const currentNewId = (props.match.params.id).substr(1)

    const [showNew, setSelectedNewsTitle] = useState({
        id: '',
        newsTitle: '',
        newsText: '',
        newsCreateAt: '',
        newsAuthor: ''
    })

    useEffect(() => {

        const newId = currentNewId
        const showNew = news.news.find(article => article.id === newId)

        setSelectedNewsTitle(showNew)

    }, [])

    return (
        <div>

            <Header/>

            <div className="body-content">
                <div className="container">

                    <div className="content">

                        <h1>{showNew.newsTitle}</h1>

                        <p>{showNew.newsText}</p>

                        <span>{showNew.newsCreateAt}</span>
                        <span>{showNew.newsAuthor}</span>

                    </div>

                </div>
            </div>

            <div style={{paddingLeft: "120px", paddingBottom: "20px"}}>
                <Link to="/" className="btn btn-danger ml-2">Назад</Link>
            </div>

        </div>
    )
}

export default NewShow