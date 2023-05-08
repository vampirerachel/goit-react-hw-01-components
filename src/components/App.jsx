import Statistics from "./Statistics";
import statData from "../data/data.json";
import user from "../data/user.json";
import friendData from "../data/friends.json";
import transactionData from "..//data/transactions.json"
import Profile from "./Profile";
import FriendsList from "./Friends";
import Items from "./TransactionHistory";

export const App = () => {
  return (
    <div>
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <FriendsList friend={friendData} />
          <Items item={transactionData}></Items>
    </div>

  );
};
