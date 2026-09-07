// import Welcome from "../ui/Welcome"
import {Welcome} from "../ui/Welcome";
import {Hello, HelloWithoutJSX} from "../ui/Hello"
import { Greet } from "../ui/Greet";
import ContactForm from "./ContactForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserCard } from "../ui/UserCard";



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
        

    {/* props-- */}
    <Greeting name="vivek" message="good  morning"/>
    <Greeting  name="bruce" />
    <Greeting message="welcome" />
    <Greeting />

  {/* ---spread  operator------------- */}
   <UserCard id={1} name="Vivek" age={28} email={"vivek@gmail.com"} city="noida"/>

  {/* --------wrapper -chilldren ---nestedt content------- */}

    <CardWrapper title={"User Proile"}>  
       <p>Bruice Wayne</p>
       <p>Bruice@gmail.com</p>
       <button>Edit Profile</button>
    </CardWrapper>

    </section>
  )
}


export default Home
