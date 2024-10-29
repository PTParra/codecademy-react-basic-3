import React from 'react';
import { Header } from '../header/header';
import { Body } from '../body/body';

export const Card = (props) => {

    return(
        <>
            <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username}/>
            <Body comment={props.commentObject.comment} />
        </>
    )
}