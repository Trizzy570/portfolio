import  Topbar from  "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
  <Topbar>
    <div className="sections">
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
  </Topbar>
   
    </div>
  );
}

export default App;
