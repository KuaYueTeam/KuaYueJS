import React from "react";
import { View } from "react-native-minecraft";

const texture = require('../../assets/devices.png')

export function TransparentFrame(props:{
    style?: any,
    children?: any
}) {
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage: texture,
            backgroundUV:"40 0 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 1",
            ... (props.style ?? {})
        }}>
            {props.children}
        </View>
    </>
}