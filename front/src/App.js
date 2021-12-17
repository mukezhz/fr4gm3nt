import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>

        {/* navigation */}
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* footer */}
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
