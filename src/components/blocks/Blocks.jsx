import React from 'react';
import PropTypes from 'prop-types';
import './blocks.css';

const Blocks = (props) => {
  const { data } = props;

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

export default Blocks;