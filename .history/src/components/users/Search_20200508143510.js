import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search users..." />
        </form>
      </div>
    );
  }
}

export default Search;
