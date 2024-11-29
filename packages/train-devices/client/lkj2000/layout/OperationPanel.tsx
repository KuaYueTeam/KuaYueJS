import {View, Text, useEmits} from "react-native-minecraft";
import React from "react";
import {OuterFrame} from "../components/Frame";

const texture = require('../../assets/devices.png')

export default function OperationPanel(props:{
    style:any,
}){
    const clickButton = useEmits("operation");
    return <>
        <View style={{
            positionType:"absolute",
            top:"220",
            left:"0",
            height: '32',
            width: '256',
            ...props.style ?? {}
        }}>
            <OperationButtonAlertConfirm style={{
                left:"10",
                top:"5",
                width:"22",
                height:"22"
            }} text="警惕" onclick={()=>clickButton("confirmAlarm")}></OperationButtonAlertConfirm>

            <OperationAlertButtonCommon style={{
                left:"35",
                top:"3",
                width:"19",
                height:"12"
            }} text="解锁" onclick={()=>clickButton("unlock")}></OperationAlertButtonCommon>

            <OperationAlertButtonCommon style={{
                left:"35",
                top:"18",
                width:"19",
                height:"12"
            }} text="缓解" onclick={()=>clickButton("resetBreak")}></OperationAlertButtonCommon>


            <OperationButtonNumeric style={{
                left:"55",
                top:"3",
                width:"19",
                height:"12"
            }} text="向前" number="1" onclick={()=>clickButton("1_forward")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"55",
                top:"18",
                width:"19",
                height:"12"
            }}  text="向后" number="6" onclick={()=>clickButton("6_back")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"75",
                top:"3",
                width:"19",
                height:"12"
            }}  text="调车" number="2" onclick={()=>clickButton("2_shunting")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"75",
                top:"18",
                width:"19",
                height:"12"
            }}  text="开车" number="7" onclick={()=>clickButton("7_driveStart")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"95",
                top:"3",
                width:"19",
                height:"12"
            }} text="车位" number="3" onclick={()=>clickButton("3_position")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"95",
                top:"18",
                width:"19",
                height:"12"
            }}  text="校正" number="8" onclick={()=>clickButton("8_correction")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"115",
                top:"3",
                width:"19",
                height:"12"
            }}  text="进路号" number="4" onclick={()=>clickButton("4_entry_number")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"115",
                top:"18",
                width:"19",
                height:"12"
            }}  text="出入库" number="9" onclick={()=>clickButton("9_inbound_outbound")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"135",
                top:"3",
                width:"19",
                height:"12"
            }}  text="定标" number="5" onclick={()=>clickButton("5_log_position")}></OperationButtonNumeric>

            <OperationButtonNumeric style={{
                left:"135",
                top:"18",
                width:"19",
                height:"12"
            }}  text="巡检" number="0" onclick={()=>clickButton("0_check")}></OperationButtonNumeric>

            <OperationButtonCommon style={{
                left:"155",
                top:"3",
                width:"19",
                height:"12"
            }} text="查询" onclick={()=>clickButton("query")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"155",
                top:"18",
                width:"19",
                height:"12"
            }} text=" ←" onclick={()=>clickButton("left")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"175",
                top:"3",
                width:"19",
                height:"12"
            }} text=" ↑" onclick={()=>clickButton("up")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"175",
                top:"18",
                width:"19",
                height:"12"
            }} text=" ↓" onclick={()=>clickButton("down")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"195",
                top:"3",
                width:"19",
                height:"12"
            }} text="转储" onclick={()=>clickButton("store")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"195",
                top:"18",
                width:"19",
                height:"12"
            }} text=" →" onclick={()=>clickButton("right")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"215",
                top:"3",
                width:"19",
                height:"12"
            }} text="设定" onclick={()=>clickButton("settings")}></OperationButtonCommon>

            <OperationButtonCommon style={{
                left:"215",
                top:"18",
                width:"19",
                height:"12"
            }} text="确认" onclick={()=>clickButton("confirm")}></OperationButtonCommon>
        </View>
    </>
}


export function OperationButtonNumeric(props:{
    style:any,
    number?:string,
    text?:string,
    onclick?:any
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"173 1 38 24",
            ...props.style
        }} onclick={props.onclick}>
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
    text?:string,
    onclick?:any
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"173 26 38 24",
            ...props.style
        }} onclick={props.onclick}>
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
    text?:string,
    onclick?:any
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"173 51 38 24",
            ...props.style
        }} onclick={props.onclick}>
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
    text?:string,
    onclick?:any
}){
    return <>
        <View style={{
            positionType:"absolute",
            backgroundImage:texture,
            backgroundUV:"212 0 44 44",
            ...props.style
        }} onclick={props.onclick}>
            <Text style={{
                positionType:"absolute",
                left:"4",
                top:"7"
            }} fontSize={"7"} content={props.text ?? ""}></Text>
        </View>
    </>
}