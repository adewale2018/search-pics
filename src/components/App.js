import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(inputvalue) {
    console.log(inputvalue);
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: "40px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
