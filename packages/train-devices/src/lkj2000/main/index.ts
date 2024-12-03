import {defineGroup, defineState} from "react-native-minecraft-menu";
import {useSettings} from "./settings";
import {useSpecialDrive} from "./special_drive";
import {useMainQuery} from "./main_query";

export function useMain(){
    return defineGroup('main', ()=>{
        const [speed, updateSpeed] = defineState<"----" | number>(0, 'speed');
        const [signal, updateSignal] = defineState<string>("N", 'signal');
        const settings = useSettings();
        const specialDrive = useSpecialDrive();
        const mainQuery = useMainQuery();

        function onButtonClicked(button){
            console.info(`Button ${button} clicked!`)
            if(button == 'settings'){
                settings.setActive(!settings.isActive());
            }else if(settings.isActive()){
                settings.onButtonClicked(button);
            }else if(specialDrive.isActive()){
                specialDrive.onButtonClicked(button);
            }else if(mainQuery.isActive()){
                mainQuery.onButtonClicked(button);
            }else if(button == 'up'){
                specialDrive.setActive(!specialDrive.isActive());
            }else if(button == 'query'){
                mainQuery.setActive(!mainQuery.isActive());
            }
        }
        return {settings, onButtonClicked, updateSpeed, updateSignal};
    })
}