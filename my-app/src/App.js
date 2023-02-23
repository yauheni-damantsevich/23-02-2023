import "./App.css";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
