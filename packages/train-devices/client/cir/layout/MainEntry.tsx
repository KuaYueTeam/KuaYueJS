import React from "react";
import {Text, View} from "react-native-minecraft";
import {DangerButton, DarkButton, LightButton} from "../components/Buttons";

export default function MainEntry(){
    return <>
        <View style={{
            positionType: 'absolute',
            left: '230'
        }}>
            <LightTextButton style={{left: '0', top: '0'}} text="呼叫"></LightTextButton>
            <LightTextButton style={{left: '0', top: '24'}} text="切换"></LightTextButton>
            <LightTextButton style={{left: '0', top: '48'}} text="挂断"></LightTextButton>
            <LightTextButton style={{left: '0', top: '72'}} text=""></LightTextButton>
            <DangerTextButton style={{left: '0', top: '100'}} text="紧急|呼叫"></DangerTextButton>
            <DangerTextButton style={{left: '0', top: '124'}} text="报警"></DangerTextButton>
            <DarkTextButton style={{left: '0', top: '148'}} text="主控"></DarkTextButton>
            <DarkTextButton style={{left: '0', top: '172'}} text="复位" fontColor="#FF0000"></DarkTextButton>

            <NumericLightButtonWithAlphabet style={{left: '28', top: '0'}} numeric={1}></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '28', top: '24'}} numeric={4} alphabet="GHI"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '28', top: '48'}} numeric={7} alphabet="PQRS"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '28', top: '72'}} numeric="*"></NumericLightButtonWithAlphabet>
            <LightTextButton style={{left: '28', top: '100'}} text="设置"></LightTextButton>
            <LightTextButton style={{left: '28', top: '124'}} text=" ←"></LightTextButton>
            <LightTextButton style={{left: '28', top: '148'}} text="查询"></LightTextButton>
            <LightTextButton style={{left: '28', top: '172'}} text="打印"></LightTextButton>

            <NumericLightButtonWithAlphabet style={{left: '52', top: '0'}} numeric={2} alphabet="ABC"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '52', top: '24'}} numeric={5} alphabet="JKL"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '52', top: '48'}} numeric={8} alphabet="TUV"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '52', top: '72'}} numeric={0} alphabet="_"></NumericLightButtonWithAlphabet>
            <LightTextButton style={{left: '52', top: '100'}} text=" ↑"></LightTextButton>
            <DarkTextButton style={{left: '52', top: '124'}} text="确认|签收"></DarkTextButton>
            <LightTextButton style={{left: '52', top: '148'}} text=" ↓"></LightTextButton>
            <LightTextButton style={{left: '52', top: '172'}} text="调车|请求"></LightTextButton>

            <NumericLightButtonWithAlphabet style={{left: '76', top: '0'}} numeric={3} alphabet="DEF"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '76', top: '24'}} numeric={6} alphabet="MNO"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '76', top: '48'}} numeric={9} alphabet="WXYZ"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '76', top: '72'}} numeric="#"></NumericLightButtonWithAlphabet>
            <LightTextButton style={{left: '76', top: '100'}} text="界面"></LightTextButton>
            <LightTextButton style={{left: '76', top: '124'}} text=" →"></LightTextButton>
            <LightTextButton style={{left: '76', top: '148'}} text="回格"></LightTextButton>
            <LightTextButton style={{left: '76', top: '172'}} text="退出"></LightTextButton>

        </View>
    </>
}

export function NumericLightButtonWithAlphabet(props: {
    style?: any,
    numeric?: number|string,
    alphabet?: string
}){
    return <LightButton style={{
        ...props.style
    }}>
        <Text style={{left:'7',top:'4',positionType:'absolute'}} content={props.numeric?.toString() ?? '*'} color="#000000" fontSize="8"></Text>
        <Text style={{left:'4',top:'12',positionType:'absolute'}} content={props.alphabet ?? ''} color="#000000" fontSize="4"></Text>
    </LightButton>
}

export function DarkTextButton(props: {
    style?: any,
    text?: string,
    fontColor?: string
}){
    const lines = (props.text ?? '').split("|");
    return <DarkButton style={{
        ...props.style
    }}>
        {lines.map((line, index) => (
            <Text
                style={{
                    left: '2',
                    top: `${(9 - lines.length * 4) + index * 8}`, // 每行增加10个单位的高度
                    positionType: 'absolute'
                }} 
                content={String(line)} 
                color={props.fontColor ?? '#FFFFFF'} 
                fontSize="7"
            />
        ))}
    </DarkButton>
}

export function LightTextButton(props: {
    style?: any,
    text?: string,
    fontColor?: string
}){
    const lines = (props.text ?? '').split("|");
    return <LightButton style={{
        ...props.style
    }}>
        {lines.map((line, index) => (
            <Text 
                style={{
                    left: '2',
                    top: `${(9 - lines.length * 4) + index * 8}`, 
                    positionType: 'absolute'
                }} 
                content={String(line)} 
                color={props.fontColor ?? '#000000'} 
                fontSize="7"
            />
        ))}
    </LightButton>
}

export function DangerTextButton(props: {
    style?: any,
    text?: string,
    fontColor?: string
}){
    const lines = (props.text ?? '').split("|");
    return <DangerButton style={{
        ...props.style
    }}>
        {lines.map((line, index) => (
            <Text 
                style={{
                    left: '2',
                    top: `${(9 - lines.length * 4) + index * 8}`, 
                    positionType: 'absolute'
                }} 
                content={String(line)}
                fontSize="7"
            />
        ))}
    </DangerButton>
}
