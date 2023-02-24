import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./layouts/main/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
