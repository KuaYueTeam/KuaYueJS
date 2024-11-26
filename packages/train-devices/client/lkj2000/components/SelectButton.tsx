import {View} from "react-native-minecraft";
import React from "react";

const texture = require('../../assets/devices.png')
export function SelectButton(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage:texture,
            backgroundUV:"0 10 24 24",
            ...props.childrenStyle
        }}>
        </View>
    </>
}