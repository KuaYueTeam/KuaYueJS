import {OuterFrame} from "./Frame";
import React from "react";

export default function MenuButton(props:{style:any, activate?:boolean,children?:any}){
    return <>
        <OuterFrame childrenStyle={{
            positionType:"absolute",
            ...props.style
        }}>
            {props.children}
        </OuterFrame>
    </>
}