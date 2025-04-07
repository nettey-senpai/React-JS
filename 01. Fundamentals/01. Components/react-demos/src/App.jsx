import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Dune Part Two",
    ratings: 8.5,
  });

  const handleClick = () => setMovie({ ...movie, ratings: 9 });

  return (
    <section>
      <h1>Title: {movie.title}</h1>
      <p>Rating: {movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </section>
  );
};

export default App;
