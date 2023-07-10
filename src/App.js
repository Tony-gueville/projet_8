import "./sass/compenants/_app.scss";
import Router from "./router/router";
import Header from "./components/header";
import Footer from "./components/footer";
import "./sass/compenants/main.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
