import React from "react";
import {View, Text} from "react-native-minecraft";
import {WhiteBlock} from "../components/WhiteBlock";
import {RadioLight} from "../components/RadioLight";
import {TransparentFrame} from "../components/Frame";

const texture = require('../../assets/devices.png');

export default function OperationPanel(){
    return <>
        <WhiteBlock style={{
                left:'0',
                top:'0',
                width:'200',
                height:'150',
                backgroundFilterColor:'333333FF'
            }}>

            <WhiteBlock style={{
                left:'0',
                top:'0',
                width:'200',
                height:'20',
                backgroundFilterColor:'0080FFFF'
            }}>
                <View style={{
                    positionType:'absolute',
                   left: '4',
                   top: '4',
                   height: '12',
                   width: '8',
                   backgroundImage: texture,
                    backgroundUV:"128 101 14 27"
                }}></View>
                <Text style={{
                    positionType:'absolute',
                    left: '32',
                    top: '7'
                }} content="车次号:" fontSize="6"/>
                <Text style={{
                    positionType:'absolute',
                    left: '56',
                    top: '7'
                }} content="11451" color="#000000" fontSize="6"/>

                <Text style={{
                    positionType:'absolute',
                    left: '90',
                    top: '7'
                }} fontSize="6" content="机车号:" />
                <Text style={{
                    positionType:'absolute',
                    left: '114',
                    top: '7'
                }} fontSize="6"  color="#000000" content="CR400BF-05033" />

                <View style={{
                    positionType:'absolute',
                   left: '185',
                   top: '4',
                   height: '12',
                   width: '8',
                   backgroundImage:  texture,
                    backgroundUV:"174 104 18 24"
                }}></View>
            </WhiteBlock>

            <WhiteBlock style={{
                left:'0',
                top:'20',
                width:'200',
                height:'15',
                backgroundFilterColor:'CCCCCCFF'
            }}>
                <Text style={{
                    positionType:'absolute',
                    left: '32',
                    top: '5'
                }} content="尾部风压: 888" fontSize="6" color="#000000"/>
                <Text style={{
                    positionType:'absolute',
                    left: '114',
                    top: '5'
                }} content="频率: 457.500MHz" fontSize="6" color="#000000"/>
            </WhiteBlock>

            <View style={{left:'0',top:"35",positionType:'absolute'}}>
                <RadioLight style={{
                    left: "4",
                    top: "3"
                }} active={[false,true]} color="FFFF00FF" width={8} height={8} borderColor="FFFF00FF"></RadioLight>
                <Text style={{
                    positionType:'absolute',
                    left: '16',
                    top: '5'
                }} content="LBJ 已连接" fontSize="6" color="#00FF00"/>

                <Text style={{
                    positionType:'absolute',
                    left: '160',
                    top: '5'
                }} content="23:59:59" fontSize="6" color="#FFFF00"/>

                <Text style={{
                    positionType:'absolute',
                    left: '8',
                    top: '55'
                }} content="手动" fontSize="6" color="#FFFF00"/>


                <Text style={{positionType:"absolute", top:"16",left:"22"}} color="#FF0000" content="注意! 京广上行 1145.14 公里列车报警, 注意运行!" fontSize="6"/>
                <Text style={{positionType:"absolute", top:"24",left:"32"}} color="#FF0000" content="车次号: 41919  机车号:CR400BF-05033" fontSize="6"/>
                <Text style={{positionType:"absolute", top:"32",left:"64"}} color="#FFFF00" content='按"确认"键停止语音提示' fontSize="6"/>


                <Text style={{
                    positionType:'absolute',
                    left: '32',
                    top: '55'
                }} content="京广上行 长沙-株洲" fontSize="6" color="#00FF00"/>

                <Text style={{
                    positionType:'absolute',
                    left: '128',
                    top: '55'
                }} content="C 457.000MHz" fontSize="6" color="#00FF00"/>


            </View>

            <WhiteBlock style={{
                left:'0',
                top:'100',
                width:'200',
                height:'25',
                backgroundFilterColor:'CCCCCCFF'
            }}>

                <RadioLight style={{
                    left: "4",
                    top: "5"
                }} active={[true,false]} color="00FF00FF" width={6} height={6} borderColor="000000FF"></RadioLight>

                <Text style={{
                    positionType:'absolute',
                    left: '16',
                    top: '5'
                }} content="接 收" fontSize="6" color="#000000"/>

                <RadioLight style={{
                    left: "4",
                    top: "15"
                }} active={[true,false]} color="FF0000FF" width={6} height={6} borderColor="000000FF"></RadioLight>

                <Text style={{
                    positionType:'absolute',
                    left: '16',
                    top: '15'
                }} content="发 射" fontSize="6" color="#000000"/>
            </WhiteBlock>


            <WhiteBlock style={{
                left:'0',
                top:'125',
                width:'200',
                height:'25',
                backgroundFilterColor:'0080FFFF'
            }}>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '0',
                    width:'25',
                    height:'25',
                }}> </TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '25',
                    width:'25',
                    height:'25',
                }}><Text style={{top:"9",left:"4"}} content="调度" fontSize="8"/></TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '50',
                    width:'25',
                    height:'25',
                }}> </TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '75',
                    width:'25',
                    height:'25',
                }}> </TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '100',
                    width:'25',
                    height:'25',
                }}>
                    <Text style={{positionType:"absolute", top:"4",left:"4"}} content="隧道" fontSize="8"/>
                    <Text style={{positionType:"absolute",top:"13",left:"4"}} content="司机" fontSize="8"/>
                </TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '125',
                    width:'25',
                    height:'25',
                }}>

                    <Text style={{positionType:"absolute", top:"4",left:"4"}} content="隧道" fontSize="8"/>
                    <Text style={{positionType:"absolute",top:"13",left:"4"}} content="车站" fontSize="8"/>
                </TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '150',
                    width:'25',
                    height:'25',
                }}>

                    <Text style={{positionType:"absolute", top:"4",left:"4"}} content="平原" fontSize="8"/>
                    <Text style={{positionType:"absolute",top:"13",left:"4"}} content="司机" fontSize="8"/>
                </TransparentFrame>
                <TransparentFrame style={{
                    positionType: 'absolute',
                    left: '175',
                    width:'25',
                    height:'25',
                }}>

                    <Text style={{positionType:"absolute", top:"4",left:"4"}} content="平原" fontSize="8"/>
                    <Text style={{positionType:"absolute",top:"13",left:"4"}} content="车站" fontSize="8"/>
                </TransparentFrame>
            </WhiteBlock>
        </WhiteBlock>
    </>
}