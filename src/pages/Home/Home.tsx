import NavBar from "../../components/navBar/navBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/about"
import Project from "./sections/Projects/project"
import AboutMe from "./sections/AboutMe/AboutMe"
import Cards from "./sections/Cards/Cards"





const  Home = () => {

  return (
    <>
    <NavBar/>
     <Hero />
     <About />
     <Project />
    <Cards /> 
     <AboutMe />
    </>
  )
}

export default Home
