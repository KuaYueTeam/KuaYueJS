import {View} from "react-native-minecraft";
import React, {useState} from "react";

const background = require("../../assets/control.png");

export function TrainHandleBreakBackground(props:  {
    style?: any,
    children?: any
}){
    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: "160 80 102 71",
        ...props.style
    }}>
        {props.children}
    </View>
}

export function TrainHandleSingleBackground(props:  {
    style?: any,
    children?: any
}){
    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: "264 80 53 72",
        ...props.style
    }}>
        {props.children}
    </View>
}

export function TrainHandleController(props: {
    uv: any,
    style?: any,
    xOffset?: number
}){
    const [dragX, setDragX] = useState(0);

    function onDrag(ev: any) {
        const delta = ev.getDelta();
        setDragX(dragX + delta.getY());
    }

    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: props.uv,
        ...props.style,
        top: (dragX + (props.xOffset || 0)).toString(),
    }} onMouseDrag={onDrag}>
    </View>
}

export function SpeedController(props:{
    style?: any
}){
    return <>
        <TrainHandleSingleBackground style={{
            width: "450",
            height: "612",
            ...props.style
        }}>
            <TrainHandleController uv="24 144 41 19" style={{
                width: "348",
                height: "161",
                left: "50"
            }} xOffset={390}></TrainHandleController>
        </TrainHandleSingleBackground>
    </>
}

export function DirectionController(props:{
    style?: any
}){
    return <>
        <TrainHandleSingleBackground style={{
            width: "450",
            height: "612",
            ...props.style
        }}>
            <TrainHandleController uv="0 144 24 23" style={{
                width: "204",
                height: "204",
                left: "120"
            }} xOffset={220}></TrainHandleController>
        </TrainHandleSingleBackground>
    </>
}