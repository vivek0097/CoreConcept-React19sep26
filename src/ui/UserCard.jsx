import {UserInfo} from "../pages/UserInfo"
export const UserCard = ({id, ...rest}) => {
    return (
        <div className="border-4 border-indigo-500/75 mt-4 p-4">    
        <h2>User Details</h2>    
         <UserInfo {...rest} />

        </div>

    )
}



//another way--------------------------------------

// export const UserCard = (props) => {
//     return (
//         <div className="border-4 border-indigo-500/75 mt-4 p-4">    
//         <h2>User Details</h2>    
//          <UserInfo {...props} />

//         </div>

//     )
// }



//one  more way--------------------------------------

// export const UserCard = ({name, age, email, city}) => {
//     return (
//         <div className="border-4 border-indigo-500/75 mt-4 p-4">    
//         <h2>User Details</h2>    
//          <UserInfo name={name} age={age} email={email} city={city} />

//         </div>

//     )
// }