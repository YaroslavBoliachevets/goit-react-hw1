import {ProfileWrapper, ProfileDescription, ProfileImg, ProfileTag, ProfileLocation, ProfileList, ProfileItem, ProfileStatistics} from './Profile.styled';


const Profile = ({user}) => {
  const {username, tag, location, avatar, stats } = user;
  return (
    <ProfileWrapper>
      <ProfileDescription>
        <ProfileImg
          src={avatar}
          alt="User avatar"
        />
        <p>{username}</p>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileList>
        <ProfileItem>
          <ProfileStatistics>Followers</ProfileStatistics>
          <span>{stats.followers}</span>
        </ProfileItem>
        <ProfileItem>
          <ProfileStatistics>Views</ProfileStatistics>
          <span>{stats.views}</span>
        </ProfileItem>
        <ProfileItem>
          <ProfileStatistics>Likes</ProfileStatistics>
          <span>{stats.likes}</span>
        </ProfileItem>
      </ProfileList>
    </ProfileWrapper>
  );
};

export default Profile;
