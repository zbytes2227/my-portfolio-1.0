import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./main.css";

function App() {
  return (
    <>
      <Navbar />

      <Header />


      <AboutMe />

      <Skills />
      <Projects />
      <Footer />

      {/* <div
        id="about"
        class="h-screen flex relative items-center overflow-hidden justify-center w-full flex-wrap container mx-auto px-4"
      >
        <div class="max-w-xl relative z-10 flex justify-center items-start flex-col text-start w-full h-full py-10">
          <h1 class="uppercase text-start text-3xl py-5 font-WorkSansSemiBold text-gray-500">
            A bit <span class="text-white">about me</span>
          </h1>
          <h1 class="max-w-3xl text-3xl text-gray-500">
            I am a UI/UX designer who is passionate about creating{" "}
            <span class="px-1 text-white">
              beautiful and joyful digital experiences. Besides design, I love
              music, games and travelling.
            </span>
          </h1>
        </div>
 
          <img src="about-img.svg" alt="Image" width="600" height="600" /> */}

    </>
  );
}

export default App;
