import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Person name="Jeff" age={25} />
      <Product name="Banana" price="$5" />
    </div>
  );
};

export default App;
