import {defineGroup, defineState} from "react-native-minecraft-menu";
import {checkSettingsSchema, TrainSettings, useSettings} from "./settings";
import {useSpecialDrive} from "./special_drive";
import {useMainQuery} from "./main_query";

export function useMain(){
    return defineGroup('main', ()=>{
        const [speed, updateSpeed] = defineState<"----" | number>(0, 'speed');
        const [signal, updateSignal] = defineState<string>("N", 'signal');

        const [invalidInput, setInvalidInput] = defineState(false, "invalidInput");

        const [mainConfig, updateMainConfig] = defineState<TrainSettings>({
            driverNumber: "",
            assistantDriverNumber: "",
            sectionNumber: "",
            stationNumber: "",
            trainType: "",
            trainNumber: "",
            trainCategory: "",
            mainOrSupplement: "",
            totalWeight: "",
            carCount: "",
            calculatedLength: "",
            speedLevel: "",
            loadWeight: "",
            passengerCar: "",
            heavyCar: "",
            emptyCar: "",
            nonOperationalCar: "",
            substitutePassengerCar: "",
            guardCar: ""
        }, "currentConfig");

        const settings = useSettings((config)=>{
            if(checkSettingsSchema(config)){
                setInvalidInput(true);
                return;
            }
            setInvalidInput(false);
            updateMainConfig(config);
        });

        const specialDrive = useSpecialDrive();
        const mainQuery = useMainQuery();

        function onButtonClicked(button){
            console.info(`Button ${button} clicked!`)
            if(settings.isActive()){
                settings.onButtonClicked(button);
            }else if(specialDrive.isActive()){
                specialDrive.onButtonClicked(button);
            }else if(mainQuery.isActive()){
                mainQuery.onButtonClicked(button);
            }else if(button == 'up'){
                specialDrive.setActive(!specialDrive.isActive());
            }else if(button == 'query'){
                mainQuery.setActive(!mainQuery.isActive());
            } else if(button == 'settings'){
                settings.setActive(!settings.isActive());
                settings.setSettings(mainConfig());
            }
        }
        return {settings, onButtonClicked, updateSpeed, updateSignal};
    })
}