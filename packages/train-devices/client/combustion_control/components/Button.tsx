import {View} from "react-native-minecraft";

const background = require("../../assets/control.png")
export function CommonButton(props:{
    style: any,
    color: string
}){
    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: "35 80 12 13",
        ...props.style
    }}>
        <View style={{
            positionType: "absolute",
            ...props.style,
            top: "0",
            left: "0",
            backgroundImage: background,
            backgroundUV: "35 93 12 13",
            backgroundFilterColor: props.color
        }}></View>
    </View>
}

export function EmergencyButton(props:{
    style: any
}){
    return <View style={{
        positionType: "absolute",
        ...props.style,
        backgroundImage: background,
        backgroundUV: "31 10 12 12",
    }}></View>
}