import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css['stats-list']}>
        <li className={css['stats-item']}>
          <span className={css['stats-info']}>Followers</span>
          <span className={css['stats-value']}>{followers}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css['stats-info']}>Views</span>
          <span className={css['stats-value']}>{views}</span>
        </li>

        <li className={css['stats-item']}>
          <span className={css['stats-info']}>Likes</span>
          <span className={css['stats-value']}>{likes}</span>
        </li>
      </ul>
    </div>
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
