import React, {useState, useEffect} from "react";
import {View, Text, MenuChannelComponent, useData} from "react-native-minecraft";
import {OuterFrame} from "../components/Frame";
import {SignalLight} from "../components/SignalLight";
import TrainSettings, {TrainSettingsView} from "./TrainSettings";
import {SpecialDrive} from "./SpecialDrive";
import {MainQuery} from "./MainQuery";

const backgroundImage = require('../../assets/devices.png')

export default function MainEntry(){
    return <>
        <MenuChannelComponent id="settings"><TrainSettings style={{zIndex:"1"}}/></MenuChannelComponent>
        <MainEntryView speed="0" speedLimit="0" nextSignalDistance="0" nextSignal="" mileage="" infoDialog={null} light="UU"/>
        <MenuChannelComponent id="specialDrive"><SpecialDrive style={{zIndex:"1"}}/></MenuChannelComponent>
        <MenuChannelComponent id="mainQuery"><MainQuery style={{zIndex:"1"}}/></MenuChannelComponent>
    </>
}


export function MainEntryView(props:{
    speed: number,
    speedLimit:number,
    nextSignalDistance: number,
    nextSignal: string,
    mileage: string,
    infoDialog?: null | {
        text: string
    },
    light: string,
    style: any
}){
    const length = useData("settings.calculatedLength");
    const speed = useData("speed");
    const [displayedLength, setDisplayedLength] = useState(0);
    useEffect(()=>{
        let _length = parseInt(length);
        if(!isNaN(_length) && _length > 0)
            setDisplayedLength(Math.min(_length / 100, 30));
        else
            setDisplayedLength(0);
    },[length]);
    return <>
            <View style={{
                positionType: 'absolute',
                height: '212',
                width: '256',
                backgroundImage,
                backgroundUV:"0 0 10 10",
                backgroundRenderType:"nine_slice",
                backgroundNineSliceParam:"5 0.75",
                ...props.style
            }}>
                <DataArea childrenStyle={{
                    height:'20',
                    width:'20',
                    top:'3',
                    left:'3'
                }}>
                    <SignalLight style={{
                        top:"2",
                        left:"2"
                    }} type={props.light}></SignalLight>
                </DataArea>
                <OuterFrame childrenStyle={{
                    height:'5',
                    width:'10',
                    top:'3',
                    left:'23'
                }}>
                </OuterFrame>
                <OuterFrame childrenStyle={{
                    height:'5',
                    width:'10',
                    top:'8',
                    left:'23'
                }}></OuterFrame>
                <OuterFrame childrenStyle={{
                    height:'5',
                    width:'10',
                    top:'13',
                    left:'23'
                }}></OuterFrame>
                <OuterFrame childrenStyle={{
                    height:'5',
                    width:'10',
                    top:'18',
                    left:'23'
                }}></OuterFrame>
                <BigDataAreaWithText childrenStyle={{
                    height:'24',
                    width:'25',
                    top:'3',
                    left:'40'
                }} data={(speed?.toString() ?? "----")} color="#00E000">

                </BigDataAreaWithText>

                <BigDataAreaWithText childrenStyle={{
                    height:'24',
                    width:'25',
                    top:'3',
                    left:'75'
                }} data={props.speedLimit.toString()} color="#FF0000"></BigDataAreaWithText>

                <BigDataAreaWithText childrenStyle={{
                    height:'24',
                    width:'45',
                    top:'3',
                    left:'110'
                }} data={props.nextSignalDistance.toString()} color="#FFFF80"></BigDataAreaWithText>

                <NextSignal childrenStyle={{
                    top:'3',
                    left:'170'
                }} name={props.nextSignal.toString()}></NextSignal>

                <MileageData childrenStyle={{
                    top:'12',
                    left:'170'
                }} mileage={props.mileage.toString()}></MileageData>
                <DataArea childrenStyle={{
                    height:'24',
                    width:'38',
                    top:'3',
                    left:'215'
                }}></DataArea>

                <DataArea childrenStyle={{
                    height:'120',
                    width:'215',
                    top:'35',
                    left:'20'
                }}></DataArea>
                <DataArea childrenStyle={{
                    height:'40',
                    width:'215',
                    top:'155',
                    left:'20'
                }}></DataArea>

                {false ? <InfoArea childrenStyle={{
                   top:'40',
                   left:'78',
                   width:'100',
                   height:'40',
                   zIndex:'2'
                }}>
                    <Text style={{
                        positionType:'absolute',
                        left: "3",
                        top: "4"
                    }} content="司机号: 1145" fontSize="5"></Text>

                    <Text style={{
                        positionType:'absolute',
                        left: "3",
                        top: "11"
                    }} content="区段号: 1419" fontSize="5"></Text>

                    <Text style={{
                        positionType:'absolute',
                        left: "3",
                        top: "18"
                    }} content="总重: 1981" fontSize="5"></Text>

                    <Text style={{
                        positionType:'absolute',
                        left: "3",
                        top: "25"
                    }} content="东风4（358）" fontSize="5"></Text>
                    <Text style={{
                        positionType:'absolute',
                        left: "3",
                        top: "32"
                    }} content="车速等级: " fontSize="5"></Text>
                    <Text style={{
                        positionType:'absolute',
                        left: "48",
                        top: "4"
                    }} content="车次: T1145" fontSize="5"></Text>
                    <Text style={{
                        positionType:'absolute',
                        left: "48",
                        top: "11"
                    }} content="车站号: 5033" fontSize="5"></Text>
                    <Text style={{
                        positionType:'absolute',
                        left: "36",
                        top: "18"
                    }} content="辆数: 24" fontSize="5"></Text>
                    <Text style={{
                        positionType:'absolute',
                        left: "60",
                        top: "18"
                    }} content="计长: 256.0" fontSize="5"></Text>

                    <Text style={{
                        positionType:'absolute',
                        left: "48",
                        top: "25"
                    }} content="轮径: 1050.0" fontSize="5"></Text>

                    <Text style={{
                        positionType:'absolute',
                        left: "28",
                        top: "32"
                    }} content="客5 (80km/h)" color='#FFFF00' fontSize="5"></Text>
                </InfoArea> : null }

                <View style={{
                    left:"172",
                    top:"36",
                    zIndex:'3'
                }}>
                    <InfoArea childrenStyle={{
                        top:'0',
                        left:'0',
                        width:'62',
                        height:'14'
                    }}>
                        <Text style={{
                            positionType:"absolute",
                            top:'2',
                            left:'3',
                        }} fontSize="4" content="1>        km/h        m"></Text>
                        <Text style={{
                            positionType:"absolute",
                            top:'2',
                            left:'22',
                        }} fontSize="4" content="30" textAlign="rightTop" color="#cc0000"></Text>

                        <Text style={{
                            positionType:"absolute",
                            top:'2',
                            left:'50',
                        }} fontSize="4" content="30" textAlign="rightTop" color="#ffff00"></Text>
                        <Text style={{
                            positionType:"absolute",
                            top:'8',
                            left:'3',
                        }} fontSize="4" content="100.00~600.00km"></Text>
                    </InfoArea>
                    <InfoArea childrenStyle={{
                        top:'14',
                        left:'0',
                        width:'62',
                        height:'8'
                    }}>
                        <Text style={{
                            positionType:"absolute",
                            top:'2',
                            left:'3',
                        }} fontSize="4" content="揭示解除: 转储 + <序号>" textAlign="leftTop" color="#ffff00"></Text>
                    </InfoArea>
                </View>

                <View style={{
                    left:"16",
                    top:"35"
                }}>
                    {
                        ["","100","","80","","60","","40","","20","","0"].map((t,i,n)=>{
                            if(t == "")
                                return <View style={{
                                    positionType:"absolute",
                                    backgroundImage,
                                    backgroundUV:"64 0 8 1",
                                    width:"2",
                                    height:"1",
                                    top:((i * 118) / (n.length - 1)).toString(),
                                    left:"2"
                                }}></View>;

                            return <>
                                <Text style={{
                                    positionType:"absolute",
                                    top:((i * 118) / (n.length - 1)).toString(),
                                }} fontSize="5" content={t} textAlign="rightMid" color="#000000"></Text>
                                <View style={{
                                    positionType:"absolute",
                                    backgroundImage,
                                    backgroundUV:"64 0 8 1",
                                    width:"4",
                                    height:"1",
                                    top:((i * 118) / (n.length - 1)).toString(),
                                    left:"0"
                                }}></View>
                                <View style={{
                                    positionType:"absolute",
                                    backgroundImage,
                                    backgroundUV:"64 1 8 1",
                                    width:"213",
                                    height:"1",
                                    top:((i * 118) / (n.length - 1)).toString(),
                                    left:"5"
                                }}></View>
                            </>

                        })
                    }

                    <Text style={{
                        positionType:"absolute",
                        top:"128",
                        left:"4"
                    }} fontSize="8" fontWidth="0.5" content="纵断面" textAlign="rightMid" color="#000000"></Text>
                    <View style={{
                        positionType:"absolute",
                        backgroundImage,
                        backgroundUV:"64 1 8 1",
                        width:"213",
                        height:"1",
                        top:"133",
                        left:"5"
                    }}></View>

                    <Text style={{
                        positionType:"absolute",
                        top:"141",
                        left:"4"
                    }} fontSize="8" fontWidth="0.7" content="曲线" textAlign="rightMid" color="#000000"></Text>

                    <View style={{
                        positionType:"absolute",
                        backgroundImage,
                        backgroundUV:"64 1 8 1",
                        width:"213",
                        height:"1",
                        top:"146",
                        left:"5"
                    }}></View>

                    <Text style={{
                        positionType:"absolute",
                        top:"154",
                        left:"4"
                    }} fontSize="8" fontWidth="0.5" content="道桥隧" textAlign="rightMid" color="#000000"></Text>


                    <View style={{
                        positionType:"absolute",
                        backgroundImage,
                        backgroundUV:"72 0 1 8",
                        width:"1",
                        height:"159",
                        top:"1",
                        left:"40"
                    }}></View>

                    <View style={{
                        positionType:"absolute",
                        backgroundImage,
                        backgroundUV:"64 3 8 1",
                        width:displayedLength.toString(),
                        height:"2",
                        top:"115",
                        left:(37 - displayedLength).toString(),
                    }}></View>
                    <View style={{
                        positionType:"absolute",
                        backgroundImage,
                        backgroundUV:"64 4 4 4",
                        width:"2",
                        height:"2",
                        top:"115",
                        left:"37"
                    }}></View>
                </View>

                { props.infoDialog ? <InfoDialog childrenStyle={{
                        top:'82',
                        left:'88',
                        width:'80',
                        height:'48'
                    }}>
                        <Text style={{
                            positionType: "absolute",
                            top: "1",
                            left: "1",
                        }}
                              content={props.infoDialog.text}
                              color='#FFFFFF'
                              fontSize="5"
                              fontWidth="1"
                              textAlign="topLeft"/>
                        <Text style={{
                            positionType: "absolute",
                            top: "16",
                            left: "48",
                        }}
                              content="手柄防溜倒计时"
                              color='#00FF00'
                              fontSize="6"
                              fontWidth="1"
                              textAlign="center"/>
                        <Text style={{
                            positionType: "absolute",
                            top: "32",
                            left: "40",
                        }}
                              content="10"
                              color='#FF0000'
                              fontSize="12"
                              fontWidth="1"
                              textAlign="center"/>
                    </InfoDialog>
                    :<></>}

            </View>

    </>
}


export function InfoDialog(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage,
            backgroundUV:"24 10 24 24",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"11 0.75",
            ...props.childrenStyle
        }}>
            {props.children}
        </View>
    </>
}

export function DataArea(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage,
            backgroundUV:"0 34 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 1",
            ...props.childrenStyle
        }}>
            {props.children}
        </View>
    </>
}

export function BigDataAreaWithText(props: any){
    return <>
        <DataArea childrenStyle={props.childrenStyle}>
            <Text style={{
                position: "absolute",
                top: "3",
                left: props?.childrenStyle?.width ? (parseInt(props.childrenStyle.width)).toString() : "25",
            }}
                  content={props?.data ?? '0'}
                  color={props?.color ?? '#FFFFFF'}
                  fontSize={props?.size ?? "21"}
                  fontWidth="0.5"
                  textAlign="rightTop"/>
        </DataArea>
    </>
}

export function NextSignal(props: any){
    return <>
        <DataArea childrenStyle={{
            height:'9',
            width:'45',
            ...(props.childrenStyle)
        }}>
            <Text style={{
                position: "absolute",
                top: "2",
                left: "1",
            }}
                  content={props?.name ?? '-- ------'}
                  color={props?.color ?? '#FFFFFF'}
                  fontSize={props?.size ?? "5"}
                  fontWidth="1"
                  textAlign="leftTop"/>
        </DataArea>
    </>
}

export function MileageData(props:any){
    return <>
        <DataArea childrenStyle={{
            height:'15',
            width:'45',
            ...(props.childrenStyle)
        }}>
            <Text style={{
                position: "absolute",
                top: "2",
                left: "44",
            }}
                  content={props?.mileage ?? '0'}
                  color={props?.color ?? '#FFFF80'}
                  fontSize={props?.size ?? "12"}
                  fontWidth="0.5"
                  textAlign="rightTop"/>
        </DataArea>
    </>
}

export function InfoArea(props:any){
    return <>
        <View style={{
            positionType:'absolute',
            backgroundImage,
            backgroundUV:"10 34 10 10",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"3 0.5",
            ...props.childrenStyle
        }}>
            {props.children}
        </View>
    </>
}
