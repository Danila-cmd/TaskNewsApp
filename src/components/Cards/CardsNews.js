import React, {useContext} from 'react'
import CardNew from './CardNew'
import {GlobalContext} from "../../context/GlobalState";

const CardsNews = () => {
    const {news} = useContext(GlobalContext)
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {news.news.length > 0 ? (
                    <>
                        {news.news.map(article => (
                            <div className="text-center" style={{padding: "20px"}} key={article.id}>
                                <CardNew article={article}/>
                            </div>
                        ))}
                    </>
                ) : (
                    <h3 className="text-center">Новости отсутствуют</h3>
                )}
            </div>
        </div>
    )
}

export default CardsNews