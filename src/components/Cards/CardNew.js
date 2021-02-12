import React, {useContext} from 'react'
import './card-style.css'
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import {GlobalContext} from "../../context/GlobalState";

const CardNew = (props) => {
    const {removeNews} = useContext(GlobalContext)

    return (
        <div className="card text-center">
            <div className="card-body text-dark">
                <h4 className="card-title">{props.article.newsTitle}</h4>
                <p className="card-text text-secondary items-text">{props.article.newsText}</p>
                <Link className="btn btn-info mr-1" to={`/show:${props.article.id}`}>Читать</Link>
                <Link className="btn btn-dark mr-1" to={`/edit:${props.article.id}`}>Изменить</Link>
                <Button onClick={() => removeNews(props.article.id)} color="danger">Удалить</Button>
            </div>
        </div>
    )
}

export default CardNew