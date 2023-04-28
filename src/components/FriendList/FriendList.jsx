import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friendsList }) => {
  return (
    <List>
      {friendsList.map(({ avatar, id, isOnline, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </List>
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
