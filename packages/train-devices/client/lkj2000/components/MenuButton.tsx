import {OuterFrame, OuterFrameActivate} from "./Frame";
import React from "react";

export default function MenuButton(props:{style:any, activate?:boolean,children?:any}){
    return <>
        { props.activate ?

            <OuterFrameActivate childrenStyle={{
                positionType:"absolute",
                ...props.style
            }}>
                {props.children}
            </OuterFrameActivate>:

            <OuterFrame childrenStyle={{
                positionType:"absolute",
                ...props.style
            }}>
                {props.children}
            </OuterFrame>
        }
    </>
}