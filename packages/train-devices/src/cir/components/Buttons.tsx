import { View } from "react-native-minecraft";
import React from "react";

const texture = require('../../assets/devices.png');

export function DangerButton(props: {
    style?: any,
    children?: React.ReactNode
}) {
    return <>
        <View style={{
            positionType: 'absolute',
            backgroundImage: texture,
            backgroundUV: "128 136 8 8",
            backgroundRenderType: "nine_slice",
            backgroundNineSliceParam: "3 0.75",
            ...props.style,
            width: '18',
            height: '18',
        }}>
            {props.children}
        </View>
    </>;
}

export function LightButton(props: {
    style?: any,
    children?: React.ReactNode
}) {
    return <>
        <View style={{
            positionType: 'absolute',
            backgroundImage: texture,
            backgroundUV: "136 136 8 8",
            backgroundRenderType: "nine_slice",
            backgroundNineSliceParam: "3 0.75",
            width: '18',
            height: '18',
            ...props.style
        }}>
            {props.children}
        </View>
    </>;
}

export function DarkButton(props: {
    style?: any,
    children?: React.ReactNode
}) {
    return <>
        <View style={{
            positionType: 'absolute',
            backgroundImage: texture,
            backgroundUV: "144 128 8 8",
            backgroundRenderType: "nine_slice",
            backgroundNineSliceParam: "3 0.75",
            width: '18',
            height: '18',
            ...props.style
        }}>
            {props.children}
        </View>
    </>;
}