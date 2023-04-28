import { Item, Status, Avatar, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <Item>
      <Status statusType={isOnline}></Status>
      <Avatar>
        <img src={avatar} alt="User avatar" width="45" />
      </Avatar>

      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
