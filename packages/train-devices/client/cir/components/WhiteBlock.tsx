import { View } from "react-native-minecraft";
import React from "react";

const texture = require('../../assets/devices.png');

export function WhiteBlock(props: {
    style?: any,
    children?: React.ReactNode
}) {
    return <>
        <View style={{
            positionType: 'absolute',
            backgroundImage: texture,
            backgroundUV: "144 136 8 8",
            backgroundRenderType: "nine_slice",
            backgroundNineSliceParam: "3 0.75",
            ...props.style
        }}>
            {props.children}
        </View>
    </>;
} 