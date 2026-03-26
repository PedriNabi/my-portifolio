import NavBar from "../../components/navBar/navBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/about"
import Project from "./sections/Projects/project"



const  Home = () => {

  return (
    <>
    <NavBar/>
     <Hero />
     <About />
     <Project />
    </>
  )
}

export default Home
