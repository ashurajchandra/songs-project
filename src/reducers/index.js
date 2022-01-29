import { combineReducers } from 'redux';
import {REMOVE_SONG_SELECTED,SONG_SELECTED} from '../actions'
//creating list of songs data
const intialState ={
    songList: [
        {title:'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title:'All Star', duration:'1:45'},
        {title:'I want it that way', duration:'1:45'}
    ],
    selectedSongList:[],
    // isSelected:false
}

export default function songReducer(state=intialState,action){

    switch (action.type) {
        case SONG_SELECTED :
            if(state.selectedSongList.includes(action.payload)){
                return alert(`song already exist${action.payload}`)
            }
            return {
                ...state,
                selectedSongList:[...state.selectedSongList,action.payload],
                // isSelected:true
            }
            case REMOVE_SONG_SELECTED :
                const newArr = state. selectedSongList.filter(
                    (song) => song !== action.payload
                  );
                return {
                    ...state,
                    selectedSongList:newArr,
                    // isSelected:false
                }

            default :
            return state;
    }
}


