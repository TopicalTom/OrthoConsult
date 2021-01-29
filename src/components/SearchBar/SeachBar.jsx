import React from 'react';
import "./SearchBar.scss";

// Assets
import search from "../../assets/icons/search.svg";

const SearchBar = ( {children, ...props} ) => {
    const { className } = props;

    return (
        <div className={`${className} searchbar`}>
            <img 
                className="searchbar__icon" 
                src={search}
            />
            <input 
                className="searchbar__field" 
                placeholder="Search" 
            />
        </div>
    );
};

export default SearchBar;