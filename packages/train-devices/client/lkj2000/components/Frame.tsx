import {View} from "react-native-minecraft";
import React from "react";

const texture = require('../../assets/devices.png')

export function OuterFrame(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage: texture,
            backgroundUV:"10 0 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 0.25",
            ...props.childrenStyle
        }}>
            {props.children}
        </View>
    </>
}

export function OuterFrameActivate(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage: texture,
            backgroundUV:"0 44 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 0.25",
            ...props.childrenStyle
        }}>
            {props.children}
        </View>
    </>
}

export function InnerFrame(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage: texture,
            backgroundUV:"30 0 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 0.75",
            ...props.childrenStyle
        }}>
        </View>
    </>
}
