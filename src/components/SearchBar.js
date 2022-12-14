import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.term);
          }}
          className="ui form"
        >
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
