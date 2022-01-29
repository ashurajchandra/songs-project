//Action creator
export const SONG_SELECTED='SONG_SELECTED';
export const REMOVE_SONG_SELECTED='REMOVE_SONG_SELECTED';
export const selectSong = song=>{
    //return action
    return{
        type: SONG_SELECTED,
        payload:song
    };
};
export const removeSelectSong = song=>{
    //return action
    return{
        type:REMOVE_SONG_SELECTED,
        payload:song
    };
};