import React from 'react';
import PropTypes from 'prop-types';
import './blocks.css';

const Blocks = (props) => {
  const { data } = props;
  var blockElements;

  if (!data) return;

  data.forEach(e => {
    console.log(e.displayName);
    if (e.displayName) {
      blockElements += 
        <div className="block-element">{e.displayName}</div>
      ;
    }
  });
  return (
    <div className='blocks'>
      {blockElements}
    </div>
  )
}

Blocks.propTypes = {
  data: PropTypes.array,
};

Blocks.defaultProps = {
  data: null,
};

export default Blocks;