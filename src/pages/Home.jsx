// import Welcome from "../ui/Welcome"
import {Welcome} from "../ui/Welcome";
import {Hello, HelloWithoutJSX} from "../ui/Hello"

function Home() {


  return (
    <section>
    <Hello /> 
  <HelloWithoutJSX />
   
     <Welcome />

    </section>
  )
}

export default Home
