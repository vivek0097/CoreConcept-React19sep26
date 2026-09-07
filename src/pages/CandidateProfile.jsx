
export const CandidateProfile = () => {
    const name = "Vivek Singh";
    const role  = "front end developer";
    const yesOfExperience = 4;
    const isAvailable = true;


  return (
    <div className=" bg-gray-100 p-6 rounded-lg shadow-md  block justify-center border-2 h-40vh border-indigo-600 mt-4">   
        <h1>{name}</h1>
        <p>{role} with {yesOfExperience}</p>
         <p>Started in { yesOfExperience}  </p>
         <p>Status: {isAvailable ? "Available  for  Hire" : "not Available" }</p>

         <p>Contact: {name.toLocaleLowerCase().replace(" ", ".")}@gmail.com</p>
    </div>
  )
}