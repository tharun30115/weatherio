import Header from "./components/Header";
import Companies from "./components/Companies";
import Introduction from "./components/Introduction";
import Promotion from "./components/Promotion";
import Offer from "./components/Offer";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
const App = () => {
  return <div className="w-full h-full flex flex-col">
    <Header />
    <Companies />
    <Introduction />
    <Promotion />
    <Offer />
    <Blog />
    <Banner />
    <Footer />
  </div>;
}

export default App;
