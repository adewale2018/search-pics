import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
      
        <form className="ui form">
        <div className="field">
        <label>Image Search </label>
          <input type='text' placeholder='What do you want to search for?' />
          </div>
        </form>
      
      </div>
    );
  }
}

export default SearchBar;
