import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Jeff";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Jeff</button>
    </div>
  );
};

export default App;
