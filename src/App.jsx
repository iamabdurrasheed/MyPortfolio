import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Hero, Navbar, Tech, Works, StarsCanvas,Experience } from "./components";
import HoverableNav from "./components/HoverableNav";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen'>
          <Navbar />
          <Hero />
        </div>
        <HoverableNav />
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Education />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;