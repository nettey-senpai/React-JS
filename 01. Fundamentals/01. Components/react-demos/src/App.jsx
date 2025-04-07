import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOneFriend = () => setFriends([...friends, "Jeff"]);
  const removeFriend = () => setFriends(friends.filter((f) => f !== "John"));
  const updateFriend = () => {
    setFriends(friends.map((f) => (f == "Alex" ? "Alex Smith" : f)));
  };

  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add new friend</button>
      <button onClick={removeFriend}>Remove one friend</button>
      <button onClick={updateFriend}>Update one friend</button>
    </section>
  );
};

export default App;
