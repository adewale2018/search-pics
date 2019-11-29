import React from "react";

const ImageList = props => {
  const images = props.images.map(({ id, urls, description }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return (
    <div>
      <h2>{images}</h2>
    </div>
  );
};

export default ImageList;
