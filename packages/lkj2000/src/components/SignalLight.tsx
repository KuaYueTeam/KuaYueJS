import React from "react"
import {Text, View} from "react-native-minecraft";

const texture = require('../assets/devices.png')

function getLightColorMap(type:string):[string] | [string,string] | [string,null,string]{
    switch (type) {
        case "L":
            return ["0000FFFF"];
        case "LU":
            return ["FFFF00FF","00FF00FF"];
        case "U":
            return ["FFFF00FF"];
        case "UU":
            return ["FFFF00FF","FFFF00FF"];
        case "U2":
            return ["FFFF00FF",null,"2"];
        case "HU":
            return ["FF0000FF","FFFF00FF"];
        case "H":
            return ["FF0000FF"];
        case "B":
            return ["FFFFFFFF"];
        default:
            return ["00000000"];
    }
}

export function SignalLight(props:{
    style: any,
    type: string
}){
    let lightInfo = getLightColorMap(props.type);
    return <>
            <View style={{
                ...props.style,
                positionType:"absolute",
                height:"15",
                width:"15"
            }}>
                { lightInfo.length == 1 ? <View style={{
                    positionType:"absolute",
                    backgroundImage:texture,
                    top:"0",
                    left:"0",
                    height:"15",
                    width:"15",
                    backgroundUV:"131 42 40 40",
                    backgroundFilterColor:lightInfo[0]
                }}></View> : null}

                { lightInfo.length == 2 ? <>
                    <View style={{
                        positionType:"absolute",
                        backgroundImage:texture,
                        top:"0",
                        left:"0",
                        height:"7",
                        width:"15",
                        backgroundUV:"131 42 40 19",
                        backgroundFilterColor:lightInfo[0]
                    }}></View>
                    <View style={{
                        positionType:"absolute",
                        backgroundImage:texture,
                        top:"8",
                        left:"0",
                        height:"7",
                        width:"15",
                        backgroundUV:"131 63 40 19",
                        backgroundFilterColor:lightInfo[1]
                    }}></View>
                </> : null}

                { lightInfo.length == 3 ? <>
                    <View style={{
                        positionType:"absolute",
                        backgroundImage:texture,
                        top:"0",
                        left:"0",
                        height:"15",
                        width:"15",
                        backgroundUV:"131 42 40 40",
                        backgroundFilterColor:lightInfo[0]
                    }}>
                        <Text style={{
                            positionType:"absolute",
                            top:"4",
                            left:"5"
                        }} fontSize="8" color="#0000FF" content={lightInfo[2]}></Text>
                    </View>
                </> : null}

            </View>
        </>
}