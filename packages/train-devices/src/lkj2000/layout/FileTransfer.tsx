import React from "react";
import {View, Text} from "react-native-minecraft";
import {WhiteBlock} from "../../cir/components/WhiteBlock";
import {Table} from "../components/Table";

const backgroundImage = require('../../assets/devices.png');

const columns = [
    { title: "文件", key: "fileId", width: 20 },
    { title: "车次", key: "trainNo", width: 25 },
    { title: "司机", key: "driver", width: 25 },
    { title: "大小", key: "size", width: 25 },
    { title: "生成时间", key: "createTime", width: 31, fontWidth: "0.7" }
];

const leftDataSource = [
    {
        fileId: "001",
        trainNo: "G1234",
        driver: "1789",
        size: "10003",
        createTime: "05-06 13:45"
    }
];

const rightDataSource = [
    {
        fileId: "002",
        trainNo: "G5678",
        driver: "23309",
        size: "25594",
        createTime: "05-06 13:45"
    }
];

export default function FileTransfer(props:{style?: any}) {
    return (
        <View style={{
            height: '212',
            width: '256',
            positionType:'absolute',
            backgroundImage,
            backgroundUV:"24 10 24 24",
            backgroundRenderType:"nine_slice",
            backgroundNineSliceParam:"11 1",
            ...props.style
        }}>
            <Text content="文件转储" fontSize="6" style={{
                left:"2",
                top:"2"
            }}/>
            <WhiteBlock style={{
                top: "9",
                left: "0",
                height: "202",
                width: "254",
                backgroundFilterColor:"CCCCCCFF"
            }}>
                <Table 
                    columns={columns}
                    dataSource={leftDataSource}
                    style={{
                        top: "0",
                        left: "0",
                        height: "175",
                        width: "126"
                    }}
                    width={125}
                />
                <Table 
                    columns={columns}
                    dataSource={rightDataSource}
                    style={{
                        top: "0",
                        left: "128",
                        height: "175",
                        width: "126"
                    }}
                    width={125}
                />
            </WhiteBlock>
        </View>
    );
} 