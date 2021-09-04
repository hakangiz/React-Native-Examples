import {ADD_ARTICLE,DELETE_ARTICLE} from '../const/action-type'  

export function addArticle(payload){
    console.log(payload);
    return {type:ADD_ARTICLE,payload}
}
export function deleteArticle(payload){
    return {type:DELETE_ARTICLE,payload}
}