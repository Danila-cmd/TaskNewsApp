import React, {useContext, useState, useEffect} from "react"
import {GlobalContext} from "../context/GlobalState";
import {Link, useHistory} from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,

} from 'reactstrap'

const EditNew = (props) => {

    const [selectedNewsTitle, setSelectedNewsTitle] = useState({
        id: '',
        newsTitle: '',
        newsText: '',
        newsCreateAt: '',
        newsAuthor: ''
    })


    const {news, editNews} = useContext(GlobalContext)
    const history = useHistory()
    const currentNewId = (props.match.params.id).substr(1)

    useEffect(() => {

        const newId = currentNewId
        const selectedNew = news.news.find(article => article.id === newId)

        setSelectedNewsTitle(selectedNew)

    }, [currentNewId, news])

    const onSubmit = () => {
        editNews(selectedNewsTitle)
        history.push('/')
    }


    const onChange = (e) => {
        const {name, value} = e.target
        setSelectedNewsTitle({...selectedNewsTitle, [name]: value})
    }

    return (
        <Form onSubmit={onSubmit} style={{maxWidth: "70rem", margin: "4rem auto"}}>
            <FormGroup>

                <Label>Название</Label>
                <Input type="text"
                       name="newsTitle"
                       value={selectedNewsTitle.newsTitle}
                       onChange={onChange}
                       placeholder="Введите название новости"
                />

                <Label style={{marginTop: "20px"}}>Основной текст</Label>
                <Input
                    type="textarea"
                    style={{height: '150px'}}
                    name="newsText"
                    value={selectedNewsTitle.newsText}
                    onChange={onChange}
                    placeholder="Введите основной текст новости"
                />

                <Label style={{marginTop: "20px"}}>Дата сохранения</Label>
                <Input type="text"
                       name="newsCreateAt"
                       value={selectedNewsTitle.newsCreateAt}
                       onChange={onChange}
                       placeholder="Введите дату создания новости"
                />

                <Label style={{marginTop: "20px"}}>Автор</Label>
                <Input type="text"
                       name="newsAuthor"
                       value={selectedNewsTitle.newsAuthor}
                       onChange={onChange}
                       placeholder="Введите автора новости"
                />

            </FormGroup>
            <Button type="submit">Изменить</Button>
            <Link to="/" className="btn btn-danger ml-2">Назад</Link>
        </Form>
    )
}

export default EditNew