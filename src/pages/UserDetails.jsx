export const UserDetails = ({name, isOnline, hideOffline}) => {

    if(hideOffline && !isOnline) {
        return null;
    }

// with ternary operator------------------





if(isOnline){
   
        return (

       <div className="border p-4 rounded-md shadow-md mt-4">
            <h3>{name}</h3>
            <span className="text-green-500">* Online</span>
            <p>Status:  {isOnline}</p>
            <p>Available  for  chat</p>
            <button className="border-4 border-purple-500"> Send  Message</button>
        </div>
    )
}


return (
    <div>
    <h3>{name}</h3>
    <p>offline</p>
    <p>Not Available</p>
        </div>
)

}