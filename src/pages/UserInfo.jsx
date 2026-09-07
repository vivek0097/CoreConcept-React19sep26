export const UserInfo = ({name,age, email, city}) => {
    return (
        <div className="border-4 border-indigo-500/75 mt-4 p-4">    
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
        </div>

    )
}