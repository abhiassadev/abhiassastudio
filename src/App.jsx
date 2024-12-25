import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import Checkout from "./pages/Checkout";
import Conditions from "./pages/Conditions";

import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/checkout/:id" element={<Checkout />} /> */}
          <Route path="/conditions" element={<Conditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
