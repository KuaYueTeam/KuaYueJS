import React from "react";
import {View, Text} from "react-native-minecraft";
import {WhiteBlock} from "../../cir/components/WhiteBlock";
import {Table} from "../components/Table";

const backgroundImage = require('../../assets/devices.png');

const columns = [
    { title: "序号", key: "id", width: 20 },
    { title: "工务线路名", key: "lineName", width: 45 },
    { title: "行别", key: "direction", width: 20 },
    { title: "位置", key: "position", width: 60 },
    { title: "起止日期", key: "date", width: 35 ,fontWidth: "0.7"},
    { title: "起止时间", key: "time", width: 35 ,fontWidth: "0.8"},
    { title: "客限", key: "carriageLimit", width: 20 },
    { title: "货限", key: "freightLimit", width: 20 }
];

const dataSource = [
    {
        id: "01",
        lineName: "观塘线路所",
        direction: "上行",
        position: "695.00~700.00",
        date: "01-09~01-09",
        time: "23:00~23:59",
        carriageLimit: "特定",
        freightLimit: "引导",
        backgroundColor: "00FF00FF"
    },
    {
        id: "01",
        lineName: "观塘线路所",
        direction: "上行",
        position: "695.00~700.00",
        date: "01-09~01-09",
        time: "23:00~23:59",
        carriageLimit: "60",
        freightLimit: "42",
        backgroundColor: "FF0000FF"
    }
];

export default function NoticeQuery(props:{style?: any}) {
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
            <Text content="全部揭示查询" fontSize="6" style={{
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
                    dataSource={dataSource}
                    style={{
                        top: "0",
                        left: "0",
                        height: "175"
                    }}
                    width={254}
                />
            </WhiteBlock>
        </View>
    );
}