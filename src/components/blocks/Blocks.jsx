import React from 'react';
import PropTypes from 'prop-types';
import './blocks.css';

const Blocks = (props) => {
  const { data } = props;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

  if (!data) {
    return <span>Keine Daten</span>;
  }

  const blockElements = data.map(e => {
    if (e.displayName) {
      return (
        <div className="block-element" key={e.displayName}>
          {e.displayName}
        </div>
      );
    }
    return null;
  });

  return (
    <div className="blocks">
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
=======

  if (!data) {
    return <span>Keine Daten</span>;
  }

  const blockElements = data.map(e => {
    if (e.displayName) {
      return (
        <div className="block-element" key={e.displayName}>
          {e.displayName}
        </div>
      );
    }
    return null;
  });

  return (
    <div className="blocks">
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
      {blockElements}
    </div>
  );
}

Blocks.propTypes = {
  data: PropTypes.array,
};

Blocks.defaultProps = {
  data: null,
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Blocks;
=======
export default Blocks;
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
=======
export default Blocks;
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
