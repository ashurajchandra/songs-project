import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeSelectSong} from '../actions';

 function SelectedSong() {
     const selectedSongList =useSelector((state)=>state.selectedSongList);
     const dispatch=useDispatch();
    console.log(" selectedSongList props",selectedSongList);

    function renderSong(){
        return selectedSongList.map((song)=>{
            console.log("selectedSongList song",song)
            return(
                // <div className='item' key={song.title}>
                //     <div className='content'>
                //        Song Title: {song.title}
                //     </div>
                //     <div className='content'>
                //      Duration:   {song.duration}
                //     </div>
                // </div>
                     <div className='item' key={song.title}>
                     <div className='right floated content'>
                <button className='ui button secondary' onClick={()=>dispatch(removeSelectSong(song))}>
                         un-Select
                     </button>
                       </div>
                     <div className='content'>
                       <h3>Title:</h3><span> {song.title}</span> 
                     </div>
                     <div className='content'>
                     <h3>Duration:</h3><span> {song.duration}</span>
                     </div>
                 </div>
            )
        })
    }
//   if(!song){
//       return <div>Select a song</div>
//   }

  return (renderSong())
}


export default  SelectedSong;