import React from "react";
import {View, Text} from "react-native-minecraft";
import {WhiteBlock} from "../../cir/components/WhiteBlock";
import {OuterFrame} from "../components/Frame";


const backgroundImage = require('../../assets/devices.png')
export default function NoticeQuery(props:{
    style?: any
}){
    return <>
        <View style={{
                height: '212',
                width: '256',
                positionType:'absolute',
                backgroundImage,
                backgroundUV:"24 10 24 24",
                backgroundRenderType:"nine_slice",
                backgroundNineSliceParam:"11 1",
                ...props.style
            }}>
                <Text content="全部揭示查询" fontSize="6" style={{
                    left:"2",
                    top:"2"
                }}/>
            <WhiteBlock style={{
                top: "9",
                left: "0",
                height: "202",
                width: "254",
                backgroundFilterColor:"CCCCCCFF"
            }}>
                <WhiteBlock style={{
                top: "0",
                left: "0",
                height: "175",
                width: "254"
            }}>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"0",
                        top:"0",
                        width: "20",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="序号" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"20",
                        top:"0",
                        width: "45",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="工务线路名" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"65",
                        top:"0",
                        width: "20",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="行别" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"85",
                        top:"0",
                        width: "60",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="位置" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"145",
                        top:"0",
                        width: "35",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="起止日期" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"180",
                        top:"0",
                        width: "35",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="起止时间" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"215",
                        top:"0",
                        width: "20",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="客限" color="#000000" fontSize="6"/></OuterFrame>
                    <OuterFrame childrenStyle={{
                        positionType:"absolute",
                        height:"8",
                        left:"235",
                        top:"0",
                        width: "20",
                        backgroundNineSliceParam:"3 1",
                    }}><Text style={{
                        top: "1",
                        left: "4"
                    }} content="货限" color="#000000" fontSize="6"/></OuterFrame>

                    <WhiteBlock style={{
                        top:"8",
                        left:"0",
                        width: "254",
                        height: "7",
                        backgroundFilterColor: "00FF00FF"
                    }}>
                        <Text style={{
                            positionType:"absolute",
                        top: "1",
                        left: "6"
                        }} content="  01  观塘线路所       上行   695.00~700.00" color="#000000" fontSize="5"/>

                        <Text style={{
                            positionType:"absolute",
                        top: "1",
                        left: "147"
                        }} content="01-09~01-09   23:00~23:59" color="#000000" fontSize="5" fontWidth="0.75"/>


                        <Text style={{
                            positionType:"absolute",
                        top: "1",
                        left: "220"
                        }} content="特定   引导" color="#000000" fontSize="5"/>
                    </WhiteBlock>

                    <WhiteBlock style={{
                        top:"15",
                        left:"0",
                        width: "254",
                        height: "7",
                        backgroundFilterColor: "FF0000FF"
                    }}>
                        <Text style={{
                            positionType:"absolute",
                        top: "1",
                        left: "6"
                        }} content="  01  观塘线路所       上行   695.00~700.00" color="#000000" fontSize="5"/>

                        <Text style={{
                            positionType:"absolute",
                        top: "1",
                        left: "147"
                        }} content="01-09~01-09   23:00~23:59" color="#000000" fontSize="5" fontWidth="0.75"/>


                        <Text style={{
                            positionType:"absolute",
                        top: "1",
                        left: "220"
                        }} content="60   40" color="#000000" fontSize="5"/>
                    </WhiteBlock>
            </WhiteBlock>

            </WhiteBlock>
        </View>
    </>;
}