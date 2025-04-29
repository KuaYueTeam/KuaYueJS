import React, {useEffect} from "react";
import {OuterFrame} from "../components/Frame";
import {Text, useData, useGuiContext, View} from "react-native-minecraft";
import LabeledInput from "../components/LabeledInput";
import MenuButton from "../components/MenuButton";
import { LabeledSelectInput } from "../components/SelectInput";

export default function TrainSettings(props){
    const isActive = useData("active");
    return <>
        {isActive ? <TrainSettingsView style={{zIndex:"1"}}></TrainSettingsView> : null}
    </>
}

const speedLevels = [];

export function TrainSettingsView(props:{
    style: any
}){
    const activeElement = useData("activeElement");
    const driverNumber = useData("driverNumber");
    const assistantDriverNumber = useData("assistantDriverNumber");
    const sectionNumber = useData("sectionNumber");
    const stationNumber = useData("stationNumber");
    const trainType = useData("trainType");
    const trainTypeInSelect = useData("trainTypeInSelect");
    const trainTypeSelectTop = useData("trainTypeSelectTop");
    const trainNumber = useData("trainNumber");
    const trainCategory = useData("trainCategory");
    const trainCategoryInSelect = useData("trainCategoryInSelect");
    const mainOrSupplement = useData("mainOrSupplement");
    const mainOrSupplementInSelect = useData("mainOrSupplementInSelect");
    const totalWeight = useData("totalWeight");
    const carCount = useData("carCount");
    const calculatedLength = useData("calculatedLength");
    const speedLevel = useData("speedLevel");
    const speedLevelInSelect = useData("speedLevelInSelect");
    const speedLevelSelectTop = useData("speedLevelSelectTop");
    const loadWeight = useData("loadWeight");
    const passengerCar = useData("passengerCar");
    const heavyCar = useData("heavyCar");
    const emptyCar = useData("emptyCar");
    const nonOperationalCar = useData("nonOperationalCar");
    const substitutePassengerCar = useData("substitutePassengerCar");
    const guardCar = useData("guardCar");


    const sound = useGuiContext()['getContextModule']('sound');

    useEffect(() => {
        switch (activeElement) {
            case "driverNumber":
            case "assistantDriverNumber":
                sound?.dispatchSound("kuayue:lkj2000/settings/driver_number");
                break;
            case "sectionNumber":
                sound?.dispatchSound("kuayue:lkj2000/settings/sequence_id");
                break;
            case "stationNumber":
                sound?.dispatchSound("kuayue:lkj2000/settings/station_number");
                break;
            case "trainNumber":
                sound?.dispatchSound("kuayue:lkj2000/settings/train_number");
                break;
            case "totalWeight":
                sound?.dispatchSound("kuayue:lkj2000/settings/pull_weight");
                break;
        }
    }, [activeElement]);
    
    return <>
        <OuterFrame childrenStyle={{
            top:"45",
            left:"30",
            width:"195",
            height:"140",
            ...props.style
        }}>
            <Text style={{
                positionType:"absolute",
                top:"5",
                left:"5"
            }} content="参数设定" color="#000000" fontSize="5"></Text>
            <View style={{
                zIndex: "2"
            }}>
                <LabeledInput style={{
                    top: "20",
                    left: "5"
                }} text="司机号" content={driverNumber} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "driverNumber"}></LabeledInput>

                <LabeledInput style={{
                    top: "30",
                    left: "5"
                }} text="副司机号" content={assistantDriverNumber} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "assistantDriverNumber"}></LabeledInput>

                <LabeledInput style={{
                    top: "40",
                    left: "5"
                }} text="区段号" content={sectionNumber} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "sectionNumber"}></LabeledInput>

                <LabeledInput style={{
                    top: "50",
                    left: "5"
                }} text="车站号" content={stationNumber} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "stationNumber"}></LabeledInput>

                <LabeledSelectInput style={{
                    top: "60",
                    left: "5",
                    zIndex: "3"
                }} text="车次种类"
                content={trainType}
                availableSelection={["C", "D", "K", "G", "DJ", "Z", "T"]}
                textWidth={23}
                inputWidth={26}
                inSelectionMode={trainTypeInSelect}
                selectionTop={trainTypeSelectTop}
                height={5}
                fontSize={5}
                activate={activeElement === "trainType"} buttonWidth={6}></LabeledSelectInput>

                <LabeledInput style={{
                    top: "70",
                    left: "5"
                }} text="车次号" content={trainNumber} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "trainNumber"}></LabeledInput>

                <LabeledSelectInput style={{
                    top: "80",
                    left: "5",
                    zIndex: "2"
                }} text="列车种类"
                availableSelection={["客车", "货车"]}
                content={trainCategory}
                inSelectionMode={trainCategoryInSelect}
                textWidth={23}
                inputWidth={26}
                height={5}
                fontSize={5}
                activate={activeElement === "trainCategory"}
                buttonWidth={6}
                ></LabeledSelectInput>

                <LabeledSelectInput style={{
                    top: "90",
                    left: "5",
                    zIndex: "1"
                }}
                text="本/补"
                content={mainOrSupplement}
                availableSelection={["本务", "补机"]}
                textWidth={23}
                inputWidth={26}
                height={5} fontSize={5}
                activate={activeElement === "mainOrSupplement"}
                inSelectionMode={mainOrSupplementInSelect}
                buttonWidth={6}
                ></LabeledSelectInput>

                <LabeledInput style={{
                    top: "20",
                    left: "58"
                }} text="总  重" content={totalWeight} textWidth={23} inputWidth={45} height={5} fontSize={5} activate={activeElement === "totalWeight"}></LabeledInput>

                <LabeledInput style={{
                    top: "30",
                    left: "58"
                }} text="辆  数" content={carCount} textWidth={23} inputWidth={45} height={5} fontSize={5} activate={activeElement === "carCount"}></LabeledInput>

                <LabeledInput style={{
                    top: "40",
                    left: "58"
                }} text="计  长" content={activeElement === "calculatedLength" ? calculatedLength : (calculatedLength.length > 0 ? `${calculatedLength.slice(0,calculatedLength.length - 1)}.${calculatedLength.slice(calculatedLength.length - 1)}` : "0.0")} textWidth={23} inputWidth={45} height={5} fontSize={5} activate={activeElement === "calculatedLength"}></LabeledInput>

                <LabeledSelectInput style={{
                    top: "50",
                    left: "58"
                }} text="车速等级"
                content={speedLevel}
                availableSelection={trainCategory == "0" ? ["客1:160km/h", "客2:140km/h", "客3:120km/h", "客4:100km/h", "客5:80km/h"] : ["货车80km/h"]}
                inSelectionMode={speedLevelInSelect}
                selectionTop={speedLevelSelectTop}
                textWidth={23} inputWidth={45} height={5} fontSize={5} activate={activeElement === "speedLevel"} buttonWidth={6}></LabeledSelectInput>

                <LabeledInput style={{
                    top: "20",
                    left: "130"
                }} text="载重" content={loadWeight} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "loadWeight"}></LabeledInput>

                <LabeledInput style={{
                    top: "30",
                    left: "130"
                }} text="客车" content={passengerCar} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "passengerCar"}></LabeledInput>

                <LabeledInput style={{
                    top: "40",
                    left: "130"
                }} text="重车" content={heavyCar} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "heavyCar"}></LabeledInput>

                <LabeledInput style={{
                    top: "50",
                    left: "130"
                }} text="空车" content={emptyCar} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "emptyCar"}></LabeledInput>

                <LabeledInput style={{
                    top: "60",
                    left: "130"
                }} text="非运用车" content={nonOperationalCar} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "nonOperationalCar"}></LabeledInput>

                <LabeledInput style={{
                    top: "70",
                    left: "130"
                }} text="代客车" content={substitutePassengerCar} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "substitutePassengerCar"}></LabeledInput>

                <LabeledInput style={{
                    top: "80",
                    left: "130"
                }} text="守车" content={guardCar} textWidth={23} inputWidth={26} height={5} fontSize={5} activate={activeElement === "guardCar"}></LabeledInput>
            </View>

            <MenuButton style={{
                top: "110",
                left: "10",
                width:"27",
                height:"8"
            }} activate={activeElement === "mainSpeed"}>
                <Text fontSize="5" content="4 主速度" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "40",
                width:"27",
                height:"8"
            }} activate={activeElement === "system"}>
                <Text fontSize="5" content="3 系统" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "70",
                width:"27",
                height:"8"
            }} activate={activeElement === "time"}>
                <Text fontSize="5" content="2 时间" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "100",
                width:"27",
                height:"8"
            }} activate={activeElement === "maintenance"}>
                <Text fontSize="5" content="1 检修" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "130",
                width:"27",
                height:"8"
            }} activate={activeElement === "cancel"}>
                <Text fontSize="5" content="0 取消" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "110",
                left: "160",
                width:"27",
                height:"8"
            }} activate={activeElement === "confirm"}>
                <Text fontSize="5" content="  确 定  " style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>

            <MenuButton style={{
                top: "122",
                left: "10",
                width:"57",
                height:"8"
            }} activate={activeElement === "dualGauge"}>
                <Text fontSize="5" content="5 双针表切换" style={{
                    top: "2",
                    left:"2"
                }} color="#000000"></Text>
            </MenuButton>
        </OuterFrame>
    </>
}