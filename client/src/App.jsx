import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import "./style/main.css";

const App = () => {
  return (
    <div className="app h-screen bg-cyan-200 flex flex-col justify-between">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
};

export default App;
