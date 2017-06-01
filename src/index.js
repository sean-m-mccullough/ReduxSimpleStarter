import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCk5MWRRq20QqCm3wfh9Ti_9I4lD2cTlzw';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));