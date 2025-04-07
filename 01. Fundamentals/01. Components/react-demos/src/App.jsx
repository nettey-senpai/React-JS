import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Dune Part One", ratings: 8 },
    { id: 2, title: "Dune Part Two", ratings: 8.5 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id == 1 ? { ...movies, title: "Dark Knight" } : m))
    );
  };

  return (
    <section>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button>
    </section>
  );
};

export default App;
