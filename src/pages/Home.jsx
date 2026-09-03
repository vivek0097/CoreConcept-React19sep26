// import Welcome from "../ui/Welcome"
import {Welcome} from "../ui/Welcome";
import {Hello, HelloWithoutJSX} from "../ui/Hello"
import { Greet } from "../ui/Greet";
import ContactForm from "./ContactForm";



function Home() {


  return (
    <section>
    <Hello /> 
    {/* <HelloWithoutJSX /> */}
   
     {/* <Welcome /> */}
{/* /---  proper  jsx writing---------------- */}
  
   <Greet />

   <ContactForm />


    </section>
  )
}


export default Home
