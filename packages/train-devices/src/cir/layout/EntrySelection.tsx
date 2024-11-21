import React from "react";
import {WhiteBlock} from "../components/WhiteBlock";
import {Text} from "react-native-minecraft";

export default function EntrySelection(){
    return <>
        <WhiteBlock style={{
                    left:'0',
                    top:'0',
                    width:'200',
                    height:'150',
                    backgroundFilterColor:'0080FFFF'
                }}>
            <Text style={{
                left: "68",
                top:"4"
            }} content="请选择可用进路"/>
             <WhiteBlock style={{
                        top:"15",
                        left:"0",
                        width: "200",
                        height: "8",
                        backgroundFilterColor: "FF000000"
                    }}>
                 <Text style={{
                    left: "2",
                    top:"1"
                }} content="目前所在的股道: 京广线 长沙站 上行正线" fontSize="6"/>
             </WhiteBlock>
            <WhiteBlock style={{
                        top:"23",
                        left:"0",
                        width: "200",
                        height: "8",
                        backgroundFilterColor: "FF0000FF"
                    }}>
                 <Text style={{
                    left: "2",
                    top:"1"
                }} content="1. 上行正线 -> 京广4股道" fontSize="6"/>
             </WhiteBlock>
            <WhiteBlock style={{
                        top:"31",
                        left:"0",
                        width: "200",
                        height: "8",
                        backgroundFilterColor: "FF000000"
                    }}>
                 <Text style={{
                    left: "2",
                    top:"1"
                }} content="2. 上行正线 -> 京广5股道" fontSize="6"/>
             </WhiteBlock>
            <WhiteBlock style={{
                        top:"39",
                        left:"0",
                        width: "200",
                        height: "8",
                        backgroundFilterColor: "FF000000"
                    }}>
                 <Text style={{
                    left: "2",
                    top:"1"
                }} content="3. 上行正线 -> 京广6股道" fontSize="6"/>
             </WhiteBlock>
            <WhiteBlock style={{
                        top:"47",
                        left:"0",
                        width: "200",
                        height: "8",
                        backgroundFilterColor: "FF000000"
                    }}>
                 <Text style={{
                    left: "2",
                    top:"1"
                }} content="4. 上行正线 -> 京广7股道" fontSize="6"/>
             </WhiteBlock>
            <WhiteBlock style={{
                        top:"55",
                        left:"0",
                        width: "200",
                        height: "8",
                        backgroundFilterColor: "FF000000"
                    }}>
                 <Text style={{
                    left: "2",
                    top:"1"
                }} content="5. 上行正线 -> 沪昆2股道" fontSize="6"/>
             </WhiteBlock>
        </WhiteBlock>
    </>
}