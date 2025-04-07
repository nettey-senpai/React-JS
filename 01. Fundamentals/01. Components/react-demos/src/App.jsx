const Move = () => {
  const moveHandler = () => {
    alert("Mouse move event fired");
    console.log("Mouse move event fired");
  };
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, deleniti
      esse ducimus nobis dolorem itaque eum suscipit. Quibusdam, beatae.
      Consequuntur?
    </p>
  );
};

const Copy = () => {
  const copyHandler = () => console.log("Stop copying my shi");

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
      repellendus! Soluta natus laudantium rerum quos nulla labore. Quas,
      adipisci eligendi!
    </p>
  );
};

const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>Click</button>;
};

const App = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  );
};

export default App;
