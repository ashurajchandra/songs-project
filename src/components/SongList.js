import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {selectSong,removeSelectSong} from '../actions'

 function SongList(props) {
     const songList= useSelector((state)=>state.songList);
    //  const isSelected=useSelector((state)=>state.isSelected);
     const dispatch=useDispatch();
     console.log("songlist props",songList);
    //  console.log("songlist isSelected",isSelected);
  function renderList(){
        return songList.map((song)=>{
            return(
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                    <button className='ui button primary' onClick={()=>dispatch(selectSong(song))}>
                            Select
                        </button>
                    </div>
                    <div className='content'>
                        {song.title}
                    </div>
                    <div>
                    <b>{song.title ===props.favoriteTitle && 'Favorite!'}</b>
                    </div>
                </div>
            )
        })
    }
  return (
  <div className='ui divided list'>{renderList()}</div>
  );
}

export default SongList;