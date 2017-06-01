import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import YT_API from './keys/youtube-key';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: YT_API.key, term: 'surfboards'}, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));