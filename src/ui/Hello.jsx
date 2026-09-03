import React from "react";


export const Hello = () => {     

    return(
        <div>
        <h1 className="text-3xl sm:text-4xl">Hello</h1>
        </div>
    )
}

export const HelloWithoutJSX = () => {
    return React.createElement('h1', {className: 'text-3xl sm:text-4xl'}, 'Hello Without JSX')
}