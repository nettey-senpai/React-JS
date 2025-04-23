import ComponentA from "./components/ComponentA";

const App = () => {
  const name = "Jeffrey";
  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
};

export default App;
