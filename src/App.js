import Navbar from "./Components/Header-Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FrontEndRoutes from "./Routes/FrontEndRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FrontEndRoutes />
      <Footer />
    </div>
  );
};

export default App;
