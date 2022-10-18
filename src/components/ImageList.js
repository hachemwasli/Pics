import React from 'react';
import Loader from './Loader';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
  return (
    <div style={{ margin: '10px', padding: '5px' }}>
      <div>
        {props.images ? 'Found: ' + props.images.length + ' images' : ''}
      </div>
      {props.isLoading && <Loader message="Search for images"></Loader>}
      <div className="image-list">
        {props.images &&
          props.images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
      </div>
    </div>
  );
};

export default ImageList;
