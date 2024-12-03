import React from "react";
import {Text, View} from "react-native-minecraft";
import {SelectButton} from "./SelectButton";
import {Input} from "./Input";
import { WhiteBlock } from "../../cir/components/WhiteBlock";

interface SelectInputProps {
    width: number;
    height: number;
    buttonWidth: number;
    selectAreaHeight?: number;
    selectEntry?: React.ReactNode;
    childrenStyle?: any;
    onButtonPress?: () => void;
    children?: React.ReactNode;
    activate?: boolean
}

export function SelectInput(props: SelectInputProps) {
    const inputWidth = props.width - props.buttonWidth;
    
    return <>
        <View style={{
            positionType: 'absolute',
            width: props.width.toString(),
            height: props.height.toString(),
            ...props.childrenStyle
        }}>
            <Input childrenStyle={{
                width: inputWidth.toString(),
                height: props.height.toString(),
                left: "0"
            }}>
                {props.children}
            </Input>
            
            <SelectButton childrenStyle={{
                width: props.buttonWidth.toString(),
                height: props.height.toString(),
                left: inputWidth.toString()
            }}/>

            {props.activate && props.selectAreaHeight && props.selectEntry && (
                <WhiteBlock style={{
                    left: "0",
                    width: (props.width).toString(),
                    height: props.selectAreaHeight.toString(),
                    top: props.height.toString()
                }}>
                    {props.selectEntry}
                </WhiteBlock>
            )}
        </View>
    </>
}

interface LabeledSelectInputProps {
    style?: any;
    text: string;
    content?: string;
    textWidth: number;
    inputWidth: number;
    buttonWidth: number;
    height: number;
    fontSize: number;
    activate: boolean;
    selectActivate?: boolean;
}

export function LabeledSelectInput(props: LabeledSelectInputProps) {
    return (
        <View style={{
            positionType: 'absolute',
            ...props.style
        }}>
            <Text style={{
                positionType: 'absolute',
                height: props.height.toString(),
                top: "1"
            }} 
            content={props.text} 
            fontSize={props.fontSize.toString()} 
            color="#000000" />
            
            <SelectInput
                width={props.inputWidth}
                height={props.height + 2}
                buttonWidth={props.buttonWidth}
                childrenStyle={{
                    left: props.textWidth.toString()
                }}
                selectAreaHeight={props.fontSize * 3}
                selectEntry={
                    <> </>
                }
                activate = { props.selectActivate }
            >
                <Text style={{
                    positionType: 'absolute',
                    height: props.height.toString(),
                    left: "1",
                    top: "1"
                }} 
                content={props.content || ""}
                fontSize={props.fontSize.toString()}
                color="#000000" />
            </SelectInput>
        </View>
    );
} 