// import "./index.css";
import { FaComputer } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";

const App = () => {
  return (
    <section>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </section>
  );
};

export default App;
