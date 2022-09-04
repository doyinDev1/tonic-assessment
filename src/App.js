import Hero from "./Layout/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./Layout/Footer/Footer";
import Story from "./Layout/Story/Story";
import Team from "./Layout/Team/Team";
import BlogDetails from "./Layout/BlogDetails/BlogDetails";
import Suscribe from "./Layout/Suscribe/Suscribe";

function App() {
  return (
    <div className="app">
      <Hero />
      <Story />
      <Team/>
      <BlogDetails/>
      <Suscribe/>
    </div>
  );
}

export default App;

