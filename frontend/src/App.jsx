import "./App.css";
import { Home } from "./pages";
import { Navbar, Wrapper } from "./components";

function App() {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
