import React from "react";
import MainEntry from "./layout/MainEntry";
import OperationPanel from "./layout/OperationPanel";
import BottomOperationPanel from "./layout/BottomOperationPanel";
import {View, Text} from "react-native-minecraft";
import EntrySelection from "./layout/EntrySelection";
import {WhiteBlock} from "./components/WhiteBlock";

export default function CIR(){
    return <>
        <WhiteBlock style={{
            backgroundFilterColor:'28292CFF',
            height: "256",
            width: "326"
        }}>
            <Text style={{positionType: 'absolute', top: '4'}} content="CIR 列车无线通信装置" color="#FFFFFFFF" fontSize="16"/>
            <View style={{
                positionType: 'absolute',
                top: '35'
            }}>
                <MainEntry/>
                <OperationPanel/>
                <BottomOperationPanel/>
            </View>
        </WhiteBlock>
    </>;
}