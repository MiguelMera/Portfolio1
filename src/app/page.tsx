import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import GetInTouch from "./components/getInTouch";
import NavBar from "./components/navbar";
import Presenation from "./components/presentation";
import Projects from "./components/Projects";
import ScrollToTop from "./components/scrollToTop";
import Skills from "./components/skills";


export default function Home() {
  return (
    <div className="w-100 h-100">
      <NavBar/>
      <Presenation/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <GetInTouch/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
