export const CardWrapper = ({title, children}) => {
    return (
        <div className="border-4 border-indigo-500/75 mt-4 p-4">    
           <h2>{title}</h2>
           <div className="bg-sky-200 p-4">
                 {children}
           </div>
        </div>  
    )}