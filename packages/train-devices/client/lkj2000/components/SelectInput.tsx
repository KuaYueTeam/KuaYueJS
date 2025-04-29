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
    inSelectionMode?: boolean;
    selectionTop?: number
    availableSelection?: string[]
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
                selectAreaHeight={(props.fontSize + 1) * 4}
                selectEntry={
                    <>
                        {
                            (props.availableSelection??[]).slice(props.selectionTop ?? 0,(props.selectionTop ?? 0) + 4).map((t,index)=>{
                                return <>

                                    <WhiteBlock style={{
                                        height: `${props.fontSize}`,
                                        top: `${index * (props.fontSize + 1)}`,
                                        width: `${props.inputWidth}`,
                                        backgroundFilterColor: props.content == (index + (props.selectionTop ?? 0)).toString() ? '000080FF' : '00000000'
                                    }}>
                                        <Text style={{
                                            positionType: 'absolute',
                                            height: `${props.fontSize}`,
                                            left: "1",
                                            top: `0`
                                        }}
                                              content={t}
                                              fontSize={`${props.fontSize}`}
                                              color={props.content == (index + (props.selectionTop ?? 0)).toString() ? "#FFFFFF" : "#000000"} />
                                    </WhiteBlock>

                                </>
                            })

                        }
                    </>
                }
                activate = { props.inSelectionMode }
            >
                <Text style={{
                    positionType: 'absolute',
                    height: props.height.toString(),
                    left: "1",
                    top: "1"
                }} 
                content={(props.availableSelection??[])[parseInt(props.content ?? "")] ?? ""}
                fontSize={props.fontSize.toString()}
                color="#000000" />
            </SelectInput>
        </View>
    );
} 