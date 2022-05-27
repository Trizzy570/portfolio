import  Topbar from  "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="App">
  
    <div className="sections">
    <Topbar>
  </Topbar>
   

      <Intro>

      </Intro>
      
      <Portfolio>

      </Portfolio>

      <Works>

      </Works>

<Testimonials>

</Testimonials>

<Contact>

</Contact>

    </div>

    </div>
  );
}

export default App;
