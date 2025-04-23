// We setup useEffect hook to run some code WHEN:
// Component renders for the (First Time)
// WHENEVER it re-rendeers
// some data in our component changed
import { useState, useEffect } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const [something, setSomething] = useState(0);

//   useEffect(() => {
//     if (value > 0) {
//       console.log("call useEffect");
//       document.title = `Increment ${value}`;
//     }
//   }, [value]);

//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click Me</button>
//       <button onClick={() => setSomething(value + 2)}>
//         Increment by Something
//       </button>
//     </div>
//   );
// };

// Fetching Data
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await respone.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>{todo.title}</li>
            <li>Body --- {todo.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default App;
