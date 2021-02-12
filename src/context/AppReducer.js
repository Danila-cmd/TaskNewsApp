export default (news, action) => {
    switch (action.type) {

        case 'REMOVE_NEWS':
            return {
                news: news.news.filter(article => {
                    return article.id !== action.payload
                })
            }
        case 'ADD_NEWS':
            return {
                news: [action.payload, ...news.news]
            }

        case 'EDIT_USER':
            const updateNew = action.payload

            const updateNews = news.news.map(article => {
                if (article.id === updateNew.id) {
                    return updateNew
                }
                return article
            })

            return {
                news: updateNews
            }

        default:
            return news.news
    }
}