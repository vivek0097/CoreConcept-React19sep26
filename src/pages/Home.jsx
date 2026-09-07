// import Welcome from "../ui/Welcome"
import {Welcome} from "../ui/Welcome";
import {Hello, HelloWithoutJSX} from "../ui/Hello"
import { Greet } from "../ui/Greet";
import ContactForm from "./ContactForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";



function Home() {


  return (
    <section>
    <Hello /> 
    {/* <HelloWithoutJSX /> */}
   
     <Welcome name="Vivek" alias="singh" />
     <Welcome name="jhon" alias="duo"/>
     <Welcome name="batman" alias="bruce "/>
{/* /---  proper  jsx writing---------------- */}
  
   <Greet />
   <ContactForm />
  
    <CandidateProfile />

    <Product title="Gaming  Laptop"  price={1500.99} inStock={true} categories={["Electroncs", "Computers", "Gaming"]}/>


    </section>
  )
}


export default Home
