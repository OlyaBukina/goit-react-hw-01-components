import PropTypes from 'prop-types';
import {
  Container,
  Discription,
  Avatar,
  UserName,
  StatsList,
  StatsItem,
  StatsValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Container>
      <Discription>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Discription>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsValue>{followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsValue>{views}</StatsValue>
        </StatsItem>

        <StatsItem>
          <span>Likes</span>
          <StatsValue>{likes}</StatsValue>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
