const App = () => {
  return (
    <User
      name="Jeff"
      age={25}
      isMarried={false}
      hobbies={["Coding", "Music", "Sleeping"]}
    />
  );
};

const User = ({ name, age, isMarried, hobbies }) => {
  return (
    <section>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is Married: {isMarried}</h3>
      <h4>Hobbies: {hobbies[0]}</h4>
    </section>
  );
};

export default App;
