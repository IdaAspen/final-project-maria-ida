import React from 'react';

const ImageButton = (props) => {
  return (
    <button
      className="img-btn"
      type="submit"
      key={props.name}
      // onClick={() => onAnswerSubmit(props.item.name, props.item.image)}
    >
      {<img src={props.image} alt={props.image} />}
      <p className="img-btn-text">{props.name}</p>
    </button>
  );
};

export default ImageButton;
