import React from 'react';
import './search-bar.style.css';

const SearchBar = () => {
    return (

      <div class="sb-container">
           <form>
                <input type="text" placeholder="Search..." />
                <p>
                <input type="checkbox" />
                {' '}
                Only show products in stock
                </p>
            </form>
      </div>

    )
}

export default SearchBar;