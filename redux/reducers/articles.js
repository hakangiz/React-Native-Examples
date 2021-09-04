import { ADD_ARTICLE, DELETE_ARTICLE } from '../const/action-type'

const initialState = {
    articles: [{ title: "İlk title", id:1 }]
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log(action.payload);
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case DELETE_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.filter(p => p.id !== action.payload)
            });
        default:
            return state;
    }
}

export default articleReducer;