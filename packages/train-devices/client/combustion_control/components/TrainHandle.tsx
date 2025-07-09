import {View, Text} from "react-native-minecraft";
import React, {useState, useImperativeHandle} from "react";

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
    xOffset?: number,
    onValueChange?: (x: number)=>number | null,
    maxDrag?: number
    segments?: number,
    ref?: any
}){
    const [userDragX, setUserDragX] = useState(0);
    const [dragX, setDragX] = useState(0);

    const [value, setValue] = useState(0);

    function onDrag(ev: any) {
        console.info("X")
        const delta = ev.getDelta();
        const perSegmentLength = (props.segments && props.maxDrag) ? (props.maxDrag || 100) / (props.segments || 1) : 1;

        setUserDragX(userDragX + delta.getY());
        setDragX(
            Math.max(0,
                Math.min(props.maxDrag || Number.MAX_SAFE_INTEGER, userDragX)
            )
        );

        const newValue = Math.round(Math.max(0,
            Math.min(props.maxDrag || Number.MAX_SAFE_INTEGER, userDragX)
        ) / (perSegmentLength || 1));

        if(newValue != value) {
            setValue(newValue);
            if(props.onValueChange)
                props.onValueChange(newValue);
        }
    }

    function onDragEnd(ev: any){
        const perSegmentLength = (props.segments && props.maxDrag) ? (props.maxDrag || 100) / (props.segments || 1) : 1;
        setDragX(
            Math.round(
                Math.max(0,
                    Math.min(props.maxDrag || Number.MAX_SAFE_INTEGER, userDragX)
                ) / (perSegmentLength || 1)
            ) * (perSegmentLength || 1)
        );
        setUserDragX(dragX);
    }

    useImperativeHandle(props.ref, () => ({
        setValue: (val)=>{
            const perSegmentLength = (props.segments && props.maxDrag) ? (props.maxDrag || 100) / (props.segments || 1) : 1;
            const newVal = val * perSegmentLength
            setDragX(newVal)
            setUserDragX(newVal)
            setValue(val)
        }
    }))


    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: props.uv,
        ...props.style,
        top: (dragX + (props.xOffset || 0)).toString(),
    }} onMouseDrag={onDrag} onMouseUp={onDragEnd} onMouseDragEnd={onDragEnd}>
        {/*<Text fontSize={"24"} content={dragX.toString()}></Text>*/}
    </View>
}

export function SpeedController(props:{
    style?: any,
    onValueChange: (x: number)=>void
}){
    const [value, setValue] = useState(0);
    function forwardValue(val) {
        setValue(val)
        if(props.onValueChange)
            props.onValueChange(val)
        return 0
    }
    return <>
        <TrainHandleSingleBackground style={{
            width: "450",
            height: "612",
            ...props.style
        }}>

            <Text style={{
                top: "30",
                left: "200"
            }} fontSize="36" content={`P${8-value.toString()}`}></Text>
            <TrainHandleController uv="24 144 41 19" style={{
                width: "348",
                height: "161",
                left: "50"
            }} xOffset={90} maxDrag={300} segments={8} onValueChange={forwardValue}></TrainHandleController>
        </TrainHandleSingleBackground>
    </>
}

export function DirectionController(props:{
    style?: any,
    ref?: any,
    onValueChange?: (x: number)=>void
}){
    const [value, setValue] = useState(0);
    function forwardValue(val) {
        setValue(val)
        if(props.onValueChange)
            props.onValueChange(val)
        return 0
    }
    return <>
        <TrainHandleSingleBackground style={{
            width: "450",
            height: "612",
            ...props.style
        }}>
            <Text style={{
                top: "30",
                left: "200"
            }} fontSize="36" content={["↑", "-", "↓"][value.toString()] || "?"}></Text>

            <TrainHandleController uv={["48 121 24 23", "0 144 24 23", "24 121 24 23"][value.toString()] || "0 144 24 23"} style={{
                width: "204",
                height: "204",
                left: "120"
            }} xOffset={90} maxDrag={280} segments={2} ref={props.ref} onValueChange={forwardValue}></TrainHandleController>
        </TrainHandleSingleBackground>
    </>
}