export const Greeting = ({name="Vivek", message="Hello"}) => {
    return (
        <div className="border-4 border-indigo-500/75 mt-4 p-4">     
            <h2>{message}{name}</h2>
        </div>

    )

}