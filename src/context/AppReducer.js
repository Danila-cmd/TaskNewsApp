export default (state, action) => {
    switch (action.type) {

        case 'REMOVE_NEWS':
            return {
                news: state.news.filter(article => {
                    return article.id !== action.payload
                })
            }
        case 'ADD_NEWS':
            return {
                news: [action.payload, ...state.news]
            }

        case 'EDIT_USER':
            const updateNew = action.payload

            const updateNews = state.news.map(article => {
                if (article.id === updateNew.id) {
                    return updateNew
                }
                return article
            })

            return {
                news: updateNews
            }

        default:
            return state
    }
}