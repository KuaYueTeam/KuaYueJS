import {} from 'react'
import {View} from "react-native-minecraft";
import {CommonButton, EmergencyButton} from "./components/Button";
import {TrainGauge} from "./components/TrainGauge";

const background = require("../assets/control.png")
export default function TrainControl(){
    return <>
        <View style={{
            height: "68",
            width: "508",
            left: "2",
            top: "2",
            positionType: "absolute",
            backgroundImage: background,
            backgroundUV: "0 188 68 68",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"20 1",
        }}>
            <CommonButton style={{
                top: "48",
                left: "12",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <CommonButton style={{
                top: "48",
                left: "25",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <CommonButton style={{
                top: "48",
                left: "50",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <CommonButton style={{
                top: "48",
                left: "63",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <CommonButton style={{
                top: "48",
                left: "90",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <CommonButton style={{
                top: "48",
                left: "102",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <CommonButton style={{
                top: "48",
                left: "114",
                width: "10",
                height: "10"
            }} color="FF0000FF"></CommonButton>
            <EmergencyButton style={{
                top: "47",
                left: "128",
                width: "12",
                height: "12"
            }}></EmergencyButton>
            <TrainGauge style={{
                top: "6",
                left: "8",
                width: "31",
                height: "31"
            }}></TrainGauge>
            <TrainGauge style={{
                top: "6",
                left: "46",
                width: "31",
                height: "31"
            }}></TrainGauge>
            <TrainGauge style={{
                top: "6",
                left: "98",
                width: "33",
                height: "33"
            }}></TrainGauge>
        </View>
    </>
}