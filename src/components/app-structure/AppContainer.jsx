import React from "react";

export function AppContainer(props){
    return(
        <div className= "shell">
            {props.children}
        </div>
    )
}