import "./App.css";
import Candidate from "./components/Candidate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Candidate />
      <Footer />
    </div>
  );
}

export default App;
