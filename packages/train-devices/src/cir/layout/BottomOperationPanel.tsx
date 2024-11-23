import React from "react";
import {View} from "react-native-minecraft";
import {DangerButton, DarkButton, LightButton} from "../components/Buttons";
import { LightTextButton } from "./MainEntry";

export default function BottomOperationPanel(){
    return <>
        <View style={{
            positionType: 'absolute',
            top: '160',
            left: '2'
        }}>
            <LightButton style={{left: '0', top: '0'}}></LightButton>
            <LightButton style={{left: '25', top: '0'}}></LightButton>
            <LightButton style={{left: '50', top: '0'}}></LightButton>
            <LightButton style={{left: '75', top: '0'}}></LightButton>
            <LightButton style={{left: '100', top: '0'}}></LightButton>
            <LightButton style={{left: '125', top: '0'}}></LightButton>
            <LightButton style={{left: '150', top: '0'}}></LightButton>
            <LightButton style={{left: '175', top: '0'}}></LightButton>


            <LightTextButton style={{left: '125', top: '24'}} text="列尾|消号"></LightTextButton>
            <LightTextButton style={{left: '150', top: '24'}} text="列尾|确认"></LightTextButton>
            <LightTextButton style={{left: '175', top: '24'}} text="风压|查询"></LightTextButton>


            <DangerButton style={{left: '87.5', top: '24'}}></DangerButton>
        </View>
        </>
}