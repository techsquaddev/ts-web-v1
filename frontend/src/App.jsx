import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Blog } from "./pages";
import { MainLayout } from "./components";

function App() {
  return (
    <div>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
