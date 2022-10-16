import React from 'react';
import Loader from './Loader';

const ImageList = (props) => {
  return (
    <div style={{ margin: '10px', padding: '5px' }}>
      <div>
        {props.images ? 'Found: ' + props.images.length + ' images' : ''}
      </div>
      {props.isLoading && <Loader message="Search for images"></Loader>}
      <div>
        {props.images &&
          props.images.map((image) => (
            <img
              key={image.id}
              style={{ padding: '5px' }}
              src={image.urls.regular}
              alt={image.alt_description}
              width="200"
              height="300"
            ></img>
          ))}
      </div>
    </div>
  );
};

export default ImageList;
