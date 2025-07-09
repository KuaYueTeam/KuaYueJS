import {View} from "react-native-minecraft";
import React from "react";

const background = require("../../assets/control.png")

export default function CombustionControlBackground(props:  {
    style?: any,
    children?: any
}) {
    return <View style={{
        positionType: "absolute",
        ...props.style ?? {},
        backgroundImage: background,
        backgroundUV: "0 0 548 80"
    }}>
        {props.children}
    </View>
}
