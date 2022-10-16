import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: undefined, isLoading: false };
  onSearchSubmit = async (term) => {
    this.setState({ isLoading: true });
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    this.setState({ isLoading: false });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.images}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
