import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import YT_API from './keys/youtube-key';

YTSearch({key: YT_API.key, term: 'surfboards'}, function(data) {
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