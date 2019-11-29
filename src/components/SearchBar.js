import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='What do you want to search for?' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
