import React from "react";
import {Text, View} from "react-native-minecraft";
import {DangerButton, DarkButton, LightButton} from "../components/Buttons";

export default function MainEntry(){
    return <>
        <View style={{
            positionType: 'absolute',
            left: '230'
        }}>
            <LightButton style={{left: '0', top: '0'}}></LightButton>
            <LightButton style={{left: '0', top: '24'}}></LightButton>
            <LightButton style={{left: '0', top: '48'}}></LightButton>
            <LightButton style={{left: '0', top: '72'}}></LightButton>
            <DangerButton style={{left: '0', top: '100'}}></DangerButton>
            <DangerButton style={{left: '0', top: '124'}}></DangerButton>
            <DarkButton style={{left: '0', top: '148'}}></DarkButton>
            <DarkButton style={{left: '0', top: '172'}}></DarkButton>

            <NumericLightButtonWithAlphabet style={{left: '28', top: '0'}} numeric={1}></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '28', top: '24'}} numeric={4} alphabet="GHI"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '28', top: '48'}} numeric={7} alphabet="PQRS"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '28', top: '72'}} numeric="*"></NumericLightButtonWithAlphabet>
            <LightButton style={{left: '28', top: '100'}}></LightButton>
            <LightButton style={{left: '28', top: '124'}}></LightButton>
            <LightButton style={{left: '28', top: '148'}}></LightButton>
            <LightButton style={{left: '28', top: '172'}}></LightButton>

            <NumericLightButtonWithAlphabet style={{left: '52', top: '0'}} numeric={2} alphabet="ABC"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '52', top: '24'}} numeric={5} alphabet="JKL"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '52', top: '48'}} numeric={8} alphabet="TUV"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '52', top: '72'}} numeric={0} alphabet="_"></NumericLightButtonWithAlphabet>
            <LightButton style={{left: '52', top: '100'}}></LightButton>
            <DarkButton style={{left: '52', top: '124'}}></DarkButton>
            <LightButton style={{left: '52', top: '148'}}></LightButton>
            <LightButton style={{left: '52', top: '172'}}></LightButton>

            <NumericLightButtonWithAlphabet style={{left: '76', top: '0'}} numeric={3} alphabet="DEF"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '76', top: '24'}} numeric={6} alphabet="MNO"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '76', top: '48'}} numeric={9} alphabet="WXYZ"></NumericLightButtonWithAlphabet>
            <NumericLightButtonWithAlphabet style={{left: '76', top: '72'}} numeric="#"></NumericLightButtonWithAlphabet>
            <LightButton style={{left: '76', top: '100'}}></LightButton>
            <LightButton style={{left: '76', top: '124'}}></LightButton>
            <LightButton style={{left: '76', top: '148'}}></LightButton>
            <LightButton style={{left: '76', top: '172'}}></LightButton>

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