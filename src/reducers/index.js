
//creating list of songs data
const SongListReducer = ()=>{
    return [
        {title:'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title:'All Star', duration:'1:45'},
        {title:'I want it that way', duration:'1:45'}
    ];
};
//selected song from list of songs
const SelectedSongReducer = (selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};