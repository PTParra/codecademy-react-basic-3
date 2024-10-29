import React from 'react';

export const Header = (props) => {

    return(
        <>
            <img src={props.profileImg}/>
            <h1>{props.username}</h1>
        </>
    )
}