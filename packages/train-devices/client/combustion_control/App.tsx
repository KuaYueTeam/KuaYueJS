import React from 'react'
import {Text, View} from "react-native-minecraft";
import {MenuChannelComponent, MenuChannelReceiver} from "react-native-minecraft";
import CombustionControlBackground from './components/CombustionBackground'
import {TrainGauge} from "./components/TrainGauge";
import {CommonButton} from "./components/Button";
import TrainControlSwitcher from "./components/TrainControlSwitcher";
import {
    DirectionController,
    SpeedController,
    TrainHandleBreakBackground,
    TrainHandleSingleBackground
} from "./components/TrainHandle";

const background = require("../assets/control.png")
export default function TrainControl(){
    return <>
        <MenuChannelReceiver>
            <MenuChannelComponent id="root">
                <CombustionControlMain/>
            </MenuChannelComponent>
        </MenuChannelReceiver>
    </>;
}

function CombustionControlMain(){
    return <>
        <CombustionControlBackground style={{
            height: "700",
            width: "5000",
            top: "50",
            left: "0",
        }}>
            <TrainGauge style={{
                left: "250",
                top: "200",
                height: "300",
                width: "300"
            }}></TrainGauge>

            <TrainGauge style={{
                left: "600",
                top: "200",
                height: "300",
                width: "300"
            }}></TrainGauge>

            <CommonButton style={{
                top: "520",
                left: "250",
                width: "100",
                height: "100"
            }} color="00FF00FF"></CommonButton>

            <CommonButton style={{
                top: "520",
                left: "380",
                width: "100",
                height: "100"
            }} color="00FF00FF"></CommonButton>

            <CommonButton style={{
                top: "520",
                left: "510",
                width: "100",
                height: "100"
            }} color="00FF00FF"></CommonButton>

            <CommonButton style={{
                top: "520",
                left: "640",
                width: "100",
                height: "100"
            }} color="00FF00FF"></CommonButton>

            <CommonButton style={{
                top: "520",
                left: "770",
                width: "100",
                height: "100"
            }} color="00FF00FF"></CommonButton>

            <TrainControlSwitcher style={{
                top: "300",
                left: "950",
                width: "120",
                height: "140"
            }}></TrainControlSwitcher>

            <TrainControlSwitcher style={{
                top: "430",
                left: "950",
                width: "120",
                height: "140"
            }}></TrainControlSwitcher>

            <TrainControlSwitcher style={{
                top: "300",
                left: "1075",
                width: "120",
                height: "140"
            }}></TrainControlSwitcher>

            <TrainControlSwitcher style={{
                top: "430",
                left: "1075",
                width: "120",
                height: "140"
            }}></TrainControlSwitcher>

            <TrainControlSwitcher style={{
                top: "300",
                left: "1200",
                width: "120",
                height: "140"
            }}></TrainControlSwitcher>

            <TrainControlSwitcher style={{
                top: "430",
                left: "1200",
                width: "120",
                height: "140"
            }}></TrainControlSwitcher>

            <TrainHandleBreakBackground style={{
               top: "80",
               left: "1400",
               width: "867",
               height: "603"
            }}></TrainHandleBreakBackground>

            <SpeedController style={{
                top: "61",
                left: "2300",
            }}></SpeedController>
            <DirectionController style={{
                top: "61",
                left: "2775"
            }}></DirectionController>

        </CombustionControlBackground>
    </>
}