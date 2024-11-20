import {View, Text} from "react-native-minecraft";
import React from "react";
import {OuterFrame} from "../components/Frame";

const texture = require('../../assets/devices.png')

export default function OperationPanel(props:{
    style:any,
}){
    return <>
        <View childrenStyle={{
            positionType:'absolute',
            top:"220",
            left:"0",
            height: '32',
            width: '256',
            ...props.style
        }}>
            <OperationButtonAlertConfirm style={{
                left:"10",
                top:"5",
                width:"22",
                height:"22"
            }} text="警惕"></OperationButtonAlertConfirm>

            <OperationAlertButtonCommon style={{
                left:"35",
                top:"3",
                width:"19",
                height:"12"
            }} text="解锁"></OperationAlertButtonCommon>

            <OperationAlertButtonCommon style={{
                left:"35",
                top:"18",
                width:"19",
                height:"12"
            }} text="缓解"></OperationAlertButtonCommon>


            <OperationButtonNumeric style={{
                left:"55",
                top:"3",
                width:"19",
                height:"12"
            }} text="向前" number="1"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"55",
                top:"18",
                width:"19",
                height:"12"
            }}  text="向后" number="6"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"75",
                top:"3",
                width:"19",
                height:"12"
            }}  text="调车" number="2"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"75",
                top:"18",
                width:"19",
                height:"12"
            }}  text="开车" number="7"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"95",
                top:"3",
                width:"19",
                height:"12"
            }} text="车位" number="3"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"95",
                top:"18",
                width:"19",
                height:"12"
            }}  text="校正" number="8"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"115",
                top:"3",
                width:"19",
                height:"12"
            }}  text="进路号" number="4"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"115",
                top:"18",
                width:"19",
                height:"12"
            }}  text="出入库" number="9"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"135",
                top:"3",
                width:"19",
                height:"12"
            }}  text="定标" number="5"></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"135",
                top:"18",
                width:"19",
                height:"12"
            }}  text="巡检" number="0"></OperationButtonNumeric>

            <OperationButtonCommon style={{
                left:"155",
                top:"3",
                width:"19",
                height:"12"
            }} text="查询"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"155",
                top:"18",
                width:"19",
                height:"12"
            }} text=" ←"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"175",
                top:"3",
                width:"19",
                height:"12"
            }} text=" ↑"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"175",
                top:"18",
                width:"19",
                height:"12"
            }} text=" ↓"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"195",
                top:"3",
                width:"19",
                height:"12"
            }} text="转储"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"195",
                top:"18",
                width:"19",
                height:"12"
            }} text=" →"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"215",
                top:"3",
                width:"19",
                height:"12"
            }} text="设定"></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"215",
                top:"18",
                width:"19",
                height:"12"
            }} text="确认"></OperationButtonCommon>


        </View>
    </>
}


export function OperationButtonNumeric(props:{
    style:any,

    number?:string,
    text?:string
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"173 1 38 24",
            ...props.style
        }}>
            <Text style={{
                positionType:"absolute",
                left:"2",
                top:"2"
            }} fontSize={"5"} content={props.text ?? ""} fontWidth={(2 / (props.text ?? "  ").length).toString()}></Text>

            <Text style={{
                positionType:"absolute",
                left:"14",
                top:"7"
            }} fontSize={"4"} content={props.number ?? ""}></Text>
        </View>
    </>
}

export function OperationButtonCommon(props:{
    style:any,
    text?:string
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"173 26 38 24",
            ...props.style
        }}>
            <Text style={{
                positionType:"absolute",
                left:"3",
                top:"3"
            }} fontSize={"6"} content={props.text ?? ""}></Text>
        </View>
    </>
}

export function OperationAlertButtonCommon(props:{
    style:any,
    text?:string
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"173 51 38 24",
            ...props.style
        }}>
            <Text style={{
                positionType:"absolute",
                left:"3",
                top:"3"
            }} fontSize={"6"} content={props.text ?? ""}></Text>
        </View>
    </>
}

export function OperationButtonAlertConfirm(props:{
    style:any,
    text?:string
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"212 0 44 44",
            ...props.style
        }}>
            <Text style={{
                positionType:"absolute",
                left:"4",
                top:"7"
            }} fontSize={"7"} content={props.text ?? ""}></Text>
        </View>
    </>
}