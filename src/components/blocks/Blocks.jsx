import React from 'react';
import PropTypes from 'prop-types';
import './blocks.css';
import {Link} from 'react-router-dom';

const Blocks = (props) => {
  const { data } = props;
  
  if (!data) {
    return <span>Keine Daten</span>;
  }

  const blockElements = data.map(e => {
    if (e.displayName) {
      
      return (
        <Link to={`./${e.id}`} key={e.id}>
          <div className="block-element" key={e.displayName}>
            {e.displayName}
          </div>
        </Link>
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
  data: PropTypes.array
};

Blocks.defaultProps = {
  data: null
};

export default Blocks;