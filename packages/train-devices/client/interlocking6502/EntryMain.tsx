import React, {useEffect, useState} from "react";
import {View} from "react-native-minecraft";

const background = require("../assets/interlocking.png")

interface IconButtonProps {
    left: string;
    backgroundUV: string;
    active?: boolean;
    onClick?: () => void;
    iconStyle?: {
        top?: string;
        left?: string;
        width?: string;
        height?: string;
    };
}

function IconButton({left, backgroundUV, active, onClick, iconStyle}: IconButtonProps) {
    return (
        <GUIButton 
            style={{
                top: '0',
                left,
                width: '20',
                height: '20'
            }}
            active={active}
            onclick={onClick}
        >
            <View style={{
                positionType: 'absolute',
                backgroundImage: background,
                backgroundUV,
                top: iconStyle?.top ?? '4',
                left: iconStyle?.left ?? '4',
                width: iconStyle?.width ?? '12',
                height: iconStyle?.height ?? '12'
            }}></View>
        </GUIButton>
    );
}

export default function EntrySettings(){
    const [editMode, setEditMode] = useState<'' | 'signal' | 'button' | 'light' | 'lever' | 'wire' | 'remove'>('');
    return <View>
        <IconButton left="0" backgroundUV="32 32 10 4" active={editMode == 'signal'} onClick={()=>editMode == 'signal' ? setEditMode('') : setEditMode('signal')}/>
        <IconButton left="21" backgroundUV="32 36 5 6" active={editMode == 'button'} onClick={()=>editMode == 'button' ? setEditMode('') : setEditMode('button')} />
        <IconButton left="42" backgroundUV="37 36 6 6" active={editMode == 'light'} onClick={()=>editMode == 'light' ? setEditMode('') : setEditMode('light')} />
        <IconButton left="63" backgroundUV="32 42 5 5" active={editMode == 'lever'} onClick={()=>editMode == 'lever' ? setEditMode('') : setEditMode('lever')} />
        <IconButton left="84" backgroundUV="42 42 5 5" active={editMode == 'wire'} onClick={()=>editMode == 'wire' ? setEditMode('') : setEditMode('wire')} />
        <IconButton left="105" backgroundUV="37 42 5 5" active={editMode == 'remove'} onClick={()=>editMode == 'remove' ? setEditMode('') : setEditMode('remove')} />

        <View style={{
            positionType: 'absolute',
            top:'20',
            left: '0'
        }}>
            <EntryMain></EntryMain>
        </View>
    </View>
}

export function EntryMain(){
    const [panels, updatePanels] = useState<ObjectBitSet<"LR"|"TB"|"TL"|"TR"|"BL"|"BR">[][]>(new Array(8).fill([]).map(t=>{
        return new Array(12).fill({});
    }));

    const [components, updateComponents] = useState<any[][]>(new Array(8).fill([]).map(t=>{
        return new Array(12).fill([]);
    }));
    
    return <>
        {
            panels.map((col,i,_)=>{
                return col.map((row,j,_)=>{
                    return <>
                        <BlockPanel6502 style={{
                            top: (i * 31).toString(),
                            left: (j * 31).toString()
                        }} state={row} toggle={(state)=>{
                            let newData : ObjectBitSet<'LR'|'TB'|'TL'|'TR'|'BL'|'BR'>;
                            if(state == 'TBLR'){
                                newData = {...row};
                                if(newData['LR']){
                                    newData['LR'] = false;
                                    newData['TB'] = true;
                                }else if(newData['TB']){
                                    newData['TB'] = false;
                                    newData['LR'] = false;
                                } else {
                                    newData['TB'] = false;
                                    newData['LR'] = true;
                                }
                            }else{
                                newData = {...row, [state]:!row[state]};
                            }
                            updatePanels(panels.map(($col,indexI)=>{
                                if(indexI != i)
                                    return $col;
                                return $col.map(($row,indexJ)=>{
                                    if(indexJ != j)
                                        return $row;
                                    return newData;
                                })
                            }))
                        }} updateComponents={(c)=>{
                            updateComponents(
                                components.map(($col,indexI)=>{
                                    if(indexI != i)
                                        return $col;
                                    return $col.map(($row,indexJ)=>{
                                        if(indexJ != j)
                                            return $row;
                                        return c;
                                    })
                                })
                            );

                        }} editWireMode = {false} />
                    </>;
                })
            })
        }
    </>
}

export type ObjectBitSet<T extends string> = {
    [K in T]: boolean;
};

export function BlockPanel6502(props:{
    style: any,
    state: ObjectBitSet<'LR'|'TB'|'TL'|'TR'|'BL'|'BR'>,
    toggle: (bit:'LR'|'TB'|'TL'|'TR'|'BL'|'BR'|"TBLR")=>void,
    editWireMode: boolean,
    updateComponents: (components: any)=>void
}){
    return <View style={{
        positionType: 'absolute',
        backgroundImage: background,
        backgroundUV:'0 0 31 31',
        height: "31",
        width: "31",
        ...props.style
    }}>
        { props.editWireMode ? <View style={{
            positionType: 'absolute',
            backgroundImage: background,
            backgroundUV:'0 32 10 10',
            height: "10",
            width: "10",
            top: "10",
            left: "10"
        }} onclick={()=>{
            props.toggle("TBLR");
        }}></View> : null}
        {
            props.state["TL"] ? <View style={{
                positionType: 'absolute',
                backgroundImage: background,
                backgroundUV:'96 0 15 15',
                height: "15",
                width: "15",
                top: "1",
                left: "1"
            }} onclick={ props.editWireMode ? ()=>props.toggle("TL") : null}></View> : props.editWireMode ? <View style={{
                positionType: 'absolute',
                backgroundImage: "none",
                height: "15",
                width: "15",
                top: "1", 
                left: "1"
            }} onclick={ ()=>props.toggle("TL")}></View> : null
        }
        {
            props.state["TR"] ? <View style={{
                positionType: 'absolute',
                backgroundImage: background,
                backgroundUV:'111 0 15 15',
                height: "15",
                width: "15",
                top: "1",
                left: "15"
            }} onclick={props.editWireMode ? ()=>props.toggle("TR") : null}></View> : props.editWireMode ? <View style={{
                positionType: 'absolute',
                backgroundImage: "none",
                height: "15",
                width: "15",
                top: "1",
                left: "15"
            }} onclick={()=>props.toggle("TR")}></View> : null
        }
        {
            props.state["BL"] ? <View style={{
                positionType: 'absolute',
                backgroundImage: background,
                backgroundUV:'96 15 15 15',
                height: "15",
                width: "15",
                top: "15",
                left: "1"
            }} onclick={props.editWireMode ? ()=>props.toggle("BL"):null}></View> : props.editWireMode ? <View style={{
                positionType: 'absolute',
                backgroundImage: "none",
                height: "15",
                width: "15",
                top: "15",
                left: "1"
            }} onclick={()=>props.toggle("BL")}></View>:null
        }
        {
            props.state["BR"] ? <View style={{
                positionType: 'absolute',
                backgroundImage: background,
                backgroundUV:'111 15 15 15',
                height: "15",
                width: "15", 
                top: "15",
                left: "15"
            }} onclick={props.editWireMode ? ()=>props.toggle("BR"):null}></View> : props.editWireMode ? <View style={{
                positionType: 'absolute',
                backgroundImage: "none",
                height: "15",
                width: "15",
                top: "15",
                left: "15"
            }} onclick={()=>props.toggle("BR")}></View>:null
        }
        {
            props.state["LR"] ?
                <View style={{
                    positionType: 'absolute',
                    backgroundImage: background,
                    backgroundUV:'32 0 31 31',
                    height: "31",
                    width: "31",
                    top: "0",
                    left: "0",
                }}></View>
                : null
        }
        {
            props.state["TB"]? <View style={{
                    positionType: 'absolute',
                    backgroundImage: background,
                    backgroundUV:'64 0 31 31',
                    height: "31",
                    width: "31",
                    top: "0",
                    left: "0"
                }}></View> : null
        }

        
        
    </View>
}

function GUIButton(props:{
    style: any,
    children?: React.ReactNode,
    active?: boolean,
    onclick?: ()=>void
}){
    return <><View style={{
        positionType: 'absolute',
        backgroundImage: background,
        backgroundUV: props.active ? '16 48 16 16' : '16 32 16 16',
        backgroundRenderType: "nine_slice",
        backgroundNineSliceParam: '6 0.75',
        ...props.style,
        backgroundFilterColor: 'AAFF00FF'
    }} onclick={props.onclick}>
        {props.children}
    </View></>
}