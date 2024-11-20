import {View} from "react-native-minecraft";
import React from "react";

const texture = require('../../assets/devices.png')
export function Panel(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage: texture,
            backgroundUV:"0 0 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 0.75",
            ...props.childrenStyle
        }}>
        </View>
    </>
}