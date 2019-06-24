import React from 'react';
import SearchField from "react-search-field";

class Search extends React.Component {
    onSearch = (e) => {
        alert(e.target.value);
    }
    render() {
        return (
            <div className="search">
                <input className="search-input" type="text" />
                <button className="search-btn"><i className="fas fa-search" /></button>
                <SearchField
                    placeholder="Search..."
                    onChange={this.onSearch}
                    searchText="This is initial search text"
                    className="test-class"
                />
            </div>
        );
    }
}

export default Search;