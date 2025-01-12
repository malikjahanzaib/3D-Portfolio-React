import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience,  Feedbacks, Hero, Navbar, Tech, Works, Achievements, StarsCanvas } from "./components";

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Achievements />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
