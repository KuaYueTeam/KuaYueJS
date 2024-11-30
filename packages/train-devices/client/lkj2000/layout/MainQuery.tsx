import React from "react";
import {Text, useData, View} from "react-native-minecraft";
import MenuButton from "../components/MenuButton";

const backgroundImage = require('../../assets/devices.png');

export function MainQuery() {
    const isActive = useData("active");
    return <>
        {isActive ? <MainQueryView style={{zIndex:"1"}}></MainQueryView> : null}
    </>
}

export function MainQueryView(props:{
    style: any
}) {
    const activeElement = useData("activeElement");
    
    return <>
        <View style={{
            top:"80",
            left:"80",
            width:"92",
            height:"75",
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
            }} content="查询选择" fontSize="5"></Text>
            
            {/* 第一行 */}
            <MenuButton style={{
                top: "13",
                left: "4",
                width:"40",
                height:"8"
            }} activate={activeElement === "trainInfo"}>
                <Text fontSize="5" content="1.列车信息" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "13",
                left: "47",
                width:"40",
                height:"8"
            }} activate={activeElement === "workStatus"}>
                <Text fontSize="5" content="2.工况显示" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            {/* 第二行 */}
            <MenuButton style={{
                top: "25",
                left: "4",
                width:"40",
                height:"8"
            }} activate={activeElement === "allStatus"}>
                <Text fontSize="5" content="3.全部显示" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "25",
                left: "47",
                width:"40",
                height:"8"
            }} activate={activeElement === "deviceStatus"}>
                <Text fontSize="5" content="4.设备状态" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            {/* 第三行 */}
            <MenuButton style={{
                top: "37",
                left: "4",
                width:"40",
                height:"8"
            }} activate={activeElement === "checkParams"}>
                <Text fontSize="5" content="5.检修参数" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "37",
                left: "47",
                width:"40",
                height:"8"
            }} activate={activeElement === "setParams"}>
                <Text fontSize="5" content="6.设定参数" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            {/* 第四行 */}
            <MenuButton style={{
                top: "49",
                left: "4",
                width:"40",
                height:"8"
            }} activate={activeElement === "test"}>
                <Text fontSize="5" content="7.库内试验" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "49",
                left: "47",
                width:"40",
                height:"8"
            }} activate={activeElement === "infoQuery"}>
                <Text fontSize="5" content="8.信息查询" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            {/* 第五行 */}
            <MenuButton style={{
                top: "61",
                left: "4",
                width:"40",
                height:"8"
            }} activate={activeElement === "callGround"}>
                <Text fontSize="5" content="9.呼叫地面" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "61",
                left: "47",
                width:"40",
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
