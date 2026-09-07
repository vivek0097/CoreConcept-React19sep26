
//we can define  like  this also but we can not use export default in this case
//for  thsi  you need to import it like this  import {Welcome} from "../ui/Welcome"  in the Home.jsx file


export const Welcome = (props) => {
  console.log(props);


  return (
    <section>               

        <h1 className="text-3xl sm:text-4xl">Welcome {props.name}  {props.alias}</h1>

   </section>

  )
}


//we can define  like  this also but we can not use export default in this case

// function Welcome() {
//   return (
//     <section>
//       <h1 className="text-3xl sm:text-4xl">Welcome with export default</h1>
//     </section>
//   )
// }
// export default Welcome;





//we  can define  like  this also but we can not use export default in this case



// export default function Welcome() {
//   return (
//     <section>
//       <h1 className="text-3xl sm:text-4xl">Welcome</h1>
//     </section>
//   )
// }