import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
