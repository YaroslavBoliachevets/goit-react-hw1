import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from 'data/user';
import statiscs from 'data/statistics';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div style={{ backgroundColor: 'grey', padding: '50px 0px' }}>
      <Profile user={user} />
      <Statistics statiscs={statiscs} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}>

      </TransactionHistory>
    </div>
  );
};
