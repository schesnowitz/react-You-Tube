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
    this.state = { videos: [] }; // sets state to array of videos

    YTSearch( {key: API_Key, term: 'Eric Clapton'}, (videos) => { 
      this.setState({videos});

      // in es6 above line is same as  this.setState({videos: videos});
    });
  }
  render () {  
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/> {/*passing data to child*/} 
      </div>
    );
  }
};


ReactDOM.render(<App />, document.querySelector('.container'));