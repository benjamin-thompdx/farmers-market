import React from 'react';
import PropTypes from 'prop-types';

const NavItem = props => {
  return (
    <div className="NavItem">
      <a href="test">{props.text}</a>
    </div>
  )
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default NavItem;