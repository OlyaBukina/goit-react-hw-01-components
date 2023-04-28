import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friendsList }) => {
  return (
    <ul className={css['friend-list']}>
      {friendsList.map(({ avatar, id, isOnline, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          id={id}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
