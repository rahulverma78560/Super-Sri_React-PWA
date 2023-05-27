import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login-Register/Login";
import Navbar from "./Components/Header-Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FrontEndRoutes from "./Routes/FrontEndRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
      <FrontEndRoutes />
      <Footer />
    </>
  );
};

export default App;
