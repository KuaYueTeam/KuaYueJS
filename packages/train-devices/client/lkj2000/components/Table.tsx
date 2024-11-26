import React from "react";
import {View, Text} from "react-native-minecraft";
import {WhiteBlock} from "../../cir/components/WhiteBlock";
import {OuterFrame} from "./Frame";

export interface TableColumn {
    title: string;
    key: string;
    width: number;
    fontWidth?: string;
}

export interface TableProps {
    columns: TableColumn[];
    dataSource: any[];
    style?: any;
    rowHeight?: number;
    headerHeight?: number;
    width?: number;
}

export function Table({
    columns,
    dataSource,
    style,
    rowHeight = 7,
    headerHeight = 8,
    width = 254
}: TableProps) {
    return (
        <WhiteBlock style={{
            ...style,
            width: `${width}`,
        }}>
            {/* 表头 */}
            <View>
                {columns.map((column, index) => (
                    <OuterFrame 
                        key={column.key}
                        childrenStyle={{
                            positionType: "absolute",
                            height: `${headerHeight}`,
                            left: `${getColumnLeftPosition(columns, index)}`,
                            top: "0",
                            width: `${column.width}`,
                            backgroundNineSliceParam: "3 1",
                        }}
                    >
                        <Text 
                            style={{
                                top: "1",
                                left: "4"
                            }}
                            content={column.title}
                            color="#000000"
                            fontSize="6"
                        />
                    </OuterFrame>
                ))}
            </View>

            {/* 数据行 */}
            {dataSource.map((row, rowIndex) => (
                <WhiteBlock 
                    key={rowIndex}
                    style={{
                        top: `${headerHeight + rowIndex * rowHeight}`,
                        left: "0",
                        width: `${width}`,
                        height: `${rowHeight}`,
                        backgroundFilterColor: row.backgroundColor || "FFFFFFFF"
                    }}
                >
                    {columns.map((column, colIndex) => (
                        <Text 
                            key={`${rowIndex}-${column.key}`}
                            style={{
                                positionType: "absolute",
                                top: "1",
                                left: `${getColumnLeftPosition(columns, colIndex) + 3}`
                            }}
                            content={row[column.key]}
                            fontWidth={column.fontWidth ?? "1"}
                            color="#000000"
                            fontSize="5"
                        />
                    ))}
                </WhiteBlock>
            ))}
        </WhiteBlock>
    );
}

function getColumnLeftPosition(columns: TableColumn[], index: number): number {
    return columns.slice(0, index).reduce((acc, col) => acc + col.width, 0);
} 