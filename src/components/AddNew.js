import React, {useContext, useState} from "react"
import {GlobalContext} from "../context/GlobalState";
import {v4 as uuid} from 'uuid'
import {Link, useHistory} from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const AddNew = () => {

    const [newsTitle, setNewsTitle] = useState('')
    const [newsText, setNewsText] = useState('')
    const [newsCreateAt, setNewsCreateAt] = useState('')
    const [newsAuthor, setNewsAuthor] = useState('')

    const {addNews} = useContext(GlobalContext)
    const history = useHistory()

    const onSubmit = () => {
        const newArticle = {
            id: uuid(),
            newsTitle,
            newsText,
            newsCreateAt,
            newsAuthor
        }
        addNews(newArticle)
        history.push('/')
    }

    const onChangeTitle = (e) => {
        setNewsTitle(e.target.value)
    }

    const onChangeText = (e) => {
        setNewsText(e.target.value)
    }

    const onChangeCreateAt = (e) => {
        setNewsCreateAt(e.target.value)
    }

    const onChangeAuthor = (e) => {
        setNewsAuthor(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit} style={{maxWidth: "70rem", margin: "4rem auto"}}>
            <FormGroup>
                <Label>Название</Label>
                <Input type="text" name="title"
                       value={newsTitle} onChange={onChangeTitle}
                       placeholder="Введите название новости"/>

                <Label style={{marginTop: "20px"}}>Основной текст</Label>
                <Input type="textarea" name="text"
                       style={{height:'150px'}}
                       value={newsText} onChange={onChangeText}
                       placeholder="Введите основной текст новости"/>

                <Label style={{marginTop: "20px"}}>Дата сохранения</Label>
                <Input type="date" name="createAt"
                       value={newsCreateAt} onChange={onChangeCreateAt}
                       placeholder="Введите дату создания новости"/>

                <Label style={{marginTop: "20px"}}>Автор</Label>
                <Input type="text" name="author"
                       value={newsAuthor} onChange={onChangeAuthor}
                       placeholder="Введите автора новости"
                />

            </FormGroup>
            <Button type="submit">Создать</Button>
            <Link to="/" className="btn btn-danger ml-2">Назад</Link>
        </Form>
    )
}

export default AddNew