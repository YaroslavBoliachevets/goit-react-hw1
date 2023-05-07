import {FriendsList, FriendItem, Status, Avatar, Name} from './FriendList.styled';


const FriendList = ({friends}) => {
	return (
		<FriendsList>
		{friends && friends.map(({avatar, id, isOnline, name}) => {
			const color = statusColor(isOnline);
			return (
			<FriendItem key={id}>
				<Status color={color}/>
				<Avatar src={avatar} alt='avatar'/>
				<Name>{name}</Name>
				</FriendItem>
		)})}
		</FriendsList>
	)
};

export default FriendList;

function statusColor(status) {
	if (status) return 'green'
	return 'red'
}