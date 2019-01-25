import {Types} from '../actions/navBar'

const initialState={
    tela:'vazia',
}

export default function navBar(state=initialState, action){
    switch(action.type){
        case Types.SELECTED_SEARCH:
        return{
            tela:'search'
        }
        case Types.SELECTED_ADD:
        return{
            tela:'add'
        }
        case Types.SELECTED_WISHLIST:
        return{
            tela:'wishlist'
        }
        case Types.SELECTED_SETTINGS:
        return{
            tela:'settings'
        }
        default:
        return state
    }
}