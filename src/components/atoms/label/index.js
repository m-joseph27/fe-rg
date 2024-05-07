import React from "react";
import './index.scss';

const Label = (props) => {
  console.log('props', props);
  return (
    <div>
      <p>{props.value}</p>
    </div>
  );
}

export default Label;