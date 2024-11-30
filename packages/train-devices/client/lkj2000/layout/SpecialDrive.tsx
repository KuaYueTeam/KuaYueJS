import React from "react";
import {OuterFrame} from "../components/Frame";
import {Text, useData, View} from "react-native-minecraft";
import MenuButton from "../components/MenuButton";

const backgroundImage = require('../../assets/devices.png');

export function SpecialDrive() {
    const isActive = useData("isActive");
    return <>
        {isActive ? <SpecialDriveView style={{zIndex:"1"}}></SpecialDriveView> : null}
    </>
}

export function SpecialDriveView(props:{
    style: any
}) {
    const activeElement = useData("activeElement");
    
    return <>
        <View style={{
            top:"75",
            left:"68",
            width:"122", // 从195减少到100
            height:"50",
            backgroundImage,
            backgroundUV:"64 10 24 24",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"11 0.8",
            ...props.style
        }}>
            <Text style={{
                positionType:"absolute",
                top:"2",
                left:"2"
            }} content="非正常行车确认" fontSize="5"></Text>
            
            {/* 第一行 */}
            <MenuButton style={{
                top: "13",
                left: "5",  // 从10减少到5
                width:"42", // 从85减少到42
                height:"8"
            }} activate={activeElement === "groundSignal"}>
                <Text fontSize="5" content="1.地面信号确认" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "13",
                left: "52", // 从100减少到52
                width:"64",
                height:"8"
            }} activate={activeElement === "temporaryPermit"}>
                <Text fontSize="5" content="2.绿色许可证" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            {/* 第二行 */}
            <MenuButton style={{
                top: "25",
                left: "5",
                width:"42",
                height:"8"
            }} activate={activeElement === "ticket"}>
                <Text fontSize="5" content="3.路         票" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "25",
                left: "52",
                width:"64",
                height:"8"
            }} activate={activeElement === "speedLimit"}>
                <Text fontSize="5" content="4.转入20km/h限速模式" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            {/* 第三行 */}
            <MenuButton style={{
                top: "37",
                left: "5",
                width:"42",
                height:"8"
            }} activate={activeElement === "specialMove"}>
                <Text fontSize="5" content="5.货车特殊前行" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "37",
                left: "52",
                width:"64",
                height:"8"
            }} activate={activeElement === "exit"}>
                <Text fontSize="5" content="0.返回" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>
        </View>
    </>
}