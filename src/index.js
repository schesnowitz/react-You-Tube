import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail' 


const API_Key = 'AIzaSyBAKHFMi21weYGvvaplraES6-HLZpqUmFU';


class App extends Component { 
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };

    YTSearch( {key: API_Key, term: 'Eric Clapton'}, (videos) => { 
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

      // in es6 above line is same as  this.setState({videos: videos});
    });
  }
  render () {  
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/> 
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}  
        videos={this.state.videos}/> {/*passing data to child*/} 
      </div>
    );
  }
};


ReactDOM.render(<App />, document.querySelector('.container'));