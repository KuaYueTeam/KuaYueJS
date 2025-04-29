import React from "react";
import MainEntry from "./layout/MainEntry";
import OperationPanel from "./layout/OperationPanel";
import {MenuChannelComponent, MenuChannelReceiver, useContextEvent, useData, Text, View} from "react-native-minecraft";
import FileTransfer from "./layout/FileTransfer";
import {WhiteBlock} from "../cir/components/WhiteBlock";

export default function App(){
    return <>
            <MenuChannelReceiver>
                <MenuChannelComponent id="root">
                    <LKJ2000DeviceMain/>
                </MenuChannelComponent>
            </MenuChannelReceiver>
    </>
}

export function LKJ2000DeviceMain(){
    const activeEntry = "main";
    return <>
        <WhiteBlock style={{
            backgroundFilterColor:'28292CFF',
            height: "256",
            width: "256"
        }}>
            {activeEntry == 'main' ? <View style={{zIndex:"0"}}><MenuChannelComponent id="main"><MainEntry/></MenuChannelComponent></View> : null}
            {activeEntry == 'file' ? <FileTransfer></FileTransfer> : null}
            <OperationPanel style={{zIndex:"255"}}></OperationPanel>
        </WhiteBlock>
    </>
}