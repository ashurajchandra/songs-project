
import SongList from "./SongList";
import SelectedSong  from "./SelectedSong";

const App=()=> {
  return (
    <div className="ui container grid">
<div className="ui row">
  <div className="column twelve wide">
  <SongList/>
  </div>
  <div className="column twelve wide">
  <SelectedSong/>
  </div>
</div>

    </div>
  );
}

export default App;
