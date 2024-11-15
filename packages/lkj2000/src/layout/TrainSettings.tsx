import React from "react";
import {OuterFrame} from "../components/Frame";
import {Text, View} from "react-native-minecraft";
import LabeledInput from "../components/LabeledInput";
import MenuButton from "../components/MenuButton";

export default function TrainSettings(props:{
    style: any
}){
    return <>
        <OuterFrame childrenStyle={{
            top:"45",
            left:"30",
            width:"195",
            height:"140"
        }}>
            <Text style={{
                positionType:"absolute",
                top:"5",
                left:"5"
            }} content="参数设定" color="#000000" fontSize="5"></Text>
            <View>
                <LabeledInput style={{
                    top: "20",
                    left: "5"
                }} text="司机号" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "30",
                    left: "5"
                }} text="副司机号" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "40",
                    left: "5"
                }} text="区段号" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "50",
                    left: "5"
                }} text="车站号" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "60",
                    left: "5"
                }} text="车次种类" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "70",
                    left: "5"
                }} text="车次号" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "80",
                    left: "5"
                }} text="列车种类" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "90",
                    left: "5"
                }} text="本/补" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "20",
                    left: "58"
                }} text="总  重" textWidth={23} inputWidth={45} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "30",
                    left: "58"
                }} text="辆  数" textWidth={23} inputWidth={45} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "40",
                    left: "58"
                }} text="计  长" textWidth={23} inputWidth={45} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "50",
                    left: "58"
                }} text="车速等级" textWidth={23} inputWidth={45} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "20",
                    left: "130"
                }} text="载重" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "30",
                    left: "130"
                }} text="客车" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "40",
                    left: "130"
                }} text="重车" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "50",
                    left: "130"
                }} text="空车" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "60",
                    left: "130"
                }} text="非运用车" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "70",
                    left: "130"
                }} text="代客车" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>

                <LabeledInput style={{
                    top: "80",
                    left: "130"
                }} text="守车" textWidth={23} inputWidth={26} height={5} fontSize={5}></LabeledInput>
            </View>

            <MenuButton style={{
                top: "110",
                left: "10",
                width:"27",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="4 主速度" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "40",
                width:"27",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="3 系统" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "70",
                width:"27",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="2 时间" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "100",
                width:"27",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="1 检修" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "130",
                width:"27",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="0 取消" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "160",
                width:"27",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="  确 定  " style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "122",
                left: "10",
                width:"57",
                height:"8"
            }} activate={false}>
                <Text fontSize="5" content="5 双针表切换" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>
        </OuterFrame>
    </>
}