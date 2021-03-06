import React from 'react';
import { PropTypes } from 'prop-types';
const erg = 9;
const UsersListItem = ({ userData: { average, name, attendance = 0 } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.number,
  }),
};

export default UsersListItem;
