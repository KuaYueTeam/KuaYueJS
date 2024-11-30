import {defineGroup, defineState} from "react-native-minecraft-menu";
import {createMenu} from "../utils/menu";

export function useSettings(){
    return defineGroup('settings', ()=>{
        const [isActive, setActive] = defineState(false, "active");
        const [activeElement, setActiveElement] = defineState("confirm", "activeElement");

        const [driverNumber, setDriverNumber] = defineState("", "driverNumber");
        const [assistantDriverNumber, setAssistantDriverNumber] = defineState("", "assistantDriverNumber");
        const [sectionNumber, setSectionNumber] = defineState("", "sectionNumber");
        const [stationNumber, setStationNumber] = defineState("", "stationNumber");
        const [trainType, setTrainType] = defineState("", "trainType");
        const [trainNumber, setTrainNumber] = defineState("", "trainNumber");
        const [trainCategory, setTrainCategory] = defineState("", "trainCategory");
        const [mainOrSupplement, setMainOrSupplement] = defineState("", "mainOrSupplement");
        const [totalWeight, setTotalWeight] = defineState("", "totalWeight");
        const [carCount, setCarCount] = defineState("", "carCount");
        const [calculatedLength, setCalculatedLength] = defineState("", "calculatedLength");
        const [speedLevel, setSpeedLevel] = defineState("", "speedLevel");
        const [loadWeight, setLoadWeight] = defineState("", "loadWeight");
        const [passengerCar, setPassengerCar] = defineState("", "passengerCar");
        const [heavyCar, setHeavyCar] = defineState("", "heavyCar");
        const [emptyCar, setEmptyCar] = defineState("", "emptyCar");
        const [nonOperationalCar, setNonOperationalCar] = defineState("", "nonOperationalCar");
        const [substitutePassengerCar, setSubstitutePassengerCar] = defineState("", "substitutePassengerCar");
        const [guardCar, setGuardCar] = defineState("", "guardCar");

        const focusConfiguration = {
            "driverNumber": {
                "next": "assistantDriverNumber",
                "previous": "mainSpeed",
                "type": "input",
                "insert": (data)=>setDriverNumber(driverNumber() + data),
                "delete": ()=>setDriverNumber(driverNumber().slice(0, -1))
            },
            "assistantDriverNumber": {
                "next": "sectionNumber",
                "previous": "driverNumber",
                "type": "input",
                "insert": (data)=>setAssistantDriverNumber(assistantDriverNumber() + data),
                "delete": ()=>setAssistantDriverNumber(assistantDriverNumber().slice(0, -1))
            },
            "sectionNumber": {
                "next": "stationNumber",
                "previous": "assistantDriverNumber",
                "type": "input",
                "insert": (data)=>setSectionNumber(sectionNumber() + data),
                "delete": ()=>setSectionNumber(sectionNumber().slice(0, -1))
            },
            "stationNumber": {
                "next": "trainType",
                "previous": "sectionNumber",
                "type": "input",
                "insert": (data)=>setStationNumber(stationNumber() + data),
                "delete": ()=>setStationNumber(stationNumber().slice(0, -1))
            },
            "trainType": {
                "next": "trainNumber",
                "previous": "stationNumber",
                "type": "input",
                "insert": (data)=>setTrainType(trainType() + data),
                "delete": ()=>setTrainType(trainType().slice(0, -1))
            },
            "trainNumber": {
                "next": "trainCategory",
                "previous": "trainType",
                "type": "input",
                "insert": (data)=>setTrainNumber(trainNumber() + data),
                "delete": ()=>setTrainNumber(trainNumber().slice(0, -1))
            },
            "trainCategory": {
                "next": "mainOrSupplement",
                "previous": "trainNumber",
                "type": "input",
                "insert": (data)=>setTrainCategory(trainCategory() + data),
                "delete": ()=>setTrainCategory(trainCategory().slice(0, -1))
            },
            "mainOrSupplement": {
                "next": "totalWeight",
                "previous": "trainCategory",
                "type": "input",
                "insert": (data)=>setMainOrSupplement(mainOrSupplement() + data),
                "delete": ()=>setMainOrSupplement(mainOrSupplement().slice(0, -1))
            },
            "totalWeight": {
                "next": "carCount",
                "previous": "mainOrSupplement",
                "type": "input",
                "insert": (data)=>setTotalWeight(totalWeight() + data),
                "delete": ()=>setTotalWeight(totalWeight().slice(0, -1))
            },
            "carCount": {
                "next": "calculatedLength",
                "previous": "totalWeight",
                "type": "input",
                "insert": (data)=>setCarCount(carCount() + data),
                "delete": ()=>setCarCount(carCount().slice(0, -1))
            },
            "calculatedLength": {
                "next": "speedLevel",
                "previous": "carCount",
                "type": "input",
                "insert": (data)=>setCalculatedLength(calculatedLength() + data),
                "delete": ()=>setCalculatedLength(calculatedLength().slice(0, -1))
            },
            "speedLevel": {
                "next": "loadWeight",
                "previous": "calculatedLength",
                "type": "input",
                "insert": (data)=>setSpeedLevel(speedLevel() + data),
                "delete": ()=>setSpeedLevel(speedLevel().slice(0, -1))
            },
            "loadWeight": {
                "next": "passengerCar",
                "previous": "speedLevel",
                "type": "input",
                "insert": (data)=>setLoadWeight(loadWeight() + data),
                "delete": ()=>setLoadWeight(loadWeight().slice(0, -1))
            },
            "passengerCar": {
                "next": "heavyCar",
                "previous": "loadWeight",
                "type": "input",
                "insert": (data)=>setPassengerCar(passengerCar() + data),
                "delete": ()=>setPassengerCar(passengerCar().slice(0, -1))
            },
            "heavyCar": {
                "next": "emptyCar",
                "previous": "passengerCar",
                "type": "input",
                "insert": (data)=>setHeavyCar(heavyCar() + data),
                "delete": ()=>setHeavyCar(heavyCar().slice(0, -1))
            },
            "emptyCar": {
                "next": "nonOperationalCar",
                "previous": "heavyCar",
                "type": "input",
                "insert": (data)=>setEmptyCar(emptyCar() + data),
                "delete": ()=>setEmptyCar(emptyCar().slice(0, -1))
            },
            "nonOperationalCar": {
                "next": "substitutePassengerCar",
                "previous": "emptyCar",
                "type": "input",
                "insert": (data)=>setNonOperationalCar(nonOperationalCar() + data),
                "delete": ()=>setNonOperationalCar(nonOperationalCar().slice(0, -1))
            },
            "substitutePassengerCar": {
                "next": "guardCar",
                "previous": "nonOperationalCar",
                "type": "input",
                "insert": (data)=>setSubstitutePassengerCar(substitutePassengerCar() + data),
                "delete": ()=>setSubstitutePassengerCar(substitutePassengerCar().slice(0, -1))
            },
            "guardCar": {
                "next": "confirm",
                "previous": "substitutePassengerCar",
                "type": "input",
                "insert": (data)=>setGuardCar(guardCar() + data),
                "delete": ()=>setGuardCar(guardCar().slice(0, -1))
            },
            "mainSpeed": {
                "left": "guardCar",
                "right": "system",
                "up": "driverNumber",
                "down": "dualGauge",
                "type": "button"
            },
            "system": {
                "left": "mainSpeed",
                "right": "time",
                "up": "driverNumber",
                "down": "dualGauge",
                "type": "button",
            },
            "time": {
                "left": "system",
                "right": "maintenance",
                "up": "driverNumber",
                "down": "dualGauge",
                "type": "button"
            },
            "maintenance": {
                "left": "time",
                "right": "cancel",
                "up": "driverNumber",
                "down": "dualGauge",
                "type": "button"
            },
            "cancel": {
                "left": "maintenance",
                "right": "confirm",
                "up": "driverNumber",
                "down": "dualGauge",
                "type": "button",
                "click": ()=>{
                    setActive(false);
                }
            },
            "confirm": {
                "left": "cancel",
                "right": "dualGauge",
                "up": "driverNumber",
                "down": "dualGauge",
                "type": "button",
                "click": ()=>{
                    setActive(false);
                }
            },
            "dualGauge": {
                "left": "confirm",
                "right": "driverNumber",
                "up": "mainSpeed",
                "down": "driverNumber",
                "type": "button"
            }
        } as const;

        const quickAction = {
            "0": "cancel",
            "4": "mainSpeed",
            "3": "system", 
            "2": "time",
            "1": "maintenance",
            "5": "dualGauge"
        } as const;

        const onButtonClicked = createMenu({
            focusConfiguration,
            quickAction,
            setActiveElement,
            activeElement
        });

        return {
            setActive,
            isActive,
            onButtonClicked,

            driverNumber,
            assistantDriverNumber,
            sectionNumber,
            stationNumber,
            trainType,
            trainNumber,
            trainCategory,
            mainOrSupplement,
            totalWeight,
            carCount,
            calculatedLength,
            speedLevel,
            loadWeight,
            passengerCar,
            heavyCar,
            emptyCar,
            nonOperationalCar,
            substitutePassengerCar,
            guardCar
        };
    });
}