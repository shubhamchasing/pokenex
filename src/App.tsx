import Background from "components/background";
import Footer from "sections/footer";
import Navbar from "sections/navbar";
import Wrapper from "sections/wrapper";

function App() {
  return (
    <div className="main-container">
      <Background />
      <div className="app">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
}

export default App;
