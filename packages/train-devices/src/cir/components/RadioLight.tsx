import React from "react"
import {View} from "react-native-minecraft"

const texture = require('../../assets/devices.png')

export function RadioLight(props: {
    style: any,
    active: [boolean, boolean],
    color: string,
    width: number,
    height: number,
    borderColor: string
}) {
    const halfHeight = Math.floor(props.height / 2)
    const gap = props.height - 2 * halfHeight

    return (
        <View style={{
            ...props.style,
            positionType: "absolute",
            height: props.height.toString(),
            width: props.width.toString()
        }}>
            <View style={{
                positionType: "absolute",
                backgroundImage: texture,
                top: "0",
                left: "0",
                height: halfHeight.toString(),
                width: props.width.toString(),
                backgroundUV: props.active[0] ? "131 41 40 -20" : "131 1 40 20",
                backgroundFilterColor: props.color
            }}/>
            
            <View style={{
                positionType: "absolute",
                backgroundImage: texture,
                top: (halfHeight + gap).toString(),
                left: "0",
                height: halfHeight.toString(),
                width: props.width.toString(),
                backgroundUV: props.active[1] ? "131 21 40 20" : "131 21 40 -20",
                backgroundFilterColor: props.color
            }}/>

            <View style={{
                positionType: "absolute",
                backgroundImage: texture,
                top: "0",
                left: "0",
                height: halfHeight.toString(),
                width: props.width.toString(),
                backgroundUV: "131 1 40 20",
                backgroundFilterColor: props.borderColor
            }}/>

            <View style={{
                positionType: "absolute",
                backgroundImage: texture,
                top: (halfHeight + gap).toString(),
                left: "0",
                height: halfHeight.toString(),
                width: props.width.toString(),
                backgroundUV: "131 21 40 -20",
                backgroundFilterColor: props.borderColor
            }}/>
        </View>
    )
}
