import React from "react";
import {Text, View} from "react-native-minecraft";
import {Input} from "./Input";

export default function LabeledInput(props:{
    style: any,
    text: string,
    textWidth: number,
    inputWidth: number,
    height:number,
    fontSize: number
}){
    return <>
        <View style={{
            positionType:'absolute',
            ...props.style
        }}>
            <Text style={{
                positionType:'absolute',
                height:props.height.toString(),
                top:"1"
            }} content={props.text} fontSize={props.fontSize.toString()} color="#000000"></Text>
            <Input childrenStyle={{
                positionType:'absolute',
                left:props.textWidth.toString(),
                width:props.inputWidth.toString(),
                height:(props.height+2).toString()
            }}></Input>
        </View>
    </>
}