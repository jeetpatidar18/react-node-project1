import React from "react";

export function LibraryHome(props){
    return(
        <>
        <h1>Welcome</h1>
        <h2>{props.data}</h2>
        </>
    );
}