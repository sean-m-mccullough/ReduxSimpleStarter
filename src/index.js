import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

import YT_API from './keys/youtube-key';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('running');
    }

    videoSearch(term) {
        YTSearch({key: YT_API.key, term: term}, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });

        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));